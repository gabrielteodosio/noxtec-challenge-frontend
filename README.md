# Challenge Frontend

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.8.

## How to run this project?

Follow the steps below so you can use this application as intended:

1. You will need to have installed in your machine Node.js, I'm using v22.11.0. To download a version visit [Node.js website](https://nodejs.org/en/download);
2. Create a folder called Noxtec;
3. Clone this repository inside this folder and after completing the [backend](https://github.com/gabrielteodosio/noxtec-challenge-backend) tutorial, in its `README.md` file, come back here and continue;
``` bash
git clone git@github.com:gabrielteodosio/noxtec-challenge-frontend.git
```
4. Install all the project dependencies:
```bash
npm install
```
5. Create an `.env` file at the root of the project, which needs to have at least one Variable:
```bash
BASE_API_URL=http://localhost:8080/api
```
6. Open a terminal or a powershell and run the script config to generate a file with the correctly loaded Env Variables:
```bash
npm run config
```
7. Great! Now you just need to run start script, or the `ng serve` in the root of the project (just choose one of the following): 
```bash
npm run ng -- serve
npm run start
ng serve
```