FROM node:21
COPY . /src
WORKDIR /src
RUN yarn && yarn build