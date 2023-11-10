# Sprint 9  

- implement api to server
- get approval before merging to main 

### Overview

- Intro
- Figma
- Images
- javscript
- html
- added css
- api 
- backnend interaction
- passing data to object models 

# **AboutMe**

- Hello my name is Joshua B. Zimmerman. This project is remake as I dumped the previous project and I needed to retry to completely understand what I was doing. I have built a design based on a FIGMA shared project, additionally I have improvised troubleshooting, testing and released this project on gitPages.

- This project shows a usage of a shared FIGMA project ui file, containing both desktop projects, and mobile project with specific size settings, styling and resolutions. - - This is a project that is meant to represent an a example of a unifiied and dynamic website. This is to be used as a growing, and changing project thoughout the rest of class, more to come !!!!

- To view this iteration of this first stage of the project: click here: https://zimmermanjosh.github.io/se_project_aroundtheus/

# **Updates and Development**

# **Setup build for production and deployment - follow the below steps:**
- 1.) install nvm on your local machine
  
  MAC: 
  - https://tecadmin.net/install-nvm-macos-with-homebrew/ 
  
  WINDOWS:
  
  - https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/ (WINDOWS)
- 2.) clone the git source repository
  - `git clone "https://github.com/zimmermanjosh/se_project_aroundtheus/tree/project9_partII" `
- 3.)  build the project and start the deployment : 
  
  type the following in order in your terminal:
  - `npm install`  || `npm i` - this will install the dependencies in project
  - `npm run reset` - this will select the corect version of node, clean the workspace directory, then reinstall node and start deployment
  
  note:  the below commands are shortcut commands if you need them. running `npm run reset` will automagically start the deployment
  - `npm run start:prod` - this will build production 
  - `npm run start:dev` - this will start web and allow for live test deployment and triage.
## scripts in package.json

  npm run commands:

    "start:prod": "webpack --mode production",
    "start:dev": "webpack serve --mode development",
    "reset": "rm -rf /node_modules/ &&  nvm use && npm install && npm run start:prod && npm run start:dev"
