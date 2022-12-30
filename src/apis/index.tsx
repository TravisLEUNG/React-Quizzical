import ApiClient from "./configs/apiClient";
import QuestionService, { QuestionApiClient } from "./services/QuestionService";
export type {
	Question,
	GetAPIParams as getQuestionAPIParams,
} from "./services/QuestionService";

// Set up services
const questionApiClient = new QuestionApiClient(new ApiClient({}));
export const questionService = new QuestionService(questionApiClient);
