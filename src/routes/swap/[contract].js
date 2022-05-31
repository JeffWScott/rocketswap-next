// Mock
import mock_tokens from '$lib/mock_data/mock_tokens'

export async function get({ params }) { 
	const { contract } = params

	console.log(mock_tokens)

	const token_symbol = Object.keys(mock_tokens).find(f => {
		return mock_tokens[f].contract_name === contract
	})

	return {
		body: {
			token_info: mock_tokens[token_symbol]
		}
	};
}