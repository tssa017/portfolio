import React from 'react';
import { render, fireEvent } from '@testing-library/react';
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

        expect(getByAltText('Project snapshot')).toBeInTheDocument();
        expect(getByText('Card Title')).toBeInTheDocument();
        expect(getByText('Card Description')).toBeInTheDocument();
        expect(getByText('Icon')).toBeInTheDocument();
    });

    it('calls the onClick function when the card is clicked', () => {
        const onClick = jest.fn();
        const src = 'image-url';
        const children = [
            'Card Title',
            'Card Description',
            <div key="icon">Icon</div>,
        ];

        const { container } = render(
            <Card onClick={onClick} src={src}>
                {children}
            </Card>
        );

        fireEvent.click(container.querySelector('.card'));

        expect(onClick).toHaveBeenCalled();
    });
});
