echo "Building the project..."
npm run build

echo "Deploying the project to server..."
# save the server address and user as environment
scp -r build/* $USER@$SERVER_ADDRESS
