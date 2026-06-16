# Simple Login Form

A basic login form built using **HTML, CSS, and JavaScript**.

## Features

* User-friendly login interface
* Input validation for empty fields
* Username and password authentication using JavaScript
* Error messages for invalid credentials
* Welcome message displayed after successful login

## Technologies Used

* HTML5
* CSS3
* JavaScript (Vanilla JS)

## How It Works

The application uses predefined credentials and compares them with the values entered by the user.

### Valid Credentials

**Username:** `vidhya.m5`

**Password:** `123@`

When the user clicks the Login button:

1. The application checks whether both fields are filled.
2. If any field is empty, an error message is displayed.
3. The entered username and password are compared using JavaScript `if` statements.
4. If both values match the predefined credentials, a welcome message is shown.
5. Otherwise, an "Invalid Username or Password" message is displayed.

## JavaScript Logic

```javascript
let uName = "vidhya.m5";
let passWord = "123@";

if (Entername === uName && Enterpw === passWord) {
    // Login Successful
} else {
    // Login Failed
}
```

## Learning Outcomes

Through this project, I learned:

* DOM Manipulation
* Event Handling
* Form Validation
* Conditional Statements (`if`, `else`)
* Template Literals
* Accessing Input Values using JavaScript

## Future Improvements

* Show/Hide Password Feature
* Password Strength Validation
* Remember Me Option
* Local Storage Authentication
* Responsive Design
* Multiple User Support

## Author

**Vidhya**

A beginner-friendly JavaScript project created to practice form validation and conditional logic.
