import ApiCenter from './apiCenter'

export function editInfo() {
	let parentRow = this.parentElement
	let val = this.textContent

	let id = parentRow.children[0].textContent
	let name = parentRow.children[1].children[0].value
	let phone = parentRow.children[2].children[0].value

	if (val !== 'Edit') {
		this.children[0].textContent = 'Edit'
		parentRow.children[1].children[0].setAttribute('disabled', '')
		parentRow.children[2].children[0].setAttribute('disabled', '')
		return new ApiCenter().updateInfo(id, name, phone)
	} else {
		this.children[0].textContent = 'Save'
		parentRow.children[1].children[0].removeAttribute('disabled')
		parentRow.children[2].children[0].removeAttribute('disabled')
	}
}
