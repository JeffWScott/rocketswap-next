import { writable, derived } from "svelte/store";

// Mock
import mock_tokens from '$lib/mock_data/mock_tokens';

export const tokens = writable(mock_tokens)

export const currency_token =  derived(tokens, ($tokens) => {
    const token_list = Object.keys($tokens).map(m => $tokens[m])
    return token_list.find(f => f.contract_name === "currency")
})