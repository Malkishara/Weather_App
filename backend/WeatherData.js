const { loadCodes } = require("./CityCodes");
const express=require("express")
const app=express()
const PORT =3000
const https=require('https')
const cors=require('cors');

//const api="https://api.openweathermap.org/data/2.5/weather?id="+{cityCode}+"&units=metric&appid="+{apikey};
const api1="https://samples.openweathermap.org/data/2.5/group?id=1248991,1850147,2644210,2988507,2147714,4930956,1796236,3143244&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02"

const data=loadCodes();
console.log(data)

app.use(cors());

function loaddata(){
app.get('/data',function(req,res){
    
//    for(var i=0;i<data.length;i++){
//     var cityCode=data[i];
//     console.log(cityCode)
//     const api1="https://samples.openweathermap.org/data/2.5/group?id="+cityCode+"&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02";


    https.get(api1,function(response){
        console.log(response.statusCode);
        response.on("data",function(data){
            const weatherData=JSON.parse(data);
            console.log(weatherData.list);
            res.send(weatherData.list)
        })
    })
//}
    
});
}

loaddata();
app.listen(PORT,function(){
    console.log('Server running on '+PORT)
})




