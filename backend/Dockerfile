FROM node:16

WORKDIR /app
ADD ./package.json ./yarn.lock /app
RUN yarn install
ADD . /app
RUN yarn build

CMD ["yarn", "start"]
