var auth = {
  login: function() {

  },

  getToken: function() {
    console.log(localStorage.getItem('accessToken'));
    return localStorage.getItem('accessToken');
  },

  logout: function() {
    localStorage.removeItem('accessToken');
  },

  isLoggedIn: function() {
    console.log("isLoggedIn", !!localStorage.getItem('accessToken'));
    return !!localStorage.getItem('accessToken');
  }

};

module.exports = auth;