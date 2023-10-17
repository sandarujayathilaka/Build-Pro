import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import OrderInfo from '../src/screens/OrderRequest'; // Replace with the correct import path

describe('OrderInfo Component', () => {
  it('should render correctly and handle input', async () => {
    const { getByText, getByPlaceholderText, getByDisplayValue, getByTestId } = render(
      <OrderInfo
        Id="IT001"
        category="Cement"
        itemId="IT001"
        itemName="UltraTech"
        supplierLocation="Jaffna"
        supplierMobile="0771234567"
        supplierName="John"
        supplierNo="S01"
        delivery="Within 2 days"
      />
    );

    // Check if the component renders the expected elements
    expect(getByText('Order Info')).toBeTruthy();

    // Simulate user input for site name, site mobile number, and quantity
    const siteNameInput = getByPlaceholderText('Enter your site name');
    const numberInput = getByPlaceholderText('Enter your site mobile phone');
    const quantityInput = getByPlaceholderText('0');
    const addressInput = getByPlaceholderText('Enter your address');

    act(() => {
      fireEvent.changeText(siteNameInput, 'My Site');
      fireEvent.changeText(numberInput, '1234567890');
      fireEvent.changeText(quantityInput, '5');
      fireEvent.changeText(addressInput, '123 Main St.');
    });

    // Check if the input fields reflect the user input
    expect(getByDisplayValue('My Site')).toBeTruthy();
    expect(getByDisplayValue('1234567890')).toBeTruthy();
    expect(getByDisplayValue('5')).toBeTruthy();
    expect(getByDisplayValue('123 Main St.')).toBeTruthy();

    // Simulate user interaction with the date picker
    const dateInput = getByDisplayValue('Tue Jan 01 2013');
    const datePicker = getByTestId('date-picker');
    
    act(() => {
      fireEvent.press(dateInput);
    });

    // Check if the date picker is displayed
    expect(datePicker).toBeTruthy();

    // You can add more test cases as needed, including testing the `handleSave` function.

  });
});
