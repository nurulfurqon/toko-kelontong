FROM node:20-alpine as build

WORKDIR /app

COPY package.json /app

RUN npm install -g pnpm
RUN pnpm install

COPY . /app

RUN pnpm run build

FROM gcr.io/distroless/nodejs20-debian12 as prod

WORKDIR /app

COPY --from=build /app/.output /app/.output

EXPOSE 3000/tcp

CMD ["/app/.output/server/index.mjs"]