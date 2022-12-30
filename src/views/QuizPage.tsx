import { useEffect, useState } from "react";
import MultipleChoice from "../components/MultipleChoice";
import TrueFalse from "../components/TrueFalse";

import { questionService, Question } from "../apis/index";
import { shuffleArray } from "../tools/arrayHelper";

// Required props
interface RequiredProps {}

export default function QuizPage(_: RequiredProps) {
	const [questions, setQuestions] = useState<Array<Question>>([]);

	useEffect(() => {
		const getQuestions = async () => {
			const questions = await questionService.getQuestions();
			setQuestions(questions as Array<Question>);
		};

		getQuestions();
	}, []);

	const multiple: any = [],
		trueFalse: any = [];
	questions.forEach((question, index) => {
		if (question?.type === "multiple") {
			const randomOptions = shuffleArray({
				arr: [...question.incorrect_answers, question.correct_answer],
				randTime: 10,
			});
			multiple.push(
				<MultipleChoice
					key={index}
					question={question.question}
					options={randomOptions}
				/>
			);
		}
		if (question?.type === "boolean") {
			trueFalse.push(
				<TrueFalse key={index} question={question.question} />
			);
		}
	});
	return (
		<section className='mx-5 my-10 w-9/12 content-center text-center'>
			<form>
				{multiple}
				{trueFalse}
			</form>
		</section>
	);
}
