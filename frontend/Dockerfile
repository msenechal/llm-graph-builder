# Step 1: Build the React application
FROM node:20 AS build
ENV BACKEND_API_URL = "https://backendtest-dcavk67s4a-uc.a.run.app"
WORKDIR /app
COPY package.json  yarn.lock ./
RUN yarn install
COPY . ./
RUN yarn run build

# Step 2: Serve the application using Nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]