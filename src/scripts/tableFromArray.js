import { editCell } from './editCell'
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

		const addEditButton = `<button class="edit">Edit</button>`
		const addDeleteButton = `<button class="delete" id=${user.id}>Delete</button>`

		id.innerHTML = `${user.id}`
		name.innerHTML = `${user.name} ${addEditButton}`
		name.classList.add('text', 'text_name')
		phone.innerHTML = `${user.phone} ${addEditButton}`
		phone.classList.add('text', 'text_tel')

		deleteRowButton.innerHTML = addDeleteButton
		deleteRowButton.onclick = deleteUser

		appendEl(tr, id)

		appendEl(tr, name)
		appendEl(tr, phone)

		appendEl(tr, deleteRowButton)

		appendEl(addTable, tr)
		editCell()
	})
}
