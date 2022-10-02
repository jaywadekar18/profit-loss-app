let calculateBtn = document.querySelector("#calculate-btn");
let ip = document.querySelector("#initial-price");
let ns = document.querySelector("#no-of-stocks");
let sp = document.querySelector("#current-price");
let pageBody = document.querySelector("body");
let output = document.querySelector(".output-section");
function calculate(e) {
  e.preventDefault();
  let initialPrice = Number(ip.value);
  let noOfStocks = Number(ns.value);
  let sellingPrice = Number(sp.value);
  console.log(output);
  console.log(initialPrice, noOfStocks, sellingPrice);
  if (initialPrice == 0 && noOfStocks == 0 && sellingPrice == 0) {
    alert("Please enter all values..");
    return;
  }
  else if(initialPrice < 0 || noOfStocks < 0 || sellingPrice < 0){
    alert("Invalid data enter!!");
    return;
  }
  if (sellingPrice > initialPrice) {
    let profit = sellingPrice - initialPrice;
    let profitPercentage = (profit / initialPrice) * 100;
    pageBody.classList.remove("loss");
    pageBody.classList.add("profit");
    output.innerText = `Yay!! Your Profit is ${profit}  and profit Percentage is ${profitPercentage}%`;
    // Profit Logic
  } else if (initialPrice > sellingPrice) {
    let loss = initialPrice - sellingPrice;
    let lossPercentage = (loss / initialPrice) * 100;
    pageBody.classList.remove("profit");
    pageBody.classList.add("loss");
    output.innerText = `Hey, the loss is ${loss} and loss Percentage is ${lossPercentage}%`;
  } else {
    pageBody.classList.remove("profit");
    pageBody.classList.remove("loss");
    output.innerText = "No profit No loss..";
  }
}
calculateBtn.addEventListener("click", calculate);