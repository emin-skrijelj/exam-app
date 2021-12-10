import axios from "axios";

export const Api = axios.create({
    baseURL: "https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest"
})

export default Api