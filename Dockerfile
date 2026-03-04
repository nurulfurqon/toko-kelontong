FROM node:20-alpine as build
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

WORKDIR /app

# Prepare pnpm https://pnpm.io/installation#using-corepack
RUN npm install --global corepack@latest
RUN corepack enable

COPY package.json pnpm-lock.yaml /app/

RUN pnpm install --frozen-lockfile --ignore-scripts

COPY . /app

RUN pnpm run postinstall && pnpm run build

FROM gcr.io/distroless/nodejs20-debian12 as prod

WORKDIR /app

COPY --from=build /app/.output /app/.output

EXPOSE 3000/tcp

CMD ["/app/.output/server/index.mjs"]