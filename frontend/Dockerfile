FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
ENV PATH /app/node_modules/.bin:$PATH
RUN npm i
CMD npm start --host 0.0.0.0 --port 3000 --disableHostCheck true