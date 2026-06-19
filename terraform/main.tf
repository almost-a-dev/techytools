terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.0"
    }
  }
  # Backend configuration will be partially provided via CLI/init for security
  backend "azurerm" {}
}

provider "azurerm" {
  features {}
  skip_provider_registration = true
  #
}

resource "azurerm_resource_group" "rg" {
  name     = var.resource_group_name
  location = var.location
}

resource "azurerm_static_site" "swas" {
  name                = var.app_name
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
  sku_tier            = "Free"
  sku_size            = "Free"
}

output "static_web_app_default_host_name" {
  value = azurerm_static_site.swas.default_host_name
}

output "static_web_app_api_key" {
  value     = azurerm_static_site.swas.api_key
  sensitive = true
}
