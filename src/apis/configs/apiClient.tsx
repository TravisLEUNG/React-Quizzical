import Axios, { AxiosInstance } from "axios";
import { handleServiceError } from "./apiStatusHandler";

class ApiConfiguration {
	baseURL?: string;
	accessToken?: string;
}

type RequestConfig = {
	headers: {
		[key: string]: string;
	};
};

export interface ApiClientInterface {
	post<TRequest, TResponse>(
		path: string,
		object: TRequest,
		config?: RequestConfig
	): Promise<TResponse>;
	patch<TRequest, TResponse>(
		path: string,
		object: TRequest
	): Promise<TResponse>;
	put<TRequest, TResponse>(
		path: string,
		object: TRequest
	): Promise<TResponse>;
	get<TResponse>(path: string): Promise<TResponse>;
}

export default class ApiClient implements ApiClientInterface {
	private client: AxiosInstance;

	protected createAxiosClient({
		baseURL = "",
		accessToken,
	}: ApiConfiguration): AxiosInstance {
		return Axios.create({
			baseURL: baseURL,
			responseType: "json" as const,
			headers: {
				"Content-Type": "application/json",
				...(accessToken && {
					Authorization: `Token ${accessToken}`,
				}),
			},
			timeout: 30 * 1000,
		});
	}

	constructor(apiConfiguration: ApiConfiguration) {
		this.client = this.createAxiosClient(apiConfiguration);
	}

	async post<TRequest, TResponse>(
		path: string,
		payload: TRequest,
		config?: RequestConfig
	): Promise<TResponse> {
		try {
			const response = config
				? await this.client.post<TResponse>(path, payload, config)
				: await this.client.post<TResponse>(path, payload);
			return response.data;
		} catch (error) {
			handleServiceError(error);
		}
		return {} as TResponse;
	}

	async patch<TRequest, TResponse>(
		path: string,
		payload: TRequest
	): Promise<TResponse> {
		try {
			const response = await this.client.patch<TResponse>(path, payload);
			return response.data;
		} catch (error) {
			handleServiceError(error);
		}
		return {} as TResponse;
	}

	async put<TRequest, TResponse>(
		path: string,
		payload: TRequest
	): Promise<TResponse> {
		try {
			const response = await this.client.put<TResponse>(path, payload);
			return response.data;
		} catch (error) {
			handleServiceError(error);
		}
		return {} as TResponse;
	}

	async get<TResponse>(path: string): Promise<TResponse> {
		try {
			const response = await this.client.get<TResponse>(path);
			return response.data;
		} catch (error) {
			handleServiceError(error);
		}
		return {} as TResponse;
	}
}
