let ul = document.getElementById('list-anime')
let listAnime = []

for ( let i = 1; i < 300; i++) {
  axios.get(`https://api.jikan.moe/anime/${i}`)
		.then(function (response) {
      if(response.data.type == 'Movie') {
        let li = document.createElement('div')
        let link = document.createElement('a')
        let liValue = document.createTextNode(response.data.title)
        link.setAttribute('href', '#')
        link.setAttribute('class', 'title-link')
        li.setAttribute('class', 'list-group-item')
        link.setAttribute('onclick', `detail('${response.data.title}')`)
        li.appendChild(link)
        link.appendChild(liValue)
        ul.appendChild(li)
      }
		})
		.catch(function (error) {
    })
}

function detail(name) {
  localStorage.setItem('name', `${name}`)
  location.replace('detail.html')
}
