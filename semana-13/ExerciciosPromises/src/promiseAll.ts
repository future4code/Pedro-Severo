import axios, { AxiosResponse } from "axios";

const URL1 = "https://www.google.com";
const URL2 = "https://www.bing.com";
const URL3 = "https://www.yahoo.com";

const promise1:Promise<AxiosResponse> = axios.get(URL1);
const promise2:Promise<AxiosResponse> = axios.get(URL2);
const promise3:Promise<AxiosResponse> = axios.get(URL3);

Promise.all([promise1, promise2, promise3]).then((values:AxiosResponse[]) => {
  console.log(values);
});
