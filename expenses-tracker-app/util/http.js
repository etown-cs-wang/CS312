
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
}
