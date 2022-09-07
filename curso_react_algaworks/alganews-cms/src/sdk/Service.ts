import axios, { AxiosResponse } from "axios";

const Http = axios.create()

class Service {
  protected static Http = Http;
  protected static getData = getdata;
}

function getdata<T>(response: AxiosResponse<T>) {
  return response.data;
}

Http.defaults.baseURL = 'http://localhost:8080';

export default Service;