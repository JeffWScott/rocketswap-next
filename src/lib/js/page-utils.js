export const window_history_set_swap_contract = (contract_name) => {
    const route = `/swap/${contract_name}`
    console.table(location)
    if (location.pathname !== route ){
        console.table(window.history)
        window.history.replaceState("", "", route);
        console.table(window.history)
    }
}