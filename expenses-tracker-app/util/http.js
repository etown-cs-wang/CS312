
import axios from "axios";

const BASE_URL = "https://cs312-f5544-default-rtdb.firebaseio.com/";

export async function storeExpense(expenseData) {

    const url = BASE_URL + "expenses.json";
    console.log(url);
    console.log(expenseData);

    const response = await axios.post(
        url,
        expenseData
    );

    console.log(response.data);
    return response.data.name;
}

export async function fetchExpenses() {
    const url = BASE_URL + "expenses.json";
    const response = await axios.get(url);

    console.log(response.data);

    const expenses = [];
    for (const key in response.data) {
        const expenseObj = {
            id: key,
            ...response.data[key],
            date: new Date(response.data[key].date)
        };
        expenses.push(expenseObj);
    }

    return expenses;
}

export async function updateExpense(id, expenseData) {
    const url = BASE_URL + `expenses/${id}.json`;

    return await axios.put(
        url,
        expenseData
    );
}

export async function deleteExpense(id) {
    const url = BASE_URL + `expenses/${id}.json`;

    return await axios.delete(url);
}
