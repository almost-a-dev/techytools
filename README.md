# TechyTools

A modern, responsive browser-based toolset for IT professionals including SQL, XML, and JSON formatters, and an XML to JSON converter.

## Features
- SQL Formatter
- JSON Formatter
- XML Formatter
- XML to JSON Converter
- Responsive Sidebar with Search
- Dark Mode Support

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

## Azure Hosting (Azure Static Web Apps)

This project is configured to be hosted on **Azure Static Web Apps**.

### Prerequisites
1. An Azure Account.
2. The project pushed to a GitHub repository.

### Deployment Steps
1. Go to the [Azure Portal](https://portal.azure.com).
2. Create a new **Static Web App**.
3. Select your Subscription and Resource Group.
4. Under **Deployment details**, select **GitHub** and authorize Azure to access your account.
5. Select your Organization, Repository, and Branch (`main`).
6. In **Build Details**, select the **Vite** preset (if available) or use:
   - **App location**: `/`
   - **Api location**: (leave empty)
   - **Output location**: `dist`
7. Click **Review + create**, then **Create**.
8. Azure will automatically add a GitHub Action workflow to your repository (this project already includes a compatible one in `.github/workflows/azure-static-web-apps.yml`).

### Configuration
- `staticwebapp.config.json`: Handles client-side routing (fallback to `index.html`) and sets basic security headers.
- `.github/workflows/azure-static-web-apps.yml`: Automates the build and deployment process on every push to `main`.

## Infrastructure (Terraform)

This project uses **Terraform** to manage Azure infrastructure.

### Secure Infrastructure Setup

To keep your infrastructure secure in a public repository:
1.  **Remote State**: The Terraform state is stored in an Azure Blob Storage container. This ensures that the state file (which can contain sensitive info) is never committed to Git.
2.  **Secrets Management**: Azure credentials and backend configuration are managed via **GitHub Secrets**.
3.  **CI/CD**: A GitHub Action (`.github/workflows/terraform.yml`) automates the plan and apply process.

### One-time Setup

Before you can use Terraform, you need to create the storage for the state:
```bash
# Create Resource Group
az group create --name rg-terraform-state --location westeurope

# Create Storage Account
az storage account create --name techytoolstfstate --resource-group rg-terraform-state --sku Standard_LRS --encryption-services blob

# Create Container
az storage container create --name tfstate --account-name techytoolstfstate
```

### GitHub Secrets Required

Add the following secrets to your GitHub repository:
- `AZURE_CLIENT_ID`: Service Principal Application (client) ID.
- `AZURE_CLIENT_SECRET`: Service Principal Secret.
- `AZURE_SUBSCRIPTION_ID`: Azure Subscription ID.
- `AZURE_TENANT_ID`: Azure Tenant ID.
- `TF_STATE_RG`: `rg-terraform-state`
- `TF_STATE_STORAGE_ACCOUNT`: `techytoolstfstate`
- `TF_STATE_CONTAINER`: `tfstate`

## Teardown / Deletion

If you want to destroy the static site and stop deployment:
1. **Terraform**: If you used Terraform, run `terraform destroy` locally or via a manual GitHub Action run to remove all infrastructure.
2. **Azure Portal**: (Manual) Go to your Static Web App resource and click **Delete**.
3. **GitHub Workflow**: Delete the `.github/workflows/azure-static-web-apps.yml` and `.github/workflows/terraform.yml` files.
4. **GitHub Secrets**: Remove any secrets from your repository settings.

## Security

This project is safe for public repositories:
- **Secrets**: The sensitive deployment token and Azure credentials are NOT stored in the code. They are referenced via GitHub Secrets, which are encrypted and not visible to public viewers or contributors.
- **Terraform State**: We use a remote backend for Terraform state storage (Azure Blob Storage). State files often contain sensitive metadata, so keeping them out of Git is critical for security.
- **Client-side only**: Since this is a static site (SPA), there is no backend code or database credentials exposed. All formatting logic happens in the user's browser.
- **CSP**: The `staticwebapp.config.json` includes a Content Security Policy (CSP) to help protect against XSS and other injection attacks.
