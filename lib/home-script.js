let ul = document.getElementById('list-anime')

axios.get('https://ghibliapi.herokuapp.com/films')
		.then(function (response) {
			let listAnime = response.data
			listAnime.forEach(list => {
        let li = document.createElement('li')
        let link = document.createElement('a')
        let liValue = document.createTextNode(list.title)
        link.setAttribute('href', '#')
        link.setAttribute('class', 'title-link')
        link.setAttribute('onclick', `detail('${list.title}')`)

        li.appendChild(link)
        link.appendChild(liValue)
        ul.appendChild(li)
			})
		})
		.catch(function (error) {
			console.log(error)
    })
    
function detail(name) {
  console.log(name)
  localStorage.setItem('name', `${name}`)
}