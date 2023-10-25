const fetchData = async (query: any) => {
	const token = import.meta.env.VITE_GITHUB_TOKEN;

	const response = await fetch('https://api.github.com/graphql', {
		method: 'POST',
		headers: {
			Authorization: `bearer ${token}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({query}),
	});
	const data = await response.json();
	return data;
};

export default fetchData;
