var app = new Vue({
  el:"#app",
  data:{
    city:'',
    weatherList:[]
  },
  methods: {
    searchWeather:function(){

      var that = this;
      axios.get('https://tianqiapi.com/api?version=v1&appid=28259752&appsecret=74jNsLt9?city='+this.city)
        .then(function(response){

          console.log(response.data.data);
          that.weatherList = response.data.data
        })
        .catch(function(err){})
    }
  },
})
