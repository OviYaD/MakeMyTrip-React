import axios from "axios";

export const populate =async() => { 

    const response = await axios.get("https://dog.ceo/api/breeds/list/all");
    console.log(response)
}