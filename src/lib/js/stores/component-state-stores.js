import { writable } from 'svelte-local-storage-store'

export const pools_open = writable('pools_open', {})
export const farms_open = writable('farms_open', {})