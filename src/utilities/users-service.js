// Service modules are where we put our
// "business"/application logic
// For example, when we signup or log in,
// we will need to save the oken we received
// from the server - is that the type of code
// good to put in the React component?
// NO!

import * as usersAPI from './users-api';

export async function signUp(userData) {
    // Delegate the request to the users-api which
    // will ultimately return a JSON Web Token (JWT)
    const token = await usersAPI.signUp(userData);
    localStorage.setItem('token', token);
    return getUser();
}

export async function login(credentials) {
    const token = await usersAPI.login(credentials);
    localStorage.setItem('token', token);
    return getUser();
}

export function logOut() {
    localStorage.removeItem('token');
}

// Return the token if valid, otherwise return null
export function getToken() {
    const token = localStorage.getItem('token');
    if (!token) return null;
    // Obtain the payload of the token
    // so that we can check if it's expired
    const payload = JSON.parse(atob(token.split('.')[1]));
    if (payload.exp < Date.now() / 1000) {
        localStorage.removeItem('token');
        return null;
    }
    return token;
}

export function getUser() {
    const token = getToken();
    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}