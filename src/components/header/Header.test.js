import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

// Check that Header component renders title correctly
describe('Header component', () => {
    it('renders the header with the title', () => {
        const { getByText } = render(<Header />);

        const title = getByText('Theressa Malone'); // Use getByText to find an element containing the text "Theressa Malone", assign to title viariable
        expect(title).toBeInTheDocument(); // Expect title to be present in rendered output
    });

    // Verify that Header component includes a link with whose "href" attribute points to the root
    it('renders a link with an "href" attribute pointing to the root', () => {
        const { getByRole } = render(<Header />);

        const link = getByRole('link', { name: 'Theressa Malone' }); // Use getByRole to find an element with role "link" and name "Theressa Malone"

        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', '/'); // Checks that link has an "href" attribute equal to "/."
    });
});
