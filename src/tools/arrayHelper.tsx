export function shuffleArray<T>({
	arr,
	randTime = 100,
}: {
	arr: Array<T>;
	randTime?: number;
}): Array<T> {
	const max = arr.length;
	for (let i = 0; i < randTime; i++) {
		const first = Math.floor(Math.random() * max);
		const second = Math.floor(Math.random() * max);
		const temp = arr[first];
		arr[first] = arr[second];
		arr[second] = temp;
	}
	return arr;
}
