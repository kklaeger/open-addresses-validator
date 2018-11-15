# Open Addresses Validator
A simple validator for addresses from openaddresses.io

The Project consists of an ETL workflow that is created with Pentaho Data Integration and a small addresses validator that is written in Node.js and Angular 6.


### Start Server:

1. Navigate to /server and run `npm install`
2. Start and compile server with `npm run prod`


### Start Web Interface:

1. Navigate to /client and run `npm install`
2. Start web interface with `npm run start`


### Workflow

Contains all PDI jobs and transformations that are necessary for the entire ETL workflow. To run this workflow Pentaho Data Integration is necessary.


### Documentation

Contains the documentation of this project in German language.


### DDL

Contains the Data Definition Language for all necessary database tables.