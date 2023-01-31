import { editCell } from './editCell'
import { deleteUser } from './deleteUser'
/* let deleteUser = new ApiCenter().deleteUser() */
import { createEl, appendEl } from './tableFromArray'
/* import { baseURL } from './getUsersFromApi' */
import { baseURL } from './apiCenter'
export function addNewUser() {
	const getTable = document.getElementById('container')
	const leng = getTable.childNodes.length

	const tr = createEl('tr')
	const id = createEl('td')
	const name = createEl('td')
	const phone = createEl('td')

	const addName = document.getElementById('name').value
	const addPhone = document.getElementById('phone').value
	name.innerHTML = addName
	phone.innerHTML = addPhone

	const deleteRowButton = createEl('td')

	const addEditButton = `<button class="edit">Edit</button>`
	const addDeleteButton = `<button class="delete">Delete</button>`

	id.innerHTML = `${leng + 1}`

	name.innerHTML = `${addName} ${addEditButton}`
	name.className = 'text'
	phone.innerHTML = `${addPhone} ${addEditButton}`
	phone.className = 'text'

	deleteRowButton.innerHTML = addDeleteButton
	deleteRowButton.onclick = deleteUser

	appendEl(tr, id)

	appendEl(tr, name)
	appendEl(tr, phone)
	appendEl(tr, deleteRowButton)

	appendEl(getTable, tr)
	editCell()

	createNewUser(id, addName, addPhone)
}

// фейковый запрос не оправляет данные на сервер
async function createNewUser(id, name, phone) {
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
	const data = await response.json().catch((err) => {
		const error = document.getElementById('error')
		error.innerHTML = err.message
	})
}
