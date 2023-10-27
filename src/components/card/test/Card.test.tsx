import {render, screen} from '@testing-library/react';
import {beforeEach, describe, expect, it} from 'vitest';
import Card from '../Card';

describe('Card Component', () => {
	beforeEach(() => {
		render(<Card name="Example Card" url="https://example.com" />);
	});

	it('Renders the Card component', () => {
		const cardElement = screen.getByTestId('card');
		expect(cardElement).toBeDefined();
	});
});
