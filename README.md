# Simple Todo App

My Daily Checklist is an easy to use fully functioning app that allows users to add and delete tasks to keep on track with their daily tasks.

## Functionality

This project implemented the use of OOP as well as moving to JS modules which required me to move my project into a Live Server. I updated the projects file structure by adding a new folder called components which contained two new files: Todo.js and FormValidator.js. I also added a new folder called utils which contained the new file constants.js.
I updated my script tag at the end of my HTML to add the appropriate type attribute for working with JS modules.
I then moved all of the data and configuration from initialTodos and validationConfig into constants with export and import.
I created a new ToDo class which revamped the original generateTodo function.
I added unique ID's to the new to-do items by adding the uuid package.
I also created the FormValidator class to make use of better functionality on the app.
The form will also reset all sections due to the use of my resetValidation method.

## Technology

Give a description of the technologies and techniques used. Pictures, GIFs, or screenshots that detail the project features are recommended.

## Deployment

This project is deployed on GitHub Pages:

https://github.com/Lexy072016/se_project_todo-app.git
