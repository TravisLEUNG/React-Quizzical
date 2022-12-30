import Selection from "../components/Selection";
import { getQuestionAPIParamsData } from "../apis/data/QuestionData";

// Required props
interface RequiredProps {
	handleStarting: () => void;
	handleSetting: (
		field: "category" | "difficulty" | "type",
		value: string
	) => void;
}

export default function StartingPage({
	handleStarting,
	handleSetting,
}: RequiredProps) {
	return (
		<section className='mx-5 my-10 content-center text-center text-gray-800 dark:text-gray-50'>
			<header className='my-4 text-4xl font-bold'>Quizzical</header>
			<p className='text-md my-4 text-gray-600 dark:text-gray-300'>
				Welcome to the Quizzical! If you are confident, try it.
			</p>
			<div className='mt-4 mb-8'>
				<Selection
					label={getQuestionAPIParamsData.category.label}
					options={getQuestionAPIParamsData.category.options}
					onSelected={(value) => handleSetting("category", value)}
				/>
			</div>
			<div className='mt-4 mb-8 flex justify-between gap-4'>
				<Selection
					label={getQuestionAPIParamsData.difficulty.label}
					options={getQuestionAPIParamsData.difficulty.options}
					onSelected={(value) => handleSetting("difficulty", value)}
				/>
				<Selection
					label={getQuestionAPIParamsData.type.label}
					options={getQuestionAPIParamsData.type.options}
					onSelected={(value) => handleSetting("type", value)}
				/>
			</div>
			<button
				className='rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-300'
				onClick={handleStarting}
			>
				Start
			</button>
		</section>
	);
}
