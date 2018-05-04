function signout () {
	localStorage.removeItem('status')
	localStorage.removeItem('token')
	location.reload()
}
