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
