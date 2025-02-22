
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Ensure directory exists
const dir = path.join(__dirname, 'environments');
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

// Create the `environment.ts` file content
const targetPath = path.join(dir, 'environment.ts');;
const envConfigFile = `
export const environment = {
  production: false,
  baseApiUrl: '${process.env['BASE_API_URL']}',
};
`;

// Write the content to environment.ts
fs.writeFileSync(targetPath, envConfigFile);