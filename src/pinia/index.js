import { createPinia } from 'pinia';
const store = createPinia();

export default store;

export * from './modules/user';
export * from './modules/app';