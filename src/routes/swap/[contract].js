export async function get({ params }) { 
	const { contract } = params
	
	return {
		body: {
			contract_name: contract
		}
	};
}