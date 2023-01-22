const fs=require('fs');
var cityCode=[]; 
function codes(){
    
    fs.readFile('./cities.json','utf-8',(err,data)=>{
    

    if(err){
        console.log(err);
    }else{
        const codes=JSON.parse(data);
        for(let i=0;i<codes.List.length;i++){
           
            cityCode.push(codes.List[i].CityCode);
        }
        
      
    }
    console.log(cityCode);
    return cityCode;     
})
    
}
 

 codes();