import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:8080",
});

instance.defaults.withCredentials = true;

interface AxiosParams {
  endpoint: string;
  params?: string;
  header?: Record<string, string>;
}

export async function get({ endpoint, params = "" }: AxiosParams) {
  try {
    const response = await instance.get(endpoint, { params: { params } });
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function post<T>({
  endpoint,
  data,
  header,
}: AxiosParams & { data?: T }) {
  try {
    const response = await instance.post<T>(endpoint, data, {
      headers: header,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}
