import axios, { AxiosResponse } from "axios";

const URL:string = "https://minha-api-legal/recurso-maneiro";

axios.get(URL).then((resp: AxiosResponse) => {
  console.log(resp.data);
}).catch((error) => {
  console.error(error);
});
