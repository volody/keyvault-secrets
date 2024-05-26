const { SecretClient } = require("@azure/keyvault-secrets");
const { DefaultAzureCredential } = require("@azure/identity");

// Initialize the secret client
const keyVaultName = process.env.KEY_VAULT_NAME;
const kvUri = `https://${keyVaultName}.vault.azure.net`;
const credential = new DefaultAzureCredential();
const client = new SecretClient(kvUri, credential);

// Function to retrieve secret
async function getSecret(secretName) {
  try {
    const secret = await client.getSecret(secretName);
    return secret.value;
  } catch (err) {
    console.error(`Error retrieving secret ${secretName}:`, err);
    throw err;
  }
}

async function main() {
  // Retrieve secrets from Azure Key Vault
  const awsRegion = await getSecret("AWS_REGION");
  const awsAccessKeyId = await getSecret("AWS_ACCESS_KEY_ID");
  const awsSecretAccessKey = await getSecret("AWS_SECRET_ACCESS_KEY");

  console.log(`awsRegion         :${awsRegion}`);
  console.log(`awsAccessKeyId    :${awsAccessKeyId}`);
  console.log(`awsSecretAccessKey:${awsSecretAccessKey}`);
}

main().catch((err) => {
  console.error("Error in main function:", err);
});
