import { writable } from 'svelte-local-storage-store'

export const get_sorter = (sorter_name) => writable(sorter_name, {})