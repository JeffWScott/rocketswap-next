import { writable } from 'svelte/store'

import mock_balances from '$lib/mock_data/mock_user_balances.json'

export const user_balances = writable(mock_balances)