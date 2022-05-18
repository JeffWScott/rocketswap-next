import { writable } from 'svelte-local-storage-store'

export const show_low_liquidity_filter = writable('show_low_liquidity_filter', false)
export const show_low_volume_filter = writable('show_low_volume_filter', false)
export const show_unverified_filter = writable('show_unverified_filter', false)

export const filter_map = {
    show_low_liquidity_filter,
    show_low_volume_filter,
    show_unverified_filter
}

export const get_filter = (filter_name) => writable(filter_name, false)
export const get_filters = (filter_list) => filter_list.map(filter_name => get_filter(filter_name))
