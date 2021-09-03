// memory overall

var eight = document.getElementById('eight')
var sixteen = document.getElementById('sixteen')
var memo1 = document.getElementById('memo1')

// storage overall

var storo = document.getElementById('storo')
var store1 = document.getElementById('store1')
var store2 = document.getElementById('store2')
var store3 = document.getElementById('store3')

// delivery overall

var delivery1 = document.getElementById("delivery1")
var delivery2 = document.getElementById("delivery2")
var delo = document.getElementById("delo")


// total calculation

var final = document.getElementById('final')

var grand = document.getElementById("grand");


grand.addEventListener("click", function () {
    grand.innerText = "1299$"
    updateTotal();
})




// main price

var mainp = document.getElementById("mainp")

mainp.addEventListener("click", function () {
    mainp.innerText = "1299$"


    updateTotal();
})







eight.addEventListener("click", function () {
    memo1.innerText = "0$"


    updateTotal();


})


sixteen.addEventListener("click", function () {
    memo1.innerText = "180$"


    updateTotal();
})

store1.addEventListener("click", function () {
    storo.innerText = "0$"


    updateTotal();

})

store2.addEventListener("click", function () {
    storo.innerText = "200$"


    updateTotal();
})
store3.addEventListener("click", function () {
    storo.innerText = "250$"


    updateTotal();

})

delivery1.addEventListener("click", function () {
    delo.innerText = "0$"



    updateTotal();
})

delivery2.addEventListener("click", function () {
    delo.innerText = "20$"


    updateTotal();
})

// update function

function updateTotal() {
    var lastCost = parseFloat(grand.innerText);
    var baseCost = parseFloat(mainp.innerText);
    var firstCost = parseFloat(memo1.innerText);
    var secondCost = parseFloat(storo.innerText);
    var thirdCost = parseFloat(delo.innerText);

    var overallTotal = baseCost + firstCost + secondCost + thirdCost;
    final.innerText = overallTotal;






}

// document.getElementById("new").addEventListener('click',function(){
//     const couponField = document.getElementById("discount");
//     const finalCode =couponField.value;

//     if(userInput=="Stevekaku" && "overallTotal*80/100"){


//     }
// })

// function promoCode(){
//     if(discount==stevekaku && overallTotal - 20%){
//         console.log("confirmed")
//     }else{
//         console.log("error")
//     }
// }


