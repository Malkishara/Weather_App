const {readFileSync}=require('fs');

const loadCodes=()=>{
    var cityCode=[];
    var len=JSON.parse(readFileSync('cities.json')).List.length;
    //console.log(len);
    for(var i=0;i<len;i++){
    const codes=JSON.parse(readFileSync('cities.json')).List[i].CityCode;
    //console.log(codes);
    cityCode.push(codes);
    }
    //console.log(cityCode);
    return cityCode;

    
}



//console.log(loadCodes())
module.exports={
    loadCodes,
    
}


