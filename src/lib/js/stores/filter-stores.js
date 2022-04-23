import { writable } from 'svelte-local-storage-store'

export const show_low_liquidity_filter = writable('show_low_liquidity_filter', false)
export const show_low_volume_filter = writable('show_low_volume_filter', false)
export const show_unverified_filter = writable('show_unverified_filter', false)