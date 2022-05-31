import { modal_open_store, modal_data_store } from '$lib/js/stores/app-stores'

export function handle_moble_open(modal_name, modal_data={}){
    modal_open_store.set(modal_name)
    modal_data_store.set(modal_data)
}

export function handle_moble_close(e){
    modal_open_store.set(false)
}