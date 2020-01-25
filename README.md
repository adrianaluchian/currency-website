# currency-website
React website for currency conversion.

## NPM scripts

`lint`: runs linting rules

`test`: runs all tests found in the 'src' folder

`start`: starts up the development server

`build`: builds the production-ready files in the 'public' folder

## Running the website in a Docker container

`docker build . -website`

`docker run -p -d 8000:80 website`

The website will be accessible at http://localhost:8000

To stop the container:
`docker stop website`
