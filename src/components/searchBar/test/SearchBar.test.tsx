import {beforeEach, describe, expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';
import SearchBar from '../SearchBar';

describe('SearchBar Component', () => {
	let filter = '';
	const setFilter = (newFilter: string) => {
		filter = newFilter;
	};

	beforeEach(() => {
		render(<SearchBar filter={filter} setFilter={setFilter} />);
	});

	test('Renders the SearchBar component', () => {
		const searchBar = screen.getByTestId('search-bar');
		expect(searchBar).toBeDefined();
	});

	test('Renders the SearchBar component', () => {
		const searchInput = screen.getByTestId('search-input');
		expect(searchInput).toBeDefined();
	  });
	})
