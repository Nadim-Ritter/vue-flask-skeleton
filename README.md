# skeleton

test

## Overview

test

### Client

The client uses the following technologies:

#### [VueJs Version 3.3.*](https://vuejs.org/)
 - Composition API and Script Setup Syntax
 - Typescript
 - [Vuetify](https://vuetifyjs.com/en/) as CSS Framework

### Server

The server uses the following technologies:

#### [ExpressJs Version 4.18.*](https://expressjs.com/)
 - Typescript
 - Axios as API-Request library
 

## Local development

Instructions on how to get a local development environment up and running.

#### Required technologies

 - your favorite code editor such as [VS-Code](https://code.visualstudio.com/)
 - Node and NPM as CLI-Tools
	- [Windows](https://phoenixnap.com/kb/install-node-js-npm-on-windows)
	- [Mac](https://treehouse.github.io/installation-guides/mac/node-mac.html)
	- [Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04)
 - SP-Server up and running (follow the [SP-Server](https://github.com/SafeExamBrowser/seb-screen-proctoring-server) instructions)
 - Optional: [Docker](https://www.docker.com/) for building and deploying the application


#### Steps to follow

 1. Clone this repo to your local machine
 2. navigate to the "client" folder
    - create a `.env` file
    - add the following content:
    ```
    VITE_SERVER_URL="http://localhost" 
    VITE_SERVER_PORT="3000"
    ```
 3. run `npm install`
 4. run `npm run dev`
 5. if everything worked correctly, you should see an output in your terminal similar this one:
     ```
    VITE v4.4.9  ready in 281 ms
    ➜  Local:   http://localhost:8010/
    ➜  Network: use --host to expose
    ➜  press h to show help
    ```
6. gang ufd flask getting started site  
  
 

#### Troubleshooting

