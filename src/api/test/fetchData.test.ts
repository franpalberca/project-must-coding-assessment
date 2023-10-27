import {describe, expect, it} from 'vitest';
import fetchData from '../fetchData';

describe('fetchData', () => {
	it('should get data from the API when it receives GraphQl object', async () => {
		const query = `query {
        user(login: "testuser") {
            login
        }
    }`;
		// Mock fetch function to simulate the answer from the API
		globalThis.fetch = async () => {
			// Simulate a response with fictitious data
			const data = {user: {login: 'testuser'}};
			const response = new Response(JSON.stringify(data), {
				status: 200,
				headers: {
					'Content-type': 'application/json',
				},
			});

			 // Simulate the json method of Response
			response.json = async () => data;

			return response;
		};

		 // Call the fetchData function with the query
		const result = await fetchData(query);

		// Verify that the fetchData function returns the expected data
		expect(result).toEqual({user: {login: 'testuser'}});
	});
});
