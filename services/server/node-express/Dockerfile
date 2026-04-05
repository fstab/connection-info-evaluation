FROM node:25-slim
WORKDIR /app
COPY package.json ./
RUN npm install --omit=dev
COPY server.js ./
EXPOSE 8080
ENV NODE_OPTIONS="--require @opentelemetry/auto-instrumentations-node/register"
ENTRYPOINT ["node", "server.js"]
