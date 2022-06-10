import create from "zustand";

export const useStore = create((set) => ({
    deal: undefined,
    form: undefined,
    paymentSchedule: undefined,

    setDeal: (deal) => set({ deal }),
    setPaymentSchedule: (schedule) => set({ paymentSchedule: schedule }),
    setForm: (form) => set({ form }),
}));
