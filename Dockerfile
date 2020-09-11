# Define what image to build from
FROM node:12

# Define the working directory of the project
WORKDIR /app

# Copy packages for cached Docker
COPY package*.json ./

# run npm install... :/
RUN npm install

# Bundle your app's source code insede the docker image 
COPY . .

ENV PORT=8080 

# Expose de app on the port binded
EXPOSE 8080

# command for start the app
CMD ["npm", "start"]
