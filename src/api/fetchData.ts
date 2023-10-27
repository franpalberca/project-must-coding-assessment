/**
 * Asynchronously fetches data from the GitHub GraphQL API using the provided query.
 * @async
 * @param {string} query - The GraphQL query string to fetch data.
 * @returns {Promise<any>} A Promise that resolves with the fetched data.
 */

const fetchData = async (query: any) => {
	// Retrieve the GitHub token from environment variables.
	const token = import.meta.env.VITE_GITHUB_TOKEN;

	 // Send a POST request to the GitHub GraphQL API with the provided query.
	const response = await fetch('https://api.github.com/graphql', {
		method: 'POST',
		headers: {
			Authorization: `bearer ${token}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({query}),
	});
	// Parse the response data as JSON.
	const data = await response.json();
	// Return the fetched data as a Promise.
	return data;
};

export default fetchData;
