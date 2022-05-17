import pool_info from '$lib/mock_data/pool_info.json'
import token_logos from '$lib/mock_data/token_logos.js'
import token_info from '$lib/mock_data/token_info.json'

function get_token(token_symbol){
    return token_info.find(f => f.token_symbol === token_symbol)
}

let mock_pools = []

for (let token of pool_info){
    let staked_token = get_token(token.staked_token)
    staked_token.token_logo = token_logos[token.staked_token]
    token.staked_token = staked_token
    
    let base_token = get_token(token.base_token)
    base_token.token_logo = token_logos[token.base_token]
    token.base_token = base_token
    
    mock_pools.push(token)
}

export default mock_pools