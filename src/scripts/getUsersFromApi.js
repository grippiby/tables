import { getTableFromArray } from './tableFromArray'

const baseURL = 'https://jsonplaceholder.typicode.com/users'

const getData = async (url) => {
	try {
		const response = await fetch(url)
		const data = await response.json()
		getTableFromArray(data)
	} catch (err) {
		const error = document.getElementById('error')
		error.innerHTML = err.message
		document.getElementsByClassName('form_Container').remove()
	}
}

export function getUsersFromAPI() {
	getData(baseURL)
}

// фейковый запрос не оправляет данные на сервер
export async function createNewUser(id, name, phone) {
	try {
		const response = await fetch(baseURL, {
			method: 'POST',
			body: JSON.stringify({
				id: id,
				name: `${name}`,
				phone: `${phone}`,
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
		const data = await response.json()
	} catch (err) {
		const error = document.getElementById('error')
		error.innerHTML = err.message
		document.getElementsByClassName('form_Container').remove()
	}
}

export async function updateInfo(id, value) {
	try {
		const response = await fetch(`${baseURL}/${id}`, {
			method: 'PUT',
			body: JSON.stringify({
				id: id,
				value,
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
		const data = await response.json()
		/* 	console.log(data) */
	} catch (err) {
		const error = document.getElementById('error')
		error.innerHTML = err.message
	}
}
