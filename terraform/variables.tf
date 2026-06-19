variable "resource_group_name" {
  type        = string
  description = "Name of the resource group"
  default     = "rg-techytools"
}

variable "location" {
  type        = string
  description = "Azure region"
  default     = "West Europe"
}

variable "app_name" {
  type        = string
  description = "Name of the Static Web App"
  default     = "stapp-techytools"
}
