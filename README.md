# Restful-Api-of-University-Students

In order to run this project follow the following steps:

1: Clone the Repo and Extract into your system where you want to run it. 
2: Project pre-requistics:
      Run npm install to have all the dependencies required, or you can run the following commands in cmd are as follows:
      #npm install express
      #npm install mongodb
      #npm install mongoose
      #npm install nodemon --save-dev
3: Open terminal (cmd) and run : nodemon run start.
4: Open Postman to Send GET and POST Requests results.


API endpoints address are :

HTTP GET =>  "http://localhost:3000/una/students" to get a list of all available students of a university. 

HTTP GET =>  "http://localhost:3000/una/students/:id" to get a specific student of a university. 

HTTP POST =>  "http://localhost:3000/una/students" to post new student to a university. 

HTTP PATCH =>  "http://localhost:3000/una/students/:id" to update a specific student of a university. 

HTTP DELETE =>  "http://localhost:3000/una/students" to delete a specific student of a university.
