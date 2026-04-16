# Use lightweight image
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

# Install only production deps
RUN npm install --only=production

COPY . .

EXPOSE 5000

CMD ["node", "src/app.js"]