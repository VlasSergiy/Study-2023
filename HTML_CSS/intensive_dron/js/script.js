const dronPrice = 3300; //euro

let exchangeRate = parseFloat(prompt("Введіть курс Гривні до Євро:"));
let donationSum = parseFloat(prompt("Введіть суму благодійних внесків (в гривнях):"));
let numberOfDrones = donationSum / exchangeRate / dronPrice;

console.log("Кількість дронів, яку можна придбати за цю суму: " + parseInt(numberOfDrones));