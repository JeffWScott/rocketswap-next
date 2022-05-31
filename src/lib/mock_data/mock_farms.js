import farm_info from '$lib/mock_data/farm_info.json'
import token_logos from '$lib/mock_data/token_logos.js'
import token_info from '$lib/mock_data/token_info.json'

function get_token(token_symbol){
    return token_info.find(f => f.token_symbol === token_symbol)
}

let mock_farms = []

for (let token of farm_info){
    let staked_token = get_token(token.staked_token)
    staked_token.token_logo = token_logos[token.staked_token]
    token.staked_token = staked_token
    
    let earned_token = get_token(token.earned_token)
    earned_token.token_logo = token_logos[token.earned_token]
    token.earned_token = earned_token
    
    mock_farms.push(token)
}

export default mock_farms