FROM node:16.14.0
RUN mkdir /app/
WORKDIR /app/
COPY . /app/
COPY .env /app/
RUN yarn add --production
RUN yarn add typescript
RUN yarn build
CMD [ "yarn", "start" ]