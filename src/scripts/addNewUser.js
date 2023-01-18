import { editCell } from './editCell'
import { deleteUser } from './deleteUser'
import { createEl, appendEl } from './tableFromArray'
import { createNewUser } from './getUsersFromApi'

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
