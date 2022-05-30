import { writable } from 'svelte/store'

export const get_sorter = (starting_value) => writable(starting_value || {})