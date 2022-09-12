// Se instala AXIOS **** yarn add axios ****
/* Libreria se utiliza para no estar escribiendo http://localhost:3000/api en cada parte del programa  */
import axios from "axios";

const olinalaApi = axios.create({
    baseURL: "http://localhost:4000/api",
});

export default olinalaApi;