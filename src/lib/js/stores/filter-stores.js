import { writable } from 'svelte-local-storage-store'
import { get } from 'svelte/store'

export const get_filter = (filter_name, starting = false) => writable(filter_name, starting)
export const get_filters = (filter_list) => filter_list.map(filter_name => get_filter(filter_name))
export const get_filter_value = (filter_name) => get(get_filter(filter_name))
