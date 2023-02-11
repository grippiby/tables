import './main.scss'
import { baseURL } from './scripts/apiCenter'
import { checkValues } from './scripts/checkValues.js'
import ApiCenter from './scripts/apiCenter'

main()

function main() {
	const submit = document.getElementById('form-submit')
	submit.addEventListener('click', checkValues)
	new ApiCenter(baseURL).getUsers()
}
