/* eslint-disable prettier/prettier */
import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
} from "axios";

export abstract class HTTPBaseService {
  protected instance: AxiosInstance;

  public constructor() {
    const baseURL =
      import.meta.env.VUE_APP_SERVICE_URL || "http://localhost:8080/api/v1";

    this.instance = axios.create({
      baseURL,
    });
  }
}

export default class HttpException extends Error {
  status: number;
  message: string;
  response: { [key: string]: string };
  constructor(
    status: number,
    message: string,
    response: { [key: string]: string }
  ) {
    super(message);
    this.status = status;
    this.message = message;
    this.response = response;
  }
}
