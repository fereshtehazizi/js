"strict mode"
// Part 1: Login & Access Control
const intro = prompt('Are You New?')
if (intro === "Yes" || intro === "yes"){
    alert("For further use of this website you should follow the protocol, and clarify your identity (Admin | User) and enter the password (1234).")
}
else{
    alert("Welcome Back!")
}
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if ((username === "Admin" || username === "admin" || username === "User" ||  username === "user") && (password === "1234")){
        document.getElementById("login").style.display= "none";
        document.getElementById("order").style.display= "block";
        document.getElementById("header1").style.display= "none";
        document.getElementById("header2").style.display= "block";
    }
    else {
        alert("Invalid credentials. Access denied. Try again!")
    }
}

// Part 2: Coffee Shop Order Calculator
function processOrder(){
    const name = document.getElementById("name").value;
    const age = parseInt (document.getElementById("age").value);
    const coffeeType = document.getElementById("coffeeType").value;
    const quantity = parseInt (document.getElementById("quantity").value);
    const split = parseInt (document.getElementById("split").value);
    const tipPercent = parseInt (document.getElementById("tip").value);

    const prices = {
        smoothie: 2.5,
        ice: 3,
        cappuccino: 4.6
    };

    const originalTotal = prices[coffeeType] * quantity;
    const discount = (age < 18 || age > 60) ? originalTotal * 0.1 : 0;
    const finalTotal = originalTotal - discount;
    const tipAmount = (finalTotal * tipPercent / 100)
    const totalWithTip = finalTotal + tipAmount;
    const perPerson = totalWithTip / split;

    let = alert(`
        Hello ${name}
        You have Ordered: ${quantity} ${coffeeType}(s)
        Original total: $${originalTotal}
        Discount: $${discount}
        Tip: $${tipAmount}
        Total with Tip: $${totalWithTip}
        Split between ${split} people: $${perPerson} each
        Enjoy you drink!`);
}