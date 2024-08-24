# Learn React - Calling Backend Services

For these implementations, we'll use class components instead modern functional components

<br/>

## 01 - Installing necessary libraries

```
npm i bootstrap@4.1.1 axios@0.18 react-toastify@4.1
```

<br/>

## 02 - Benefits of using http services as a separate module

- If we want replace existing http service with a new http service in the future, we will be able to do it easily by modifying just a one file without affecting to the multiple files.

> In MERN Stack, module is just a reusable file

<br/>

## 03 - The reason of using Config module

- This module often used to store reusable constants, such as environment variables, API keys, database connection strings
- This allows for centralized management of these values, making the application easier to maintain and configure across different environments (e.g., development, testing, production)
