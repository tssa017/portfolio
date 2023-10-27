import React from 'react';
import { render } from '@testing-library/react';
import Form from './Form';

// Checks that Form component renders with the default English language context.
describe('Form component', () => {
  it('renders the form with the provided context', () => {
    const { getByText, getByPlaceholderText } = render(<Form />); 
    
    // Expectations check that elements with text content such as "Get in touch!" are present in the rendered output. 
    expect(getByText('Get in touch!')).toBeInTheDocument();
    expect(getByPlaceholderText('Full name')).toBeInTheDocument();
    expect(getByPlaceholderText('Email')).toBeInTheDocument();
    expect(getByPlaceholderText('Your message...')).toBeInTheDocument();
    expect(getByText('Send 🚀')).toBeInTheDocument();
  });

  it('renders the form with French text when context value changes', () => {
    jest.requireActual('../language/LanguageContext').Consumer = ({ children }) =>
      children({ isEnglishClicked: false });

    const { getByText, getByPlaceholderText } = render(<Form>());

    expect(getByText('Échangeons !')).toBeInTheDocument();
    expect(getByPlaceholderText('Nom / prénom')).toBeInTheDocument();
    expect(getByPlaceholderText('Email')).toBeInTheDocument();
    expect(getByPlaceholderText('Votre message...')).toBeInTheDocument();
    expect(getByText('Envoyer 🚀')).toBeInTheDocument();
  });
});