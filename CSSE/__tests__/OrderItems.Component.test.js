import 'react-native';
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import OrderItems from '../src/screens/OrderItems';
import { router } from 'expo-router';

describe('OrderItems', () => {
  it('should handle card click and log the ID', () => {

    const { getByText } = render(<OrderItems />);
  
    const cardElement = getByText('Cement'); // Replace with your actual card title
    
    fireEvent.press(cardElement);
   
    expect(router.push).toHaveBeenCalledWith('Cement');
  });
});