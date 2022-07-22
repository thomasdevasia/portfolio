echo "Building the project..."
npm run build

echo "Deploying the project to server..."
scp -r build/* tom@109.74.198.112:/var/www/109.74.198.112/