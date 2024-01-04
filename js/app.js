document.getElementById("btn-seach").addEventListener("click",()=>{
  let search= document.getElementById("searchtxt").value;
let reop={
    method:'Get'
};
fetch(`https://api.weatherapi.com/v1/current.json?key=007cf56f70d4431d99392717233012&q=${search}`,reop)
.then(response=>response.json())
.then(data =>{
    console.log(data);

    document.getElementById("temp").innerHTML=data["current"]["temp_c"]+"C";
    document.getElementById("cld").innerHTML=data["current"]["condition"]["text"];
    document.getElementById("ctr").innerHTML=data["location"]["name"];
    document.getElementById("img").src=data["current"]["condition"]["icon"];
    document.getElementById("time").innerHTML=data["location"]["localtime"];
    document.getElementById("reg").innerHTML=data["location"]["region"];

    

})
.then(error=>console.log("error",error))

})

