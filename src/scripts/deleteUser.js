export function deleteUser(object) {
	const id = object.target.id
	fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
		method: 'DELETE',
	})
	this.parentElement.textContent = `User № ${id} delete successfully`
}
