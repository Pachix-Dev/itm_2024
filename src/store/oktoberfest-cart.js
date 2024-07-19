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

            setName: (name) => set({ name }),
            setEmail: (email) => set({ email }),
            setPhone: (phone) => set({ phone }),
            setCompany: (company) => set({ company }),
            
            addToCart: (product, quantity = 1) => {
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
            
        }),         
        { name: "oktoberfest-cart" }
    )
)

export {useOktoberfest};