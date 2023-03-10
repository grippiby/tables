import { getTableFromArray } from './tableFromArray'
export const baseURL = 'https://jsonplaceholder.typicode.com/users'

class ApiCenter {
	constructor(baseURL) {
		this.baseURL = baseURL
	}

	getUsers() {
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
		return getData(this.baseURL).catch((err) => (error.innerHTML = err.message))
	}

	delUser(object, parentRow) {
		const id = object.target.id
		const error = document.getElementById('error')
		const deleteData = async (url) => {
			const response = await fetch(
				`https://jsonplaceholder.typicode.com/users/${id}`,
				{
					method: 'DELETE',
				}
			)
			if (response.status !== 200) {
				error.innerHTML = 'Server is disconnect. Pls try later!'
			}
			const data = response.json()
			if (response.status === 200) {
				error.innerHTML = `User № ${id} delete successfully`
				/* parentRow.textContent = `User № ${id} delete successfully` */
				parentRow.remove()
			}
		}
		return deleteData(this.baseURL).catch(
			(err) => (error.innerHTML = err.message)
		)
	}

	updateInfo(id, name, phone) {
		const error = document.getElementById('error')
		const getData = async (url) => {
			const response = await fetch(`${baseURL}/${id}`, {
				method: 'PUT',
				body: JSON.stringify({
					id,
					name,
					phone,
				}),
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
			})
			if (response.status === 200) {
				error.innerHTML = 'Успешно отредактировано'
			}
			const data = await response.json()
		}
		return getData(this.baseURL).catch((err) => (error.innerHTML = err.message))
	}

	createNewUser(id, name, phone) {
		const getData = async (url) => {
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
		}
		return getData(this.baseURL).catch((err) => (error.innerHTML = err.message))
	}
}

export default ApiCenter
