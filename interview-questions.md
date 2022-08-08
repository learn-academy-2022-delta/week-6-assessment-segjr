# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: The developer would need to create a migration in the terminal of the rails app and migrate it, in order for the change to take effect in the app. The foreign key would need to be named after the parent tabel and be on the Student model, since it belongs to the Cohort model. 

Researched answer: In terminal the update would look like:
$ rails g migration AddCohortIdToStudents cohort_id:integer
$ rails db:migrate

2. Which RESTful routes must always be passed params? Why?

Your answer: Show, edit, update, and destroy must always be passed params. These routes are performing an action on a specific model and thus need the model id to be passed. 

Researched answer: The parameters must be passed in order for the routes to be able to identify the model that it will be taking action on. Without said model, the route would be unable to exectute because it wouldnt have a specific model to apply an action to. 

3. Name three rails generator commands. What is created by each?

Your answer: Model creates a class which represents a row in a data table. Migration creates a modification of the database table. Resource creates a controller within the app that declares common routes automatically. 

Researched answer: A migrate command would need to be ran in order for any of the generator commands to be applied to the app database. 

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
index, show all entries of the Student model

action: "POST" location: /students
create, add content to the Student table

action: "GET" location: /students/new
new, gives user a form to be filled out

action: "GET" location: /students/2
find, show entry 2 of the Student table

action: "GET" location: /students/2/edit
edit, gives user a form for updating entry 2 of the Student table

action: "PATCH" location: /students/2
update, updates entry 2 of the Student table

action: "DELETE" location: /students/2
destroy, delete entry 2 of the Student table

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).
As a user, I can see all the to do list entry title on a home page.
As a user, I click on a to do list title and be routed to a page that displays the title and description of the specific to do list entry. 
As a user, I can see a form where I can create a to do list entry.
As a user, I can click a button to navigate from the home page to a page where I can create a to do list entry. 
As a user, I can click a button to navigate from the to do list entry form page, to the home page. 
As a user, I can click a button to submit my to do list entry to the database.
As a user, I can be redirected to the home page, after submitting a to list entry.
As a user, I can click a button to update a to do list entry, on the entry page.
As a user, I can click a button to delete a to do list entry, on the entry page.
As a user, I can be redirected to the home apge, after deleting a to do list entry
