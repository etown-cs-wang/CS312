import axios from "axios";


export async function authenticate(mode, email, password) {
    const API_KEY = "AIzaSyCikKxC3Go9BPPUEjLZxwhqwuZP0ZnG82k";
    const endpoint = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

    const response = await axios.post(endpoint, {
        email: email,
        password: password,
        returnSecureToken: true
    });

    console.log(response.data);
    const token = response.data.idToken;
    return token;
}


export async function createUser(email, password) {
    return authenticate("signUp", email, password);
}

export async function loginUser(email, password) {
    return authenticate("signInWithPassword", email, password);
}
