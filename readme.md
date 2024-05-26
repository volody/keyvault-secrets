## use keyvault with Apollo Server

Create new repo:

```bash
mkdir keyvault-secrets
cd keyvault-secrets
git init
git add .
git commit -m "Initial commit"
```

push local repo to github:

```bash
git remote add origin https://github.com/<USERNAME>/<REPO_NAME>.git
git push -u origin main --force
```

### Set Up the Node.js Server

Create a new directory for the server:

```bash
mkdir server
cd server
```

Initialize a new Node.js project and install the necessary packages

```bash
npm init -y
npm install apollo-server-express graphql express
npm install @aws-sdk/client-s3 @aws-sdk/s3-request-presigner
```
