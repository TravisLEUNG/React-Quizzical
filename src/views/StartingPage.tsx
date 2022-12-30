import Selection from "../components/Selection";

// Required props
interface RequiredProps {
	handleStarting: () => void;
}

export default function StartingPage({ handleStarting }: RequiredProps) {
	return (
		<section className='mx-5 my-10 content-center text-center text-gray-800 dark:text-gray-50'>
			<header className='my-4 text-4xl font-bold'>Quizzical</header>
			<p className='my-4 text-gray-600 dark:text-gray-300'>
				Welcome to the Quizzical! If you are confident, try it.
			</p>
			<div className='mt-4 mb-8'>
				<Selection
					label='Category'
					options={[
						{ label: "Any Category", value: "any" },
						{ label: "General Knowledge", value: "9" },
						{ label: "Entertainment: Books", value: "10" },
						{ label: "Entertainment: Film", value: "11" },
						{ label: "Entertainment: Music", value: "12" },
						{
							label: "Entertainment: Musicals & Theatres",
							value: "13",
						},
						{ label: "Entertainment: Television", value: "14" },
						{ label: "Entertainment: Video Games", value: "15" },
						{ label: "Entertainment: Board Games", value: "16" },
						{ label: "Science & Nature", value: "17" },
						{ label: "Science: Computers", value: "18" },
						{ label: "Science: Mathematics", value: "19" },
						{ label: "Mythology", value: "20" },
						{ label: "Sports", value: "21" },
						{ label: "Geography", value: "22" },
						{ label: "History", value: "23" },
						{ label: "Politics", value: "24" },
						{ label: "Art", value: "25" },
						{ label: "Celebrities", value: "26" },
						{ label: "Animals", value: "27" },
						{ label: "Vehicles", value: "28" },
						{ label: "Entertainment: Comics", value: "29" },
						{ label: "Science: Gadgets", value: "30" },
						{
							label: "Entertainment: Japanese Anime & Manga",
							value: "31",
						},
						{
							label: "Entertainment: Cartoon & Animations",
							value: "32",
						},
					]}
					onSelected={() => {
						console.log("Hi");
					}}
				/>
			</div>
			<div className='mt-4 mb-8 flex justify-between gap-8'>
				<Selection
					label='Difficulty'
					options={[
						{ label: "Any Difficulty", value: "any" },
						{ label: "Easy", value: "easy" },
						{ label: "Medium", value: "medium" },
						{ label: "Hard", value: "hard" },
					]}
					onSelected={() => {
						console.log("Hi");
					}}
				/>
				<Selection
					label='Type'
					options={[
						{ label: "Any Type", value: "any" },
						{ label: "Multiple Choice", value: "multiple" },
						{ label: "True / False", value: "boolean" },
					]}
					onSelected={() => {
						console.log("Hi");
					}}
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
