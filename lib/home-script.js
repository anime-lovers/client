let ul = document.getElementById('list-anime')

axios.get('https://ghibliapi.herokuapp.com/films')
		.then(function (response) {
			let listAnime = response.data
			listAnime.forEach(list => {
        let li = document.createElement('li')
        let liValue = document.createTextNode(list.title)
        li.setAttribute('href', '#')
        li.setAttribute('class', 'title-link')
				li.setAttribute('class', 'list-group-item')
        li.setAttribute('onclick', `detail('${list.title}')`)
        li.appendChild(liValue)
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
