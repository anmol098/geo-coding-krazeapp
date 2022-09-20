## KrazeApp 

# Steps to Run the Project

- `npm install` to install the required dependencies
- create a `.env` file at root of the project 
- copy the applicable env varibale from the `.env.sample` file
  - GOOGLE_MAP_API_KEY :- can be taken from google
  - NODE_ENV:- can be either development or production
  - INPUT_FILE_PATH :- full absolute path to the input file
- After adding the env variable to run the project execute `npm run start`
- the output file will be added to the root of the project


### IMPORTANT

the program uses Redis for caching the External API response
in order to run the program redis should be installed on the machine and running on default port i.e 6379