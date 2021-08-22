import { render, screen } from '@testing-library/react';
import ItemView from './ItemView';


describe('ItemView', () => {
    it('Should increment cart items when add to cart button is clicked', () => {
        render(<ItemView />);
        const addToCartButton = screen.getByText(/Add to cart/i);
        const cartBubble = screen.getByTestId('cart-counter')
        expect(cartBubble.innerHTML).toBe("0");
        addToCartButton.click()
        expect(cartBubble.innerHTML).toBe("1");
    });
});
