import React, { useState } from "react";
import StartingPage from "./StartingPage";
import QuizPage from "./QuizPage";

type Settings = {
	category: string;
	difficulty: string;
	type: string;
};

export default function Main(): React.ReactElement {
	const [isStarted, setIsStarted] = useState<boolean>(false);
	const [settings, setSettings] = useState<Settings>({
		category: "any",
		difficulty: "any",
		type: "any",
	});

	console.log(settings);
	return (
		<section className='flex h-screen w-screen items-center justify-center bg-appBackground bg-cover dark:bg-appBackgroundDark'>
			{!isStarted && (
				<StartingPage
					handleStarting={() => setIsStarted(true)}
					handleSetting={(field, value) => {
						setSettings((prevSetting) => ({
							...prevSetting,
							[field]: value,
						}));
					}}
				/>
			)}
			{isStarted && <QuizPage />}
		</section>
	);
}
