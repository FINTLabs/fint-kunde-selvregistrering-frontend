FROM node:22
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn build
RUN yarn global add serve

ENV PORT=8000
EXPOSE 8000

CMD ["serve", "-s", "build"]