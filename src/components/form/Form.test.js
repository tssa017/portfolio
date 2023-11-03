import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Form from './Form';

// Create a mock instance of axios
const axiosMock = new MockAdapter(axios);

describe('Form component', () => {
    beforeAll(() => {
        axiosMock
            .onPost('https://formsubmit.co/d0410c8c32eb7f50454b3a1671439d8b')
            .reply(200, { success: true });
    });

    afterAll(() => {
        axiosMock.restore();
    });

    it('submits the form to the API', async () => {
        const { getByText, getByPlaceholderText } = render(<Form />);
        const nameInput = getByPlaceholderText('Full name');
        const emailInput = getByPlaceholderText('Email');
        const messageInput = getByPlaceholderText('Your message...');
        const submitButton = getByText('Send 🚀');

        // Fill in form fields
        fireEvent.change(nameInput, {
            target: { value: 'Openclassrooms student' },
        });
        fireEvent.change(emailInput, {
            target: { value: 'openclassroomsstudent@example.com' },
        });
        fireEvent.change(messageInput, {
            target: { value: 'This is a test message' },
        });

        // Submit the form
        fireEvent.click(submitButton);

        // Wait for the form submission to complete
        await waitFor(() => {
            expect(
                getByText('Form submitted successfully')
            ).toBeInTheDocument();
        });
    });
});
