export const preload = arr => {
	arr.forEach(x => {
		const img = new Image();
		img.src = x;
	});
}