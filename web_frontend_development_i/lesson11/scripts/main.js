var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var days2 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Inject to DOM (Footer)
document.getElementById("currentDate").innerHTML = days[currentDate.getDay()] + ", " + months[currentDate.getMonth()] + " " + currentDate.getDate() + ", " + currentYear;

// ToggleMenu
function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

if (currentDate.getDay() == 5) {
    document.getElementById("pancake").removeAttribute("class", "hidden");
}

WebFont.load({
    google: {
        families: ['Londrina Shadow', 'Open Sans']
    }
});