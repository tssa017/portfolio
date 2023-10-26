import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
    it('renders the button with provided children', () => {
        const onClick = jest.fn();
        const className = 'custom-button';
        const buttonText = 'Click Me';

        const { getByText } = render(
            <Button className={className} onClick={onClick}>
                {buttonText}
            </Button>
        );

        const button = getByText(buttonText);
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass(className);
    });

    it('calls the onClick function when the button is clicked', () => {
        const onClick = jest.fn();
        const className = 'custom-button';
        const buttonText = 'Click Me';

        const { getByText } = render(
            <Button className={className} onClick={onClick}>
                {buttonText}
            </Button>
        );

        fireEvent.click(getByText(buttonText));

        expect(onClick).toHaveBeenCalled();
    });
});
