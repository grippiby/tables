import { getTableFromArray } from './tableFromArray'

export const baseURL = 'https://jsonplaceholder.typicode.com/users'

export function getUsersFromAPI() {
	const error = document.getElementById('error')
	const getData = async (url) => {
		const response = await fetch(url)
		const data = await response.json()
		if (response.status !== 200) {
			error.innerHTML = 'Server is disconnect. Pls try later!'
		} else {
			getTableFromArray(data)
		}
	}
	return getData(baseURL).catch((err) => (error.innerHTML = err.message))
}
