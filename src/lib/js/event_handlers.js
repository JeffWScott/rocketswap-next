import { modal_open_store, modal_data_store, modal_callback } from '$lib/js/stores/app-stores'

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

export function handle_show_verified_token_info(){
    handle_modal_open({modal_name: "VerifiedTokens"})
}