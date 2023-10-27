import React from 'react';
import { render, fireEvent } from '@testing-library/react'; // Render the Card component with props and children
import Card from './Card';

describe('Card component', () => {
    it('renders the card component with provided props', () => {
        const onClick = jest.fn();
        const src = 'image-url';
        const children = [
            'Card Title',
            'Card Description',
            <div key="icon">Icon</div>,
        ];

        const { getByText, getByAltText } = render(
            <Card onClick={onClick} src={src}>
                {children}
            </Card>
        );

        expect(getByAltText('Project snapshot')).toBeInTheDocument(); // Check that alt text exists on card component
        expect(getByText('Card Title')).toBeInTheDocument(); // Check that card title exists on card component
        expect(getByText('Card Description')).toBeInTheDocument(); // Check that description exists on card component
    });

    it('calls the onClick function when the card is clicked', () => {
        const onClick = jest.fn();
        const src = 'image-url';
        const children = ['Card Title', 'Card Description'];

        const { container } = render(
            <Card onClick={onClick} src={src}>
                {children}
            </Card>
        );

        // Simulates a click event on an element with the class "card" within the rendered component
        fireEvent.click(container.querySelector('.card')); // 'onClick' expectqtion used to check the mock function has been called on the card component

        expect(onClick).toHaveBeenCalled();
    });
});
