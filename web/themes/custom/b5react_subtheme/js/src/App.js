import React from "react";

const [cart, setCart] = useState({});
const fetchCart = () => {
    commerce.cart.retrieve().then((cart) => {
      setCart(cart);
    }).catch((error) => {
      console.log('There was an error fetching the cart', error);
    });
}
useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const handleAddToCart = (productId, quantity) => {
    commerce.cart.add(productId, quantity).then((item) => {
      setCart(item.cart);
    }).catch((error) => {
      console.error('There was an error adding the item to the cart', error);
    });
  }
  const handleRemoveFromCart = (lineItemId) => {
    commerce.cart.remove(lineItemId).then((resp) => {
      setCart(resp.cart);
    }).catch((error) => {
      console.error('There was an error removing the item from the cart', error);
    });
  }

export default function App() {
    return (
      <>
      <ProductsList products={products} onAddToCart={handleAddToCart} />
        <button
            name="Add to cart"
            className="product__btn"
            onClick={handleAddToCart}
            >
            Quick add
        </button>
        </>
    );
}