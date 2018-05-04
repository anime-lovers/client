let ul = document.getElementById('list-anime')
let listAnime = []

function detail(name) {
  console.log(name)
  localStorage.setItem('name', `${name}`)
}
