FROM node:9.6.1-slim

# install dependencies
COPY package.json /
RUN npm install

WORKDIR /app/

# copy source
COPY . /app/

# entrypoint
CMD npm start
