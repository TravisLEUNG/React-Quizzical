// Required props
interface RequiredProps {
	question: string;
	options: string[];
	correctAnswer: string;
	showAnswer: boolean;
}

export default function MultipleChoice({
	question,
	options,
	correctAnswer,
	showAnswer,
}: RequiredProps) {
	const displayStyles = (answer: string) =>
		answer === correctAnswer
			? "bg-green-500"
			: "blur-sm disabled:opacity-75";
	const optionButtons = options.map((option) => (
		<button
			key={option}
			type='button'
			className={`${
				showAnswer ? displayStyles(option) : ""
			} min-w-20 rounded-lg border border-gray-800 bg-transparent py-2 px-4 text-sm font-medium text-gray-800 hover:bg-gray-800 hover:text-white dark:border-white dark:text-white dark:hover:bg-gray-800 dark:hover:text-white`}
		>
			{option}
		</button>
	));
	return (
		<div className='my-6'>
			<label className='block w-full text-left text-2xl font-bold text-gray-800'>
				{question}
			</label>
			<div
				className='mt-2 flex w-full justify-start gap-4 border-b border-gray-400 py-4'
				role='group'
			>
				{optionButtons}
			</div>
		</div>
	);
}
