import { useEffect, useState } from "react";
import MultipleChoice from "../components/MultipleChoice";
import TrueFalse from "../components/TrueFalse";

import { questionService, Question, getQuestionAPIParams } from "../apis/index";
import { shuffleArray } from "../tools/arrayHelper";

export type Settings = {
	category?: string;
	difficulty?: string;
	type?: string;
};

// Required props
interface RequiredProps {
	settings: Settings;
}

export const defaultSetting = {};

export default function QuizPage({ settings }: RequiredProps) {
	const [questions, setQuestions] = useState<Array<Question>>([]);
	const [showAnswer, setShowAnswer] = useState<boolean>(false);

	useEffect(() => {
		const getQuestions = async () => {
			const questions = await questionService.getQuestions(
				settings as getQuestionAPIParams
			);
			setQuestions(questions as Array<Question>);
		};

		getQuestions();
	}, []);

	const multiple: any = [],
		trueFalse: any = [];
	questions.forEach((question, index) => {
		if (question?.type === "boolean") {
			trueFalse.push(
				<TrueFalse
					key={index}
					question={question.question}
					correctAnswer={question.correct_answer}
					showAnswer={showAnswer}
				/>
			);
		}
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
					correctAnswer={question.correct_answer}
					showAnswer={showAnswer}
				/>
			);
		}
	});
	return (
		<section className='mx-5 my-10 w-9/12 content-center text-center'>
			<form>
				{trueFalse}
				{multiple}

				{!showAnswer && (
					<button
						className='rounded-md bg-blue-500 px-6 py-2 text-white hover:bg-blue-400'
						onClick={(e) => {
							e.preventDefault();
							setShowAnswer(true);
						}}
					>
						Check answers
					</button>
				)}
				{showAnswer && (
					<div className='flex justify-evenly'>
						<label className='flex items-center'>
							You scored {0}/5 correct answers
						</label>
						<button className='rounded-md bg-blue-500 px-6 py-2 text-white hover:bg-blue-400'>
							Play again
						</button>
					</div>
				)}
			</form>
		</section>
	);
}
