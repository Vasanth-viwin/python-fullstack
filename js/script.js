alert("welcome to NRIIT Mearning Management System")
let heading = document.getElementById("welcome");
heading.innerHTML = "welcome Future softwere Engineers"
console.log("heading element:", heading)
let msg = document.getElementById("message")
msg.innerHTML = "javascript is fun"
console.log("message element:", msg)
function showmessage() {
    alert("welcome to NRIIT Learning Management System")
}

function changeHeading() {
    document.getElementById("welcome").
        innerHTML = "Welcome python Fullstack Developers"
}
let heading1 = document.getElementById("#welcome");
console.log("heading element:", heading)
let button = document.getElementById("btnGreeting");
button.addEventListener("click", function () {
    alert("welcome to javascript Event Handling")
})
let registerform = document.getElementById("registerform");
registerform.addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if(!name || !email || !password){
        alert("Please fill all the fields");
        return;
    }
    alert("Form submitted successfully");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
});

