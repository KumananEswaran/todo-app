# Todo App: <a target="_blank" href="https://todo-app-zeta-puce.vercel.app">Visit Here</a>
username = user@example.co
<br/>
password = password

![image](https://github.com/user-attachments/assets/623fafe6-c34d-4bf5-a191-c667ef1f019e)

![image](https://github.com/user-attachments/assets/9b506ba6-186b-4813-abb6-9b651ebf50fa)

A React-based Todo List application with authentication, protected routes, and localStorage-powered state management using Context API.

## Technologies Used

[![My Skills](https://skillicons.dev/icons?i=react,bootstrap)](https://skillicons.dev)

## What I'm Most Proud Of:
1. Built a fully functional Todo App with React, allowing users to add, edit, and delete tasks.
2. Implemented authentication with protected routes using React Router and Context API.
3. Used localStorage to persist todos and user authentication state.
4. Implemented modal confirmation before deleting a todo to prevent accidental deletions.
5. Added Toastify notification to give instant feedback when a todo is added successfully.

## Challenges Encountered:
1. Managing authentication state globally – Initially, handling login/logout across components was tricky. Solution: Used Context API to store and update the authentication state.
2. Protecting routes – Needed to ensure that users couldn’t access the todo list without logging in. Solution: Created a RequireAuth component to wrap protected routes.
3. Updating todos correctly – Faced issues when updating a todo in the list without affecting others. Solution: Used the map function to update only the targeted todo in the state.
