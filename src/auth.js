var auth = {
  getToken: function() {
    return localStorage.getItem('accessToken');
  },

  logout: function() {
    localStorage.removeItem('accessToken');
  },

  isLoggedIn: function() {
    return !!localStorage.getItem('accessToken');
  }

};

module.exports = auth;