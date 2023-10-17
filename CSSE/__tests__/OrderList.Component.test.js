import { render } from '@testing-library/react-native';
import DisplayContent from '../src/screens/OrderList';

describe("OrderLists", () => {
    it('renders the component and displays loading message', () => {
        const { getByText } = render(
          <DisplayContent itemId="IT001" />
        );
      
        expect(getByText('Loading...')).toBeTruthy();
      });
      
  });
  
  
  
  
  