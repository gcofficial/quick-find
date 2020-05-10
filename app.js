var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    ids: Array.from({ length: 10 }).map((_value, index) => index), // Create array with 10 elements
    from: '',
    to: ''
  },
  methods: {
    appUnion: function (event) {
      this.ids = union(this.ids, this.from, this.to)
    },
    appIsConnected: function (event) {
      if (isConnected(this.ids, this.from, this.to)) {
        alert('YES')
      } else {
        alert('No')
      }
    }
  }
})