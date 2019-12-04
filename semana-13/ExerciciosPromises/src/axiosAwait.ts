// Importando o axios em si e o tipo da resposta.
import axios, { AxiosResponse } from "axios";

const URL:string = "https://minha-api-legal/recurso-maneiro";

// Criando essa função só porque para usar o await é obrigatório
// que esteja dentro de uma função async
const doRequest = async ():Promise<void> => {
  try{
    const resp:AxiosResponse = await axios.get(URL);
    console.log(resp.data);
  } catch(error) {
    console.error(error);
  }
};
