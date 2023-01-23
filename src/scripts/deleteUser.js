export async function deleteUser(object) {
	const id = object.target.id
	const error = document.getElementById('error')
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/users/${id}`,
		{
			method: 'DELETE',
		}
	)
	if (response.status !== 200) {
		error.innerHTML = 'Server is disconnect. Pls try later!'
	}
	const data = await response
		.json()
		.catch((err) => (error.innerHTML = err.message))
	/* console.log(data) */
	this.parentElement.textContent = `User № ${id} delete successfully`
	error.innerHTML = 'deleted!'
}
