import { editInfo } from './editInfo'
import { deleteUser } from './deleteUser'

import { createEl, appendEl } from './tableFromArray'
import ApiCenter from './apiCenter'

export function addNewUser() {
	const addName = document.getElementById('name').value
	const addPhone = document.getElementById('phone').value
	const getTable = document.getElementById('container')
	const leng = Number(getTable.lastChild.childNodes[0].textContent)

	const tr = createEl('tr')

	const id = createEl('td')
	const name = createEl('td')
	const phone = createEl('td')
	const deleteRowButton = createEl('td')
	const editRowButton = createEl('td')

	const addEditButton = `<button class="edit">Edit</button>`
	const addDeleteButton = `<button class="delete">Delete</button>`

	id.innerHTML = `${leng + 1}`
	name.innerHTML = `<input type="text" value="${addName}" disabled>`
	phone.innerHTML = `<input type="text" value="${addPhone}" disabled>`

	editRowButton.innerHTML = `${addEditButton}`
	editRowButton.onclick = editInfo
	deleteRowButton.innerHTML = `${addDeleteButton} `
	deleteRowButton.onclick = deleteUser

	appendEl(tr, id)

	appendEl(tr, name)
	appendEl(tr, phone)

	appendEl(tr, editRowButton)
	appendEl(tr, deleteRowButton)

	appendEl(getTable, tr)

	new ApiCenter().createNewUser(id, addName, addPhone)
}
