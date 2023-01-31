import ApiCenter from './apiCenter'

export function deleteUser(object) {
	let parentRow = this.parentElement
	return new ApiCenter().delUser(object, parentRow)
}
