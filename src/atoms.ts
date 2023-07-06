import { atom } from 'recoil';

export const totalAmount = atom<number>({
  key: 'totalAmount',
  default: 0,
});

export const dueDate = atom<Date>({
  key: 'dueDate',
  default: new Date(),
});

export const calculatedAmount = atom<number>({
  key: 'calculatedAmount',
  default: 0,
});
