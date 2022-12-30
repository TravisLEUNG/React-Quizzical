import ApiClient, { ApiClientInterface } from "../configs/apiClient";

export type Question = {
	category: string;
	type: "multiple" | "boolean";
	difficulty: "easy" | "medium" | "hard";
	question: string;
	correct_answer: string;
	incorrect_answers: Array<string>;
};

interface GetQuestionsResponse {
	response_code: number;
	results: Array<Question>;
}

interface GetAPIParams {
	amount?: number;
	category?: string;
	difficulty?: "easy" | "medium" | "hard";
	type?: "multiple" | "boolean";
}

export interface QuestionApiClientInterface {
	getQuestions({
		amount,
		difficulty,
		type,
		category,
	}: GetAPIParams): Promise<Array<Question> | undefined>;
}

export class QuestionApiClient implements QuestionApiClientInterface {
	apiBase: string;
	questionApiClient: ApiClientInterface;

	constructor(questionApiClient: ApiClientInterface) {
		this.apiBase = "https://opentdb.com/api.php";
		this.questionApiClient = questionApiClient;
	}

	async getQuestions({
		amount = 5,
		difficulty = "easy",
		type = "multiple",
		category = undefined,
	}: GetAPIParams): Promise<Array<Question> | undefined> {
		try {
			const searchParams = new URLSearchParams();
			searchParams.append("amount", amount.toString());
			searchParams.append("difficulty", difficulty);
			searchParams.append("type", type);
			if (!!category) searchParams.append("category", category);

			const response =
				await this.questionApiClient.get<GetQuestionsResponse>(
					`${this.apiBase}/?${searchParams.toString()}`
				);
			return response.results.length > 0 ? response.results : undefined;
		} catch (exception) {
			console.error(exception);
		}
	}
}

export default class QuestionService {
	questionApiClient: QuestionApiClient;

	constructor(questionApiClient: QuestionApiClient) {
		this.questionApiClient = questionApiClient;
	}

	async getQuestions(): Promise<Array<Question> | undefined> {
		return this.questionApiClient.getQuestions({});
	}
}
