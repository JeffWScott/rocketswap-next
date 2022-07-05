import { goto } from '$app/navigation'
import { handle_modal_open } from '$lib/js/event-handlers'

export function handle_goto_pools_create_liquidity(){
    goto('/pools/create')
}

export function handle_goto_pools_add_liquidity(e){
    const contract_name = e.target.getAttribute("contract_name")
    if (contract_name) goto(`/pools/add/${contract_name}`)
    else goto('/pools/add')
}

export function handle_goto_pools_remove_liquidity(e){
    const contract_name = e.target.getAttribute("contract_name")
    if (contract_name) goto(`/pools/remove/${contract_name}`)
    else goto('/pools/remove')
}

export function handle_open_confirm_remove(e){
    handle_modal_open({
        modal_name: "ConfirmPoolsRemove",
        callback: () => console.log("confirm remove")
    })
}

export function handle_open_confirm_add(e){
    handle_modal_open({
        modal_name: "ConfirmPoolsAdd",
        callback: () => console.log("confirm add")
    })
}