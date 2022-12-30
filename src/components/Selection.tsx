// Required props
interface RequiredProps {
	label: string;
	options: Array<{ value: string; label: string }>;
	onSelected: (newValue: string) => void;
}

export default function Selection({
	label,
	options,
	onSelected,
}: RequiredProps) {
	const handleSelection = (event: React.FormEvent<HTMLInputElement>) => {
		onSelected(event.currentTarget.value! ?? options[0].value);
	};

	const optionList = options.map((option) => (
		<option key={option.value} value={option.value}>
			{option.label}
		</option>
	));
	return (
		<div className='flex gap-2'>
			<label className='text-md flex w-auto text-center align-middle font-bold leading-8 text-gray-700'>
				{label}
			</label>
			<select
				onChange={() => handleSelection}
				className='text-l text-l w-full appearance-none rounded-lg border-blue-500 bg-gray-200 px-2 text-center text-sm text-gray-600 outline-none  outline-offset-0 hover:outline-2 hover:outline-blue-500'
			>
				{optionList}
			</select>
		</div>
	);
}
