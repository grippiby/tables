import { updateInfo } from './getUsersFromApi'

export function editCell() {
	let edit = document.querySelectorAll('.edit')
	let text = document.querySelectorAll('.text')

	for (let i = 0; i < edit.length; i++) {
		let editMode = false

		edit[i].onclick = function () {
			if (editMode) {
				let value = text[i].childNodes[0].data
				let id = text[i].parentElement.childNodes[0]
				id = id.childNodes[0].nodeValue
				this.textContent = 'Edit'
				text[i].removeAttribute('contentEditable')
				let key = null
				text[i].childNodes[0].parentElement.classList.contains('text_name') &&
					(key = `name: ${value},`)
				text[i].childNodes[0].parentElement.classList.contains('text_tel') &&
					(key = `phone: ${value},`)
				updateInfo(id, key)
			} else {
				this.textContent = 'Save'
				text[i].setAttribute('contentEditable', true)
			}
			editMode = !editMode
		}
	}
}
