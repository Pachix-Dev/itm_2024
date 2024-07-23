import { create } from "zustand";
import { persist } from "zustand/middleware";

const useOktoberfest = create( 
    persist(
        (set) => ({  
            items: [],
            name: '',
            email: '',
            phone: '',
            company: '',
            total: 0,
            completed: false,

            setName: (name) => set({ name }),
            setEmail: (email) => set({ email }),
            setPhone: (phone) => set({ phone }),
            setCompany: (company) => set({ company }),
            setCompleted: (completed) => set({ completed }),

            addToCart: (product, quantity = 1) => {
              console.log('hola');
              set((state) => {
                const existingItem = state.items.find((item) => item.id === product.id);
                if (existingItem) {            
                  return state;
                } else {
                  const newItem = {
                    ...product,
                    quantity: Math.min(quantity, 10),
                  };
        
                  const newItems = [...state.items, newItem];
                  return {
                    items: newItems,
                    total: state.total + (newItem.price * newItem.quantity),
                  };
                }
              });
            },
            
            updateQuantity: (productId, newQuantity) => {
              if (newQuantity < 1 || newQuantity > 10) {
                return;
              }
              set((state) => {
                const updatedItems = state.items.map((item) =>
                  item.id === productId ? { ...item, quantity: newQuantity } : item
                );
            
                const totalQuantity = updatedItems.reduce((acc, item) => acc + item.quantity, 0);
            
                // Check if total quantity exceeds 10
                if (totalQuantity > 10) {
                  return state; // Prevent update if total quantity exceeds 10
                }
            
                const newTotal = updatedItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
            
                return {
                  items: updatedItems,
                  total: newTotal,
                };
              });
            },

            removeToCart: (productId) => {
              set((state) => {
                const updatedItems = state.items.filter((item) => item.id !== productId);
                const newTotal = updatedItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
                return {
                  items: updatedItems,
                  total: newTotal,
                };
              });
            },

            clearCart: () => {
              set({
                items: [], 
                total: 0, 
                completed: false, 
                name: '', 
                email: '', 
                phone: '', 
                company: '' 
              });
            },

        }),         
        { name: "oktoberfest-cart" }
    )
)

export {useOktoberfest};