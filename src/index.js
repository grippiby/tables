import './main.scss'
import { checkValues } from './scripts/checkValues.js'
import { getUsersFromAPI } from './scripts/getUsersFromApi'

main()

function main() {
	const submit = document.getElementById('form-submit')
	submit.addEventListener('click', checkValues)
	getUsersFromAPI()
}
