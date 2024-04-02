FROM node:21-alpine
COPY . /src
WORKDIR /src
RUN yarn && yarn build