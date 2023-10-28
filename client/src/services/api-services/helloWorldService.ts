import { AxiosResponse } from 'axios'
import * as apiService from "@/services/api-services/apiService";

export async function getHelloWorld(): Promise<Message | any> {

  try {
    const url: string = "/hello-world";
    const {data, status}: AxiosResponse = await apiService.api.get(url, {headers: apiService.getHeaders()});

    console.log(data)

    if (status === 200) {
      return data;
    }

  } catch (error) {
    throw error;
  }
}