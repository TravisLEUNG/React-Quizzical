import React, { useState } from "react";
import StartingPage from "./StartingPage";
import QuizPage, { Settings, defaultSetting } from "./QuizPage";

export default function Main(): React.ReactElement {
	const [isStarted, setIsStarted] = useState<boolean>(false);
	const [settings, setSettings] = useState<Settings>(() => defaultSetting);

	return (
		<section className='flex min-h-screen w-screen items-center justify-center bg-appBackground bg-cover dark:bg-appBackgroundDark'>
			{!isStarted && (
				<StartingPage
					handleStarting={() => setIsStarted(true)}
					handleSetting={(field, value) => {
						setSettings((prevSetting) => {
							return {
								...prevSetting,
								[field]: value,
							};
						});
					}}
				/>
			)}
			{isStarted && <QuizPage settings={settings} />}
		</section>
	);
}
