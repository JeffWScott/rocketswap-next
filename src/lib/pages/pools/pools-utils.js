import { goto } from '$app/navigation'

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