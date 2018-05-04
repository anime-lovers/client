window.fbAsyncInit = function() {
  FB.init({
    appId: '519117268484702',
    cookie: true,
    xfbml: true,
    version: 'v3.0'
  });
};

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
      FB.api('/me', {
        fields: ['name', 'email']
      }, function(response) {
        console.log(response)
        axios.post('http://localhost:3000', {
            name: response.name,
            email: response.email
          })
          .then(function(response) {
            console.log(response)
            localStorage.setItem('status', 'connected');
            localStorage.setItem('token', response.data.data);
            location.reload()
          })
          .catch(function(error) {
            console.log(error);
          });
      })
    }
  });
}
