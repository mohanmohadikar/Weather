var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var feelslike = document.querySelector('.feelslike');
var min = document.querySelector('.min');
var max = document.querySelector('.max');
var pressure = document.querySelector('.pressure');
var humidity = document.querySelector('.humidity');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button = document.querySelector('.submit');
var dropdown = document.querySelector('.dropDown');




button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=788a607edb8e52822fa815eadbd1a147')
.then(response => response.json())
.then(data => {
  var tempValue = Math.round(data['main']['temp']-273.15);
  var feelslikeValue = Math.round(data['main']['feels_like']-273.15);
  var minValue = Math.round(data['main']['temp_min']-273.15);
  var maxValue = Math.round(data['main']['temp_max']-273.15);
  var pressureValue = data['main']['pressure'];
  var humidityValue = data['main']['humidity'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Desc : "+descValue;
  temp.innerHTML = "Temp : "+tempValue+"&degC";
  feelslike.innerHTML = "feels like : "+feelslikeValue+"&degC";
  min.innerHTML = "min : "+minValue+"&degC";
  max.innerHTML = "max : "+maxValue+"&degC";
  pressure.innerHTML = "Pressure : "+pressureValue+" mBar";
  humidity.innerHTML = "Humidity : "+humidityValue+"%";
  input.value ="";

})

.catch(err => alert("Enter the city name correctly"));
})
