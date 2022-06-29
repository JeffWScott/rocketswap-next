import { get } from 'svelte/store'
import { modal_open_store, modal_data_store, modal_callback } from '$lib/js/stores/app-stores'
import { goto } from '$app/navigation'

export function handle_modal_open(args){
    console.log(args)
    const {modal_name, modal_data = {}, callback = false} = args

    modal_open_store.set(modal_name)
    modal_data_store.set(modal_data)
    modal_callback.set(callback)
}

export function handle_modal_close(){
    modal_open_store.set(false)
    // modal_data_store.set({})
    // modal_callback.set(false)
}

export function handle_modal_callback(){
    const callback = get(modal_callback)
    callback()
    modal_open_store.set(false)
}

export function handle_show_verified_token_info(){
    handle_modal_open({modal_name: "VerifiedTokens"})
}

export function handle_show_set_slippage(){
    handle_modal_open({modal_name: "SetSlippage"})
}

export function handle_goto_rswp_buy(){
    goto('/swap/con_rswp_lst001')
}

export function handle_goto_pools_create_liquidity(){
    goto('/pools/create')
}

export function handle_goto_pools_add_liquidity(e){
    const contract_name = e.target.getAttribute("contract_name")
    if (contract_name) goto(`/pools/add/${contract_name}`)
    else goto('/pools/add')
}

export function handle_goto_pools_remove_liquidity(){
    const contract_name = e.target.getAttribute("contract_name")
    if (contract_name) goto(`/pools/remove/${contract_name}`)
    else goto('/pools/remove')
}