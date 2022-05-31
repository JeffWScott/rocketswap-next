import { get } from 'svelte/store'

export function component_key(staked_token, base_token){
    return `${staked_token.token_symbol}:${base_token.token_symbol}` 
}

export const component_state = (state_store) => {
    function toggle(e){
        const store_value = get(state_store)
        const key = e.target.getAttribute('key')
    
        if (store_value[key]){
            delete store_value[key]
        }else{
            store_value[key] = true
        }
        state_store.set(store_value)
    }

    return toggle
}

export function key_string_value(obj, key_string){
    return key_string.split('.').reduce((p, c) => p && p[c] || null, obj)
}