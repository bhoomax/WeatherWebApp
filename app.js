const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const https = require("https");


app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000,function(){
app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html")
app.post("/",function(req,res){
  const query = req.body.cityName;
const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid=c0b69169d62e9970b05db5809bdd1fe2&units=metric";
https.get(url,function(response){
  console.log(response);

response.on("data",function(data){
  const WeatherData = JSON.parse(data);
  const temp = WeatherData.main.temp
  const descp = WeatherData.weather[0].description
  const icon = WeatherData.weather[0].icon
  const imageURL = "http://openweathermap.org/img/wn/"+icon+"@2x.png"
  res.write("<p>Currently the weather is"+" "+descp+"</p>");
  res.write("<h1>The temperature in "+query + " is" + " " + temp+" "+ "degree Celcius</h1>");
  res.write("<img src="+imageURL+">");
  res.send();
});
});
});
  });
  });


//   console.log("Hosted on 3000");
// });
// });
