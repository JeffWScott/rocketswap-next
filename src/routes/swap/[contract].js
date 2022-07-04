// Mock
import mock_tokens from '$lib/mock_data/mock_tokens'

export async function get({ params }) { 
	const { contract } = params

	const token_symbol = Object.keys(mock_tokens).find(f => {
		return mock_tokens[f].contract_name === contract
	})

	const token_info = mock_tokens[token_symbol]

	if (!token_info){
		return {
			headers: { Location: '/swap' },
			status: 302
		  }
	}else{
		return {
			body: {
				token_info: mock_tokens[token_symbol]
			}
		};
	}
}