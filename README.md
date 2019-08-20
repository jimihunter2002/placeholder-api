# Placeholder API Tests

Pre-requisite:

in order to successfully run these tests, the following conditions must be met

1. node version greater than or equal to v11.15.0 must be installed on the machine the test will be run
2. git must also be installed on the machine

After the pre-requisite steps above have been met, follow the steps below in order to successfully run the API tests

run the below commands from the terminal

1. clone the repository with the command ```git clone git@github.com:jimihunter2002/placeholder-api.git```
2. navigate to the root of the project which is api-testing-framework folder
3. run this command to install dependenices: ```npm install```
4. run this command to start the test run ```npm test```

Below are the reasons why the framework was chosen
jest framework was chosen because, its very easy to write test in a simple plain english.
Also, it has very good support and a mature community base which makes it easier to find help incase one is needed
it can be used for other tests such integration tests as well as end to end tests.

Design choice:
the  design choice was made in order to be able to reuse the some of the code.
Also, it is possible to create a generic method for each of the CRUD operations as is the case in the test e.g ```universalCreate```
but in order to have cleaner tests and limit the scope of troubleshooting incase something goes wrong.

the library axios was also chosen because of its simplicity which are

1. no need to serialize input data object into JSON string as we already get this for free
2. reponse from axios does not need to be converted back to JSON  which makes it easier to work with
