import {types} from "./types";

export function addUserAction () {
    return async function () {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify()
        }
        const response = await fetch('https://jsonplaceholder.typicode.com/users', options)
    }
}