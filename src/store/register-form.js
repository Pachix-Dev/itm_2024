import { create } from "zustand";
import { persist } from "zustand/middleware";

const useRegisterForm = create( 
    persist(
        (set) => ({     
            step: 0,            
            name: "",
            paternSurname: "",
            maternSurname: "",
            email: "",
            phone: "",
            typeRegister: "",
            genre: "",
            age: "",
            linkedin: "",

            company: "",
            industry: "",
            position: "",
            country: "",
            city: "",
            address: "",
            colonia: "",
            postalCode: "",
            webPage: "",
            phoneCompany: "",

            eventKnowledge: "",
            productInterest: "",
            levelInfluence: "",
            wannaBeExhibitor: "",

            complete_register: false,
            
            setName: (name) => set({ name }),
            setPaternSurname: (paternSurname) => set({ paternSurname }),
            setMaternSurname: (maternSurname) => set({ maternSurname }),
            setEmail: (email) => set({ email }),
            setPhone: (phone) => set({ phone }),
            setTypeRegister: (typeRegister) => set({ typeRegister }),
            setGenre: (genre) => set({ genre }),
            setAge: (age) => set({ age }),
            setLinkedin: (linkedin) => set({ linkedin }),
            
            setCompany: (company) => set({ company }),
            setIndustry: (industry) => set({ industry }),
            setPosition: (position) => set({ position }),
            setCountry: (country) => set({ country }),
            setCity: (city) => set({ city }),
            setAddress: (address) => set({ address }),
            setColonia: (colonia) => set({ colonia }),
            setPostalCode: (postalCode) => set({ postalCode }),
            setWebPage: (webPage) => set({ webPage }),
            setPhoneCompany: (phoneCompany) => set({ phoneCompany }),

            setEventKnowledge: (eventKnowledge) => set({ eventKnowledge }),
            setProductInterest: (productInterest) => set({ productInterest }),
            setLevelInfluence: (levelInfluence) => set({ levelInfluence }),
            setWannaBeExhibitor: (wannaBeExhibitor) => set({ wannaBeExhibitor }),

            setCompleteRegister: (complete_register) => set({ complete_register }),

            incrementStep: () => set((state) => ({ 
                step: state.step + 1 
            })),
            decrementStep: () => set((state) => ({ 
                step: state.step - 1 
            })),

            clear: () => set({ 
                step: 0,            
                name: "",
                paternSurname: "",
                maternSurname: "",
                email: "",
                phone: "",
                typeRegister: "",
                genre: "",
                age: "",
                linkedin: "",

                company: "",
                industry: "",
                position: "",
                country: "",
                city: "",
                address: "",
                colonia: "",
                postalCode: "",
                webPage: "",
                phoneCompany: "",

                eventKnowledge: "",
                productInterest: "",
                levelInfluence: "",
                wannaBeExhibitor: "",
                
            })
        }), 
        { name: "register-form" }
    )
)

export {useRegisterForm};