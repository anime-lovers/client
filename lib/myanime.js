axios.post(`http://localhost:3000/animelist/favorites`, {
  token: localStorage.getItem('token')
})
  .then(function(response) {
    console.log(response.data.data)
    let parent = document.getElementById('list-anime')
    response.data.data.forEach(data => {
      let div = document.createElement('div')
      let link = document.createElement('a')
      let divValue = document.createTextNode(data)
      link.setAttribute('href', '#')
      link.setAttribute('class', 'title-link')
      div.setAttribute('class', 'list-group-item')
      link.setAttribute('onclick', `detail('${data}')`)
      div.appendChild(link)
      link.appendChild(divValue)
      parent.appendChild(div)
    })
  })
  .catch(function(error) {})

  function detail(name) {
    localStorage.setItem('name', `${name}`)
    location.replace('detail.html')
  }
