import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {
    it('renders the header with the title', () => {
        const { getByText } = render(<Header />);

        const title = getByText('Theressa Malone');
        expect(title).toBeInTheDocument();
    });

    it('renders a link with an "href" attribute pointing to the root', () => {
        const { getByRole } = render(<Header />);

        const link = getByRole('link', { name: 'Theressa Malone' });

        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', '/');
    });
});
