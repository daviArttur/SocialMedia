import { BackendDefaultData, Http, HttpResponse } from "@/domain/interfaces";
import axios, { AxiosError } from "axios";

export const axiosConfig = axios.create({
	baseURL: process.env.REACT_APP_BACKEND,
	headers: {
		"Content-Type": "application/json",
	}
});

export class AxiosAdapter implements Http {

	constructor(private URL: string) {}

	async get<T>(): Promise<HttpResponse<T>> {
		try {
			const response = await axiosConfig.get(this.URL);
			const data: T = response.data;
			return {
				data,
				status: response.status,
			};
		} catch (err) {
			const Error = err as AxiosError<BackendDefaultData>;
			return {
				error: Error.response?.data.message,
				status: Error.response?.status
			};
		}
	}

	async post<T, Q>(body: Q): Promise<HttpResponse<T>> {
		try {
			const response = await axiosConfig.post(this.URL, body);
			const data: T = response.data;
			return {
				data,
				status: response.status,
			};
		} catch (err) {
			const Error = err as AxiosError<BackendDefaultData>;
			return {
				error: Error.response!.data.message,
				status: Error.response?.status
			};
		}
	}

	async patch<T, Q>(body: Q): Promise<HttpResponse<T>> {
		try {
			const response = await axiosConfig.patch(this.URL, body);
			const data: T = response.data;
			return {
				data,
				status: response.status,
			};
		} catch (err) {
			const Error = err as AxiosError<BackendDefaultData>;
			return {
				error: Error.response?.data.message,
				status: Error.response?.status
			};
		}
	}

	async put<T, Q>(body: Q): Promise<HttpResponse<T>> {
		try {
			const response = await axiosConfig.put(this.URL, body);
			const data: T = response.data;
			return {
				data,
				status: response.status,
			};
		} catch (err) {
			const Error = err as AxiosError<BackendDefaultData>;
			return {
				error: Error.response?.data.message,
				status: Error.response?.status
			};
		}
	}

	async delete<T>(): Promise<HttpResponse<T>> {
		try {
			const response = await axiosConfig.delete(this.URL);
			const data: T = response.data;
			return {
				data,
				status: response.status,
			};
		} catch (err) {
			const Error = err as AxiosError<BackendDefaultData>;
			return {
				error: Error.response?.data.message,
				status: Error.response?.status
			};
		}
	}

	set setToken(token: string) {
		axiosConfig.defaults.headers.Authorization = `Bearer ${token}`;
	}
}