import { addNewUser } from './addNewUser'

export function checkValues() {
	const nameUser = document.getElementById('name')
	const phoneUser = document.getElementById('phone')
	const error = document.getElementById('error')

	if (nameUser.value.length === 0 || phoneUser.value.length === 0) {
		error.innerHTML = 'our inputs can`t be empty'
	} else if (nameUser.value.length < 6) {
		error.innerHTML = 'name must include min 6 letters'
	} else if (phoneUser.value.length < 6) {
		error.innerHTML = 'Phone must include min 6 digits'
	} else if (isNaN(phoneUser.value)) {
		error.innerHTML = 'enter Numeric value in "Phone"-input'
	} else if (nameUser.value.length !== 0 && phoneUser.value.length !== 0) {
		addNewUser()
		nameUser.value = ''
		phoneUser.value = ''
		error.innerHTML = 'added successfully'
	}
}
