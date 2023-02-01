import { editInfo } from './editInfo'
import { deleteUser } from './deleteUser'

export function createEl(el) {
	return document.createElement(el)
}
export function appendEl(parent, el) {
	return parent.appendChild(el)
}
export function getTableFromArray(usersList) {
	const addTable = document.getElementById('container')

	return usersList.map((user) => {
		const tr = createEl('tr')

		const id = createEl('td')
		const name = createEl('td')
		const phone = createEl('td')
		const deleteRowButton = createEl('td')
		const editRowButton = createEl('td')

		const addEditButton = `<button class="edit">Edit</button>`
		const addDeleteButton = `<button class="delete" id=${user.id}>Delete</button>`
		const addName = `<input type="text" value="${user.name}" disabled>`
		const addPhone = `<input type="text" value="${user.phone}" disabled>`
		id.innerHTML = `${user.id}`
		name.innerHTML = addName
		phone.innerHTML = addPhone

		editRowButton.innerHTML = `${addEditButton}`
		editRowButton.onclick = editInfo
		deleteRowButton.innerHTML = `${addDeleteButton} `
		deleteRowButton.onclick = deleteUser

		appendEl(tr, id)

		appendEl(tr, name)
		appendEl(tr, phone)

		appendEl(tr, editRowButton)
		appendEl(tr, deleteRowButton)

		appendEl(addTable, tr)
	})
}
