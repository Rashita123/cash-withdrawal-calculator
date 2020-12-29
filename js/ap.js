var bill = document.querySelector(".calculator__bill-div__input");
var deposit = document.querySelector(".calculator__deposit-div__input");
var returnAmount = document.querySelector(".return__btn-text");
var billAlert = document.querySelector(".bill-alert");
var returnNegativeAlert = document.querySelector(".return-negative-alert");
var depositAlert = document.querySelector(".deposit-alert");
var cashDiv = document.querySelector(".cash");

var displayDeposit = document.querySelector(".deposit-display-js-controller");
var displayReturn = document.querySelector(".return-display-js-controller");
var div2000 = document.querySelector(".div-2000-display");
var div500 = document.querySelector(".div-500-display");
var div100 = document.querySelector(".div-100-display");
var div20 = document.querySelector(".div-20-display");
var div10 = document.querySelector(".div-10-display");
var div1 = document.querySelector(".div-1-display");

var show2000count = document.querySelector(".div-2000-count");
var show500count = document.querySelector(".div-500-count");
var show100count = document.querySelector(".div-100-count");
var show20count = document.querySelector(".div-20-count");
var show10count = document.querySelector(".div-10-count");
var show1count = document.querySelector(".div-1-count");

function checkBill(){
    if(bill.value<=0){
        billAlert.style.display="block";
        displayDeposit.style.display="none";
        displayReturn.style.display="none";
        cashDiv.style.display="none";
        return -1;
    }
    else{
        billAlert.style.display="none";
        displayDeposit.style.display="block";
    }
}

function checkDeposit(){
    if(deposit.value===""){
        displayReturn.style.display="none";
        returnAmount.innerText=0;
        return -1;
    }
    if(deposit.value<0){
        depositAlert.style.display="block";
        displayReturn.style.display="none";
        cashDiv.style.display="none";
        return -1;
    }
    else if (bill.value>0 && deposit.value>=0){
            depositAlert.style.display="none";
            displayReturn.style.display="block";
    }
}

function show2000(tooo){
    if(tooo>0){
        show2000count.innerText=tooo;
        div2000.style.display="inline-block";
    }
}
function show500(fiveoo){
    if(fiveoo>0){
        show500count.innerText=fiveoo;
        div500.style.display="inline-block";
    }
}
function show100(oneoo){
    if(oneoo>0){
        show100count.innerText=oneoo;
        div100.style.display="inline-block";
    }
}
function show20(twenty){
    if(twenty>0){
        show20count.innerText=twenty;
        div20.style.display="inline-block";
    }
}
function show10(ten){
    if(ten>0){
        show10count.innerText=ten;
        div10.style.display="inline-block";
    }
}
function show1(one){
    if(one>0){
        show1count.innerText=one;
        div1.style.display="inline-block";
    }
}
function returnManager(){
    cashDiv.style.display="none";
    returnNegativeAlert.style.display="none";
    billAlert.style.display="none";
    depositAlert.style.display="none";
    displayDeposit.style.display="none";
    displayReturn.style.display="none";

    if(checkBill()===-1){return;}
    if(checkDeposit()===-1){return;}
    
    var returnn = (deposit.value-bill.value);
    returnAmount.innerText=returnn;
    if(returnn===0){
        displayReturn.style.display="block";
        returnNegativeAlert.style.display="none";  
        cashDiv.style.display="none";
    }
    else if(returnn>0)
    {
        cashDiv.style.display="block";
        displayReturn.style.display="block";  
        div2000.style.display="none";
        div500.style.display="none";
        div100.style.display="none";
        div20.style.display="none";
        div10.style.display="none";
        div1.style.display="none";

        // cashDiv.style.display="block";   
        var tooo =Math.floor (returnn/2000);
        show2000(tooo);

        returnn-=(tooo*2000);
        

        var fiveoo = Math.floor(returnn/500);
        returnn-=(fiveoo*500);
        show500(fiveoo);

        var oneoo = Math.floor(returnn/100);
        returnn-=(oneoo*100);
        show100(oneoo);

        var twenty = Math.floor(returnn/20);
        returnn-=(twenty*20);
        show20(twenty);

        var ten = Math.floor(returnn/10);
        returnn-=(ten*10);
        show10(ten);

        var one = Math.floor(returnn/1);
        show1(one);
    }
    else{
        displayReturn.style.display="none";
        returnNegativeAlert.style.display="block";  
    }
}



bill.addEventListener("input",returnManager);
deposit.addEventListener("input", returnManager);
bill.addEventListener("change",returnManager);
deposit.addEventListener("change", returnManager);

