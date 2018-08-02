// Set editable only when clicked
var click = false;

// Make the table elements containing grades editable
function makeEditable() {
  for (var i = 1; i < 11; i++) {
    for (var j = 2; j < 7; j++) {
      document.getElementById("myTable").rows[i].cells[j].contentEditable = true;
    }
  }
}

function checkClicked() {
  if (click) {
    calcFinal();
    getNoGrade();
  }
}

function setClicked() {
  click = true;
  for (var i = 1; i <= 50; i++) {
    if (document.getElementById("elem-" + i).innerHTML === "") {
      document.getElementById("elem-" + i).innerHTML = "-";
    }
  }
  return click;
}

function calcFinal() {
  var result = 0;

  for (var i = 1; i <= 50; i++) {
    if (document.getElementById("elem-" + i).innerHTML === '-') {
      document.getElementById("elem-" + i).style.backgroundColor = "#FFD900cc";
      document.getElementById("elem-" + i).style.color = "black";
      result += 0;
    } else {
      checkGrades(Number(document.getElementById("elem-" + i).innerHTML), "elem-" + i);
      result += Number(document.getElementById("elem-" + i).innerHTML);
    }

    if (i % 5 === 0) {
      result = Math.round(result / 5);
      document.getElementById("grades" + (i / 5)).innerHTML = (String(result)) + "%";
      checkGrades(result, "grades" + (i / 5));
      result = 0;
    }
  }
}

function checkValidity() {
  for (var i = 2; i < 11; i++) {
    for (var j = 2; j < 7; j++) {
      var temp = Number(document.getElementById("myTable").rows[i].cells[j].innerHTML);

      if (j === 1) {
        // If a string shows nothing
        if ((temp) < 0 || isNaN(temp))
          document.getElementById("myTable").rows[i].cells[j].innerHTML = "";
      } else {
        // If a string shows nothing
        if ((temp) < 0 || (temp) > 100 || isNaN(temp))
          document.getElementById("myTable").rows[i].cells[j].innerHTML = "-";
      }
    }
  }
}

// Change colour of grade cells to red or white, depending on pass or fail
function checkGrades(grade, id) {
  var patternMatch = new RegExp("grades");

  if (grade < 40 && patternMatch.test(id)) {
    document.getElementById(id).style.backgroundColor = "#AB1211ee";
    document.getElementById(id).style.color = "white";
  } else {
    document.getElementById(id).style.backgroundColor = "#ffffff44";
    document.getElementById(id).style.color = "black";
  }
}

function getNoGrade() {
  var count = 0;

  for (var i = 1; i <= 50; i++) {
    if (document.getElementById("elem-" + i).innerHTML === "-")
      count++;
  }
  calcFinal();
  document.getElementById("paragraph").innerHTML = String(count);
}

function getCSV() {
  var path = "";

  for (var i = 2; i < 11; i++) {
    for (var j = 0; j < 8; j++) {
      path += document.getElementById("myTable").rows[i].cells[j].innerHTML + ",";
    }

    document.getElementById("CSV").innerHTML = path;
  }
}
