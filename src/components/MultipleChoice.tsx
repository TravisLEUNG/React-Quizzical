// Required props
interface RequiredProps {
	question: string;
	options: string[];
}

export default function MultipleChoice({ question, options }: RequiredProps) {
	const optionButtons = options.map((option) => (
		<button
			key={option}
			type='button'
			className='min-w-20 rounded-lg border border-gray-800 bg-transparent py-2 px-4 text-sm font-medium text-gray-800 hover:bg-gray-800 hover:text-white dark:border-white dark:text-white dark:hover:bg-gray-800 dark:hover:text-white'
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
