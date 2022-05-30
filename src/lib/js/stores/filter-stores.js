import { writable } from 'svelte-local-storage-store'

export const get_filter = (filter_name) => writable(filter_name, false)
export const get_filters = (filter_list) => filter_list.map(filter_name => get_filter(filter_name))
