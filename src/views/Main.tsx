import React, { useState } from "react";
import StartingPage from "./StartingPage";
import QuizPage from "./QuizPage";

export default function Main(): React.ReactElement {
	const [isStarted, setIsStarted] = useState<boolean>(false);
	return (
		<section className='flex h-screen w-screen items-center justify-center bg-appBackground bg-cover dark:bg-appBackgroundDark'>
			{!isStarted && (
				<StartingPage handleStarting={() => setIsStarted(true)} />
			)}
			{isStarted && <QuizPage />}
		</section>
	);
}
