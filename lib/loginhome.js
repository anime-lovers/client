let status = localStorage.getItem('status')
if (status === 'connected') {
  location.replace('./home.html')
}
