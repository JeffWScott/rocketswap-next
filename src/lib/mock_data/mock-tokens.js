import token_info from '$lib/mock_data/token_info.json'
import token_logos from '$lib/mock_data/token_logos'

let mock_tokens = {}

for (let token of token_info){
    token.token_logo = token_logos[token.token_symbol]
    mock_tokens[token.token_symbol] = token
}

export default mock_tokens