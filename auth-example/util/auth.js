import axios from "axios";

export async function createUser(email, password) {
    const API_KEY = "AIzaSyCikKxC3Go9BPPUEjLZxwhqwuZP0ZnG82k";

    const endpoint = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;

    const response = await axios.post(endpoint, {
        email: email,
        password: password,
        returnSecureToken: true
    });
}

