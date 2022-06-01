import { swap_from, swap_to } from '$lib/js/stores/swap-stores'
import { window_history_set_swap_contract } from '$lib/js/page-utils.js'

export function set_from_token_callback(token){
    swap_from.set(token)
    window_history_set_swap_contract(token.contract_name)
}

export function set_to_token_callback(token){
    swap_to.set(token)
    window_history_set_swap_contract(token.contract_name)
}
