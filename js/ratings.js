function collect_ratings() {
	let ratings = {
		count: 0,
		sum: 0,
		average: 0,
	};
	let rating = 0;
	const elements = document.querySelectorAll(".rating");
	elements.forEach((element) => {
		rating = element.id.replace("star", "");
		parseInt(rating);
		let elementVal = parseInt(element.value);
		ratings.count += elementVal;

		ratings.sum += elementVal * rating;
	});
	if (ratings.count !== 0) {
		ratings.average = sum / count;
	}
	return ratings;
}
document.addEventListener("change", () => {
	const ratings = collect_ratings();
	document.querySelector("#average").value = ratings.average.toFixed(2);
});

collect_ratings();
