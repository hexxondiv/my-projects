function calculateTip() {

    var billAmount=document.getElementById("bill").value;
    var qualityOfService=document.getElementById("qualityOfService").value;
    var numOfPeople=document.getElementById("numOfPeople").value;

    if(billAmount===""||qualityOfService == 0){
        window.alert("Please enter some values.");
        return; 
    }

    if(numOfPeople>1){
        var tip=(billAmount*qualityOfService)/numOfPeople;
        tip=Math.round(tip * 100) / 100;
        tip=tip.toFixed(2);              
        document.getElementById("tip").innerHTML=tip;
        document.getElementById("each").style.display="block";
        document.getElementById("TotalTip").style.display="block"; 
    }
    else{
        var tip=billAmount*qualityOfService;
        tip=Math.round(tip * 100) / 100;
        tip=tip.toFixed(2);
        document.getElementById("tip").innerHTML=tip;
        document.getElementById("each").style.display="none";
        document.getElementById("TotalTip").style.display="block";
    }

}


document.getElementById("TotalTip").style.display="none";
document.getElementById("each").style.display="none";

document.getElementById("calculate").onclick=function() { calculateTip();};