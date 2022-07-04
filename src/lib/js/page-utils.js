export const window_history_set_swap_contract = (contract_name) => {
    const route = `/swap/${contract_name}`
    set_window_history(route)
}

export const window_history_set_pools_add_contract = (contract_name) => {
    const route = `/pools/add/${contract_name}`
    set_window_history(route)
}

export const window_history_set_pools_create_contract = (contract_name) => {
    const route = `/pools/create/${contract_name}`
    set_window_history(route)
}

const set_window_history = (route) => {
    if (location.pathname !== route ){
        console.table(window.history)
        window.history.replaceState("", "", route);
        console.table(window.history)
    }
}