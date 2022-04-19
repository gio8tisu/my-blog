FROM node:16

WORKDIR /app
ADD . /app
RUN yarn install
RUN yarn build

CMD ["yarn", "start"]
