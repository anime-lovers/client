let ul = document.getElementById('list-anime')
let listAnime = []

for ( let i = 1; i < 100; i++) {
  axios.get(`https://api.jikan.moe/anime/${i}`)
		.then(function (response) {

      let li = document.createElement('li')
      let link = document.createElement('a')
      let liValue = document.createTextNode(response.data.title)
      link.setAttribute('href', '#')
      link.setAttribute('class', 'title-link')
      link.setAttribute('onclick', `detail('${response.data.title}')`)

      li.appendChild(link)
      link.appendChild(liValue)
      ul.appendChild(li)
      
		})
		.catch(function (error) {
    })
}
    
function detail(name) {
  console.log(name)
  localStorage.setItem('name', `${name}`)
}