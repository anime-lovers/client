function goBack() {
  window.history.back()
}
const title_anime = localStorage.getItem('name')
axios.get(`https://api.themoviedb.org/3/search/movie?api_key=46a6751a46d3f387669deeac233870aa&query=${title_anime}`)
  .then(function (response) {
    let idMovie = response.data.results[0].id
    axios.get(`https://api.themoviedb.org/3/movie/${idMovie}?api_key=46a6751a46d3f387669deeac233870aa&append_to_response=videos`)
      .then(function (response) {
        $('#title').text(`${response.data.title}`)
        $('.original_title').text(`${response.data.original_title}`)
        $('.tagline').text(`${response.data.tagline}`)
        $('.release').text(`${response.data.release_date}`)
        $('#sinopsis').text(response.data.overview)
        $("#thumbnail-movie").attr("src", `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${response.data.backdrop_path}`)
        $("#thumbnail-movie").attr("alt", `${response.data.title}`)
        $("iframe").attr("src", `https://www.youtube.com/embed/${response.data.videos.results[0].key}`)
        response.data.genres.forEach(genre => {
          let animeGenre = $("<span></span>").text(`${genre.name} - `);
          $('.genre').append(animeGenre)
        })
        return response.data
      })
      .then(response => {
        const token = localStorage.getItem('token')
        let requestToServer = {
          token,
          title_anime
        }
        $('.favorite').click(() => {
          alert("are your sure?");
          axios.post('http://localhost:3000/animelist', requestToServer)
            .then(response => {
              console.log('response :', response);
              $(".heart.fa").click(function () {
                $(this).toggleClass("fa-heart fa-heart-o");
              });
              location.reload();
            })
        })
        return response
      })
      .then(response => {
        axios.get(`http://www.theimdbapi.org/api/movie?movie_id=${response.imdb_id}`)
          .then(function (res) {
            $('.score').text(`${res.data.rating}`)
            $('.director').text(`${res.data.director}`)
            $('.content_rating').text(`${res.data.content_rating}`)
            $('.duration').text(`${res.data.length}`)
            let casts = res.data.cast
            casts.forEach(cast => {
              let nameCast = $(`<li></li>`).text(`${cast.name}`)
              $('.cast').append(nameCast)
            })
            let stars = res.data.stars
            stars.forEach(star => {
              let starName = $('<li></li>').text(`${star}`)
              $('.star').append(starName)
            })
          })
      })
  })
  .catch(function (error) {
    console.log(error);
  })