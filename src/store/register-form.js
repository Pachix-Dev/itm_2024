import { create } from "zustand";
import { persist } from "zustand/middleware";

const useRegisterForm = create( 
    persist(
        (set) => ({     
            step: 0,            
            name: "",
            email: "",
            phone: "",
            typeRegister: "",
            genre: "",
            age: "",
            linkedin: "",
            complete_register: false,
            
            setName: (name) => set({ name }),
            setEmail: (email) => set({ email }),
            setPhone: (phone) => set({ phone }),
            setTypeRegister: (typeRegister) => set({ typeRegister }),
            setGenre: (genre) => set({ genre }),
            setAge: (age) => set({ age }),
            setLinkedin: (linkedin) => set({ linkedin }),

            setCompleteRegister: (complete_register) => set({ complete_register }),

            incrementStep: () => set((state) => ({ 
                step: state.step + 1 
            })),
            decrementStep: () => set((state) => ({ 
                step: state.step - 1 
            })),
        }), 
        { name: "register-form" }
    )
)

export {useRegisterForm};