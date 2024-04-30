import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Reservation from './reservation';

describe('Reservation Component', () => {
    it('should render the modal correctly', () => {
        const { getByText, getByRole, queryByRole } = render(<Reservation show={true} handleClose={() => {}} handleShow={() => {}} />);
        expect(getByText('Make Reservation')).toBeInTheDocument();
        expect(queryByRole('button', { name: 'Make Reservation' })).toBeInTheDocument();
        expect(queryByRole('button', { name: 'Close' })).toBeInTheDocument();
      });

  it('should validate the form correctly', async () => {
    const { getByLabelText, getByText, getByRole } = render(<Reservation show={true} handleClose={() => {}} handleShow={() => {}} />);
  
    fireEvent.change(getByLabelText('Name'), { target: { value: '' } });
    fireEvent.change(getByLabelText('Email Address'), { target: { value: 'invalid-email' } });
    fireEvent.change(getByLabelText('Phone Number'), { target: { value: 'invalid-phone' } });
    fireEvent.change(getByLabelText('Number of People'), { target: { value: '0' } });
    fireEvent.change(getByLabelText('Select Date'), { target: { value: '' } });
    fireEvent.change(getByLabelText('Select Time'), { target: { value: '' } });
  
    fireEvent.click(getByRole('button', { name: /Make Reservation/ }));
  
    await waitFor(() => {
      expect(getByText('Your name is required')).toBeInTheDocument();
      expect(getByText('Invalid email address')).toBeInTheDocument();
      expect(getByText('Invalid phone number')).toBeInTheDocument();
      expect(getByText('Number of people must be at least 1')).toBeInTheDocument();
      expect(getByText('Date is required')).toBeInTheDocument();
      expect(getByText('Time is required')).toBeInTheDocument();
    });
  });

  it('should call the handleClose function when the form is submitted successfully', async () => {
    const handleCloseMock = jest.fn();
    const { getByLabelText, getByRole } = render(<Reservation show={true} handleClose={handleCloseMock} handleShow={() => {}} />);

    fireEvent.change(getByLabelText('Name'), { target: { value: 'John Doe' } });
    fireEvent.change(getByLabelText('Email Address'), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(getByLabelText('Phone Number'), { target: { value: '+1 (555) 555-5555' } });
    fireEvent.change(getByLabelText('Number of People'), { target: { value: '3' } });
    fireEvent.change(getByLabelText('Select Date'), { target: { value: '2023-05-01' } });
    fireEvent.change(getByLabelText('Select Time'), { target: { value: '12:00' } });

    fireEvent.click(getByRole('button', { name: /Make Reservation/ }));

    await waitFor(() => {
      expect(handleCloseMock).toHaveBeenCalledTimes(1);
    });
  });
});