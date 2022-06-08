import { writable, derived, get } from "svelte/store"; 

export const swap_from = writable(false)
export const swap_to = writable(false)

export function swap_token_spots(){
    const from = get(swap_from)
    const to = get(swap_to)

    swap_from.set(to)
    swap_to.set(from)
} 

export const swap_type = derived([swap_from, swap_to], ([$swap_from, $swap_to]) => {
    if ($swap_from.contract_name === "currency") return "buy" 
    if ($swap_to.contract_name === "currency") return "sell" 
})

export const token_to_swap = derived([swap_from, swap_to], ([$swap_from, $swap_to]) => {
    if ($swap_from.contract_name === "currency") return $swap_to 
    if ($swap_to.contract_name === "currency") return $swap_from
})

