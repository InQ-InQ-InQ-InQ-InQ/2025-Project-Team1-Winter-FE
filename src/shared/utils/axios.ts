import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:8080",
});

interface AxiosParams {
  endpoint: string;
  params?: string;
}

export async function get({ endpoint, params = "" }: AxiosParams) {
  try {
    const response = await instance.get(endpoint, { params: { params } });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function post<T>({ endpoint, data }: AxiosParams & { data?: T }) {
  try {
    const response = await instance.post<T>(endpoint, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
