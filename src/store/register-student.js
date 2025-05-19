import { create } from "zustand";
import { persist } from "zustand/middleware";

const useRegisterStudent = create( 
    persist(
        (set) => ({
            step: 0,
            user_id: "",
            name: "",
            lastname: "",
            email: "",
            phone: "",
            company: "",
            limit_students: 0,
            students: [],
            complete_register: false,
            invoiceDownToLoad: "",
                        
            setUser_id: (user_id) => set({ user_id }),
            setName: (name) => set({ name }),
            setLastname: (lastname) => set({ lastname }),
            setEmail: (email) => set({ email }),
            setPhone: (phone) => set({ phone }),
            setCompany: (company) => set({ company }),     
            setLimitStudents: (limit_students) => set({ limit_students }),
            setStudents: (students) => set({ students }),
          
            setCompleteRegister: (complete_register) => set({ complete_register }),
            setInvoiceDownToLoad: (invoiceDownToLoad) => set({ invoiceDownToLoad }),
            
            incrementStep: () => set((state) => ({ 
                step: state.step + 1 
            })),
            decrementStep: () => set((state) => ({ 
                step: state.step - 1 
            })),

            clear: () => set({ 
                step: 0,
                user_id: "",
                name: "",
                lastname: "",
                email: "",
                phone: "",
                company: "",
                students: [],
                limit_students: 0,

            })
        }), 
        { name: "register-student" }
    )
)

export {useRegisterStudent};