// API Query Parameters:
// Parameter    Type              Default       Description
// date         YYYY - MM - DD    today         The date of the response image to retrieve
// hd           bool              False         Retrieve the URL for the high resolution image
// api_key      string            DEMO_KEY      api.nasa.gov key for expanded usage

init();

function init() {
  // var currentDate;
  let date = this.todayDate();
  this.fixCalendar();
  this.showPics(date);
}

function todayDate() {
  var today = new Date();
  var d = String(today.getDate()).padStart(2, '0');
  var m = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var y = today.getFullYear();
  return `${y}-${m}-${d}`;
}

//Pick a date - Set date input field's max date to today:
function fixCalendar() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = yyyy + '-' + mm + '-' + dd;
  document.getElementById("datefield").setAttribute("max", today);
}

// CONTROLLER CODE
function showPics(date) {
  let key = 'a6PW9q1gv8uKF0ZmeyXNjhsQC7M4dkNl8QDfHPGm';
  var url = `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${date}`;
  getPics(url).then(function (data) {
    buildDOM(data);
  })
}
// MODEL CODE
function getPics(url) {
  return getJSON(url);
}
//HELPER FUNCTION to fetch the data from an external source and return it in JSON format
function getJSON(url) {
  return fetch(url)
    .then(function (response) {
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        return response.json();
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

function buildDOM(result) {
  currentDate = result.date;
  document.querySelector('#responseTitle').innerHTML = result.title;
  document.querySelector('#responseDate').innerHTML = 'DATE: ' + result.date;

  if (result.media_type === 'video') {
    document.querySelector('#responseImg').style.display = 'none';
    let avi = document.querySelector('#responseVideo > iframe');
    avi.src = result.url;
    document.querySelector('#responseVideo').style.display = 'block';
  } else {
    document.querySelector('#responseVideo').style.display = 'none';
    let ai = document.querySelector('#responseImg');
    ai.src = result.url;
    ai.style.display = 'block';
  }
  if (result.copyright != undefined) {
    document.querySelector('#responseCopyright').innerHTML = 'Copyright: ' + result.copyright;
  }
  document.querySelector('#responseDesc').innerHTML = 'DESCRIPTION: ' + result.explanation;
}

function randomDate() {
  let dateRandom = new Date(
    new Date(1995, 5, 16).getTime() + Math.random() *
    (new Date().getTime() - new Date(1995, 5, 16).getTime())
  );
  var d = String(dateRandom.getDate()).padStart(2, '0');
  var m = String(dateRandom.getMonth() + 1).padStart(2, '0'); //January is 0!
  let y = dateRandom.getFullYear();
  showPics(`${y}-${m}-${d}`);
}

function prevNext(number) {
  let newDate = new Date(currentDate);
  newDate.setDate(newDate.getDate() + number)
  let d = String(newDate.getDate()).padStart(2, '0');
  let m = String(newDate.getMonth() + 1).padStart(2, '0'); //January is 0!
  let y = newDate.getFullYear();
  showPics(`${y}-${m}-${d}`);
}

function datePicker() {
  let d = document.getElementById("day");
  var m = document.getElementById("month");
  var y = document.getElementById("year2");
  showPics(`${y}-${m}-${d}`);
}

// Event Listeners:
document.querySelector('#btnRandom').addEventListener('click', function () {
  randomDate();
});
document.querySelector('#btnToday').addEventListener('click', function () {
  init();
});
document.querySelector('#btnToday').addEventListener('click', function () {
  init();
});
document.querySelector('#prevBtn').addEventListener('click', function () {
  prevNext(0);
});
document.querySelector('#nextBtn').addEventListener('click', function () {
  prevNext(+2);
});
document.querySelector('#month').addEventListener('change', function () {
  datePicker();
});



// ToggleMenu function:
function toggleMenu() {
  document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}