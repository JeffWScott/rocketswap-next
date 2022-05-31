import { writable } from "svelte/store";

export const menu_open = writable()
export const modal_open_store = writable(false)
export const modal_data_store = writable({})