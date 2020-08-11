FROM node:12-alpine
ARG APP_CODE_PATH_CONTAINER=/app
RUN apk add --no-cache --update bash
COPY ./ ${APP_CODE_PATH_CONTAINER}
WORKDIR ${APP_CODE_PATH_CONTAINER}
RUN npm install
RUN npm run build
CMD npm start