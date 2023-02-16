// Required props
interface RequiredProps {
	label: string;
	value: string;
	handleClick: (value: string) => void;
	selected?: boolean;
	disabled?: boolean;
	defaultStyle?: string;
	selectedStyle?: string;
}

export default function Button({
	label,
	value,
	handleClick,
	selected = false,
	disabled = false,
	defaultStyle = "bg-transparent hover:bg-gray-800 hover:text-white",
	selectedStyle = "bg-gray-800",
}: RequiredProps) {
	const defaultButtonStyle =
		"min-w-20 r rounded-lg py-2 px-4 text-sm font-medium border border-gray-800 text-gray-800 dark:border-white dark:text-white disabled:cursor-default";

	const onClick = () => {
		handleClick(value);
	};

	return (
		<button
			type='button'
			className={`${defaultButtonStyle} ${
				selected ? selectedStyle : defaultStyle
			}`}
			onClick={onClick}
			value={value}
			disabled={disabled || selected}
		>
			{label}
		</button>
	);
}
