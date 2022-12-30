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
			<button
				className='rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-300'
				onClick={handleStarting}
			>
				Start
			</button>
		</section>
	);
}
