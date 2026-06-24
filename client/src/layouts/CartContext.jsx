import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("marmara_cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("marmara_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, variant, qty) => {
    setCartItems((prev) => {
      const variantId = variant
        ? variant._id || variant.type || "unknown-variant"
        : "polosan";

      const targetId = `${product._id}-${variantId}`;

      const existingIdx = prev.findIndex((item) => item.id === targetId);

      if (existingIdx > -1) {
        const newCart = [...prev];
        newCart[existingIdx] = {
          ...newCart[existingIdx],
          quantity: newCart[existingIdx].quantity + qty,
        };
        return newCart;
      } else {
        return [
          ...prev,
          {
            id: targetId,
            productId: product._id,
            name: product.name,
            image: product.image,
            basePrice: product.basePrice || 0,
            variant: variant,
            quantity: qty,
          },
        ];
      }
    });
  };

  const updateQuantity = (id, change) => {
    setCartItems(
      (prev) =>
        prev
          .map((item) =>
            item.id === id
              ? { ...item, quantity: item.quantity + change }
              : item,
          )
          .filter((item) => item.quantity > 0), 
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCartItems([]);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = cartItems.reduce((sum, item) => {
    const itemPrice = item.variant ? item.variant.price : item.basePrice;
    return sum + itemPrice * item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalItems,
        totalPrice,
        isCartModalOpen,
        setIsCartModalOpen,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);
