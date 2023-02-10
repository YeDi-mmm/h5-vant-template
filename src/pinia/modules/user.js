import { defineStore } from 'pinia';

export const useCounterStore = defineStore('user', {
  state: () => ({
    count: 1,
  }),
  actions: {
    accumulate() {
      this.count++;
    },
  },
});