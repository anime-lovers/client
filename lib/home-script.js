let ul = document.getElementById('list-anime')
let listAnime = []

for ( let i = 1; i < 100; i++) {
  axios.get(`https://api.jikan.moe/anime/${i}`)
		.then(function (response) {
<<<<<<< HEAD
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
=======

      let li = document.createElement('li')
      let link = document.createElement('a')
      let liValue = document.createTextNode(response.data.title)
      link.setAttribute('href', '#')
      link.setAttribute('class', 'title-link')
      link.setAttribute('onclick', `detail('${response.data.title}')`)

      li.appendChild(link)
      link.appendChild(liValue)
      ul.appendChild(li)
      
>>>>>>> 2c821a6ee30d41e8549fb3ace6c5c340d3887885
		})
		.catch(function (error) {
    })
<<<<<<< HEAD

=======
}
    
>>>>>>> 2c821a6ee30d41e8549fb3ace6c5c340d3887885
function detail(name) {
  console.log(name)
  localStorage.setItem('name', `${name}`)
}
