// export const searchActions = {
//     setSearchTerm: (query: string) => ({
//         type: 'SET_SEARCH_QUERY',
//         payload: query,
//     }),
//     clearSearchQuery: () => ({
//         type: 'CLEAR_SEARCH_QUERY',
//     }),
// };

export const searchActions = (query: string) => ({
	setSearchTerm: (query: string) => ({
		type: 'SET_SEARCH_QUERY',
		payload: query,
	}),
	clearSearchQuery: () => ({
		type: 'CLEAR_SEARCH_QUERY',
	}),
});
