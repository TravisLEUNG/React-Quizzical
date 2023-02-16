import { useEffect, useMemo, useReducer, useState } from "react";
import Button from "./Button";
// Required props
interface RequiredProps {
	question: string;
	options: string[];
	correctAnswer: string;
	showAnswer: boolean;
	answerResult: (isCorrect: boolean) => void;
}

export default function MultipleChoice({
	question,
	options,
	correctAnswer,
	showAnswer,
	answerResult,
}: RequiredProps) {
	const [selectedAns, setSelectedAns] = useState("");

	useEffect(() => {
		if (showAnswer) answerResult(selectedAns === correctAnswer);
	}, [showAnswer]);

	const handleSelectAnswer = (value: string) => {
		setSelectedAns(value);
	};

	const buttonStyles = (option: string) => {
		if (showAnswer) {
			return {
				defaultStyle:
					correctAnswer === option
						? "bg-gray-800"
						: "bg-transparent opacity-25",
				selectedStyle:
					correctAnswer === option
						? "bg-green-500"
						: "bg-red-500 opacity-50",
			};
		}
		return {};
	};

	return (
		<div className='my-6'>
			<label className='block w-full text-left text-2xl font-bold text-gray-800'>
				{question}
			</label>
			<div
				className='mt-2 flex w-full justify-start gap-4 border-b border-gray-400 py-4'
				role='group'
			>
				{options.map((option, index) => (
					<Button
						key={`${question}_${index}`}
						label={option}
						value={option}
						handleClick={handleSelectAnswer}
						selected={selectedAns === option}
						disabled={showAnswer}
						{...buttonStyles(option)}
					/>
				))}
			</div>
		</div>
	);
}
