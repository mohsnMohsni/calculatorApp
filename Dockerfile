FROM node:alpine 

WORKDIR /app
COPY ./package.json ./yarn.lock ./
RUN yarn install --production --ignore-scripts --prefer-offline
COPY . .
RUN yarn build
EXPOSE 3000

CMD ["yarn", "start"]