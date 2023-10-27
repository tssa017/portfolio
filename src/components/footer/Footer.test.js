import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer component', () => {
    it('renders the English footer when isEnglishClicked is true', () => {
        const { getByText } = render(<Footer />);
        const englishText =
            '© Theressa Malone, 2023 | Built in React. Deployed with Netlify';
        expect(getByText(englishText)).toBeInTheDocument(); // Check that text is included in component
    });

    /* Test expects that when isEnglishClicked is set to false, the Footer component renders the French version of the footer.
    A mock of the language context is created using jest.requireActual, overriding the isEnglishClicked value.
    Test uses getByText to check\ if French text is present.
    */
    it('renders the French footer when isEnglishClicked is false', () => {
        jest.requireActual('../language/LanguageContext').Consumer = ({
            children,
        }) => children({ isEnglishClicked: false });

        const { getByText } = render(<Footer />);
        const frenchText =
            '© Theressa Malone, 2023 | Construit en React. Déployé avec Netlify';
        expect(getByText(frenchText)).toBeInTheDocument();
    });
});
