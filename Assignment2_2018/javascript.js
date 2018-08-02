var countcol = -2;
var colChange = 0;

var click = false;
function clickFlag(){
    if(click) { calcFinal();getNoGrade(); }
}

function getMessage()
{
    alert("Check out my portfolio at www.kelly3d.com");
}

function showCookie()
{
    alert(document.cookie);
}

// Make the table elements containing grades editable
function setEditable()
{
    var tempRow = document.getElementById("dataTable").rows.length;
    var tempCol = document.getElementById("dataTable").rows[0].cells.length - 1;
    for (i = 1; i < tempRow; i++)
    {
        for(j = 0; j < tempCol; j++)
        {
            document.getElementById("dataTable").rows[i].cells[j].contentEditable = true;
            document.getElementById("dataTable").rows[i].cells[tempCol].contentEditable = false;
        }
    }
    document.getElementById("dataTable").rows[0].cells[tempCol].setAttribute("Class", "mt-finRes");
}

function checkGrade(result, i, j)
{
    var fail = 40;
    var colOver = document.getElementById("dataTable").rows[i].cells[j];
    if(j === document.getElementById("dataTable").rows[0].cells.length-1 && result < fail)
    {
        colOver.style.backgroundColor = "#AB1211bc";
        colOver.style.color = "white";
    }
    else{
        colOver.style.backgroundColor = "#ffffffbc";
        colOver.style.color = "black";
    }
}

function calcFinal()
{
    var rowTemp = document.getElementById("dataTable").rows.length;
    var colTemp = document.getElementById("dataTable").rows[0].cells.length;
    for(i = 1; i < rowTemp; i++){
        var finalResult = 0;
        for(j = 2; j < colTemp - 1; j++)
        {
            var local = document.getElementById("dataTable").rows[i].cells[j];
            if(local.innerText === "-")
            {
                local.style.color = "black";
                local.style.backgroundColor = "#FFD90088";
                finalResult += 0;
            }
            else
            {
                checkGrade(Number(local.innerText), i, j);
                finalResult += Number(local.innerText);
            }
            if(j === colTemp - 2)
            {
                finalResult = Math.round(finalResult / (colTemp - 3));
                document.getElementById("dataTable").rows[i].cells[j+1].innerText = (String(finalResult) + "%");
                checkGrade(finalResult, i, j + 1);
                finalResult = 0;
            }
        }
    }
}

function checkValid()
{
    var rowTemp = document.getElementById("dataTable").rows.length;
    var colTemp = document.getElementById("dataTable").rows[0].cells.length;
    for (i = 1; i < rowTemp; i++)
    {
        for(j = 2; j < colTemp - 1; j++)
        {
            var t = Number(document.getElementById("dataTable").rows[i].cells[j].innerText);
            if(j === 2)
            {
                if (t < 0 || isNaN(t))
                    document.getElementById("dataTable").rows[i].cells[j].innerText = "";
            }
            else{
                if (t < 0 || (t) > 100 || isNaN(t))
                    document.getElementById("dataTable").rows[i].cells[j].innerText = "-";
            }
        }
    }
}

//NOTE Works
function setClicked()
{
    click = true;
    for (i = 1; i <= table.rows.length; i++)
    {
        if(document.getElementById("mt-" + i).innerText == "")
        {
            document.getElementById("mt-" + i).innerText = "-";
        }
    }
    return click;
}

var remain = 1;
function getNoGrade()
{
    var remain = 0;
    var x = document.getElementById("dataTable").rows.length;
    var y = document.getElementById("dataTable").rows[0].cells.length - 1;
    for (i = 1; i < x; i++)
    {
        for(j = 2; j < y; j++)
        {
            if(document.getElementById("dataTable").rows[i].cells[j].innerHTML === "-")
            {
                  remain++;
            }
        }
    }
    calcFinal();
    document.getElementById("remainder").innerText = "Unsubmitted: " + String(remain);
}


//NOTE Adding and removing rows and columns working perfectly
function addRow()
{
  var table = document.getElementById("dataTable");
  var newAssignment = table.rows.length;
	var lastCol = table.rows[0].cells.length;
  var firstCol = newAssignment - newAssignment;
	var row = table.insertRow(newAssignment);
    //row.setAttribute("Class", "mt-asmt");
    row.setAttribute("id", String(++countcol));
    row.setAttribute("ondblclick", "rowSelect(id)");
	for(i = 0; i < lastCol; i++)
	{
    		var cell = row.insertCell(i);
    if((lastCol-3) === firstCol)
    {
      //insertCell;
      cell.type = "checkbox";
    }

    cell.setAttribute("Class", "mt-c");
		cell.innerText = "-";
    if((lastCol-1) > 0)
    {
      cell.setAttribute("Class", "mt-asmt");
    }
    //ct++;
	}
}

var assignmentNew = 1;
var maxAssignment = 0;

function addColumn()
{
  var table = document.getElementById("dataTable");
  var lastRow = table.rows.length;
	var lastCol = table.rows[0].cells.length -1;
  colChange++; console.log("Column added " + colChange);
  assignmentNew++;
  maxAssignment++;
  //for each row add column
	for(i = 0; i < lastRow; i++)
	{
		var cell = table.rows[i].insertCell(lastCol);
    cell.setAttribute("Class", "mt-asmt");
		if(i == 0)
    {
      cell.setAttribute("ondblclick", "highlightRow(id)");
  		cell.innerHTML = "Assignment " + assignmentNew;
    }
		else{
			cell.innerHTML = "-";
    }
  }
  if(maxAssignment > 5)
  {
    alert("Warning:" + "\n" + "Structure of the table may become distorted with further increase of column number");
    //assignmentNew--;
  }
}

var deleteRow = false;
function deleteRows()
{
  var table = document.getElementById("dataTable");
	var lastRow = table.rows.length;

	if(lastRow < 2)
  {
		alert("No more columns to delete");
		return;
	}
	table.deleteRow(lastRow - 1);
}

function deleteColumns()
{
  var table = document.getElementById("dataTable");
	var lastCol = (table.rows[0].cells.length) -2;
	var lastRow = (table.rows.length);
  colChange--; console.log("Removed column " + colChange);
  assignmentNew--;
  maxAssignment--;

	//disallow first two column removal unless code is add to re-add text box columns vs checkbox columns
	if(lastCol < 3)
  {
		alert("One assignment module at least is required");
    assignmentNew = assignmentNew +1;
		return;
	}
	 //for each row remove column
	for(i = 0; i < lastRow; i++)
	{
		table.rows[i].deleteCell(lastCol);
	}
}

//NOTE WORKS PERFECTLY, except for the creation of a checkbox on a new row. id issue?
// delete the selected rows from table
function deleteSelectedRows()
{
  var table = document.getElementById('dataTable'); //html table

  var rowCount = table.rows.length; //no. of rows in table

  for(i = 0; i < rowCount; i++)
  { //loops for all row in table
    var row = table.rows[i]; //return a particular row
    var chkbox = row.cells[0].childNodes[0]; //get check box onject

    if(null != chkbox && true == chkbox.checked)
    { //whether check box is selected
    table.deleteRow(i); //delete the selected row
    rowCount--; //decrease rowcount by 1
    i--;
  }
 }
}

// A CSV is a string of data.  This function iterates through the table matrix,
// populating the string with the table data
function getCSV()
{
    var path = "";
    var table = document.getElementById("dataTable");
    var lastRow = table.rows.length;
    var lastCol = table.rows[0].cells.length -1;


    for(i = 0; i < lastRow; i++)
    {
        // For each cell, when adding to the path, separate with a ","
        for(j = 0; j < lastCol; j++)
        {
            path += document.getElementById("dataTable").rows[i].cells[j].innerText + ",";
        }
        document.getElementById("CSV").innerText = path;
    }
}

function setCookie()
{
    // We will use this variable to store the string of data from within the table matrix
    var cookieMatrix = "";

    // Get the length of the rows and columns of the table
    var rowNum = document.getElementById("dataTable").rows.length;
    var colNum = document.getElementById("dataTable").rows[0].cells.length;
    var newColNum = colNum - 1;
    if(addColumn)
    {
      newColNum++; console.log("colcount is " + newColNum);
    }


    // Iterate through the table matrix to count up the number of rows and columns
    for(i = 0; i < rowNum; i++)
    {
      for(j = 0; j < newColNum; j++)
      {
        // If the data contains a space replace it with "%20"
        if(document.getElementById("dataTable").rows[i].cells[j].innerText == " ")
        {
          cookieMatrix = "%20";
        }
        else
        {
          cookieMatrix += document.getElementById("dataTable").rows[i].cells[j].innerText + ",";
        }
      }
      // Transfer the string data into a cookie
      document.cookie = "rows=" + rowNum + ":" + "cols=" + newColNum + ":" + "elements=" + cookieMatrix;
    }
}


function getCookie(cookieName)
{
  var table = document.getElementById("dataTable");
  var lastColC = (table.rows[0].cells.length);
  var lastRowC = (table.rows.length);

  var joy = 0;

  var length = document.getElementById("dataTable").rows[0].cells.length;

  // Split up all the cookie data using the ":" character.
  var divider = document.cookie.split(":");

  // Substrings
  var el, ro, co, tableContents;

  // When the "=" character is used, store the substrings into variables
  var rowSplit, colSplit, elementSplit;

  // Break up the string into desired pieces using arrays and .split
  for(i = 0; i < length ; i++)
  {
    ro = divider[0]; console.log(ro);
    co = divider[1];
    el = divider[2];

    for(j = 0; j < el.length - 1; ++j)
    {
      rowSplit = ro.split("="); rowCount = rowSplit[1]; console.log(rowCount);
      colSplit = co.split("="); colCount = colSplit[1];
      elementSplit = el.split("="); tableContents = elementSplit[1];

      // Splite up the table contents use the "," character
      for(i = 0; i < tableContents.length; i++)
      {
          tableConSplit = tableContents.split(",");
      }
    }
    assignmentNew--;
    maxAssignment--;
    var dynamicRow = (lastRowC + assignmentNew) + 1; console.log("dynamicRow number is " + dynamicRow);
    var dynamicColumn;
    console.log(tableConSplit);
    console.log(lastColC);

    // tableConSplit is made up of the saved cookie data for the table and is passed in using a nested for loop
    for(i = 0; i < dynamicRow; i++)
    {
      for(j = 0; j < lastColC; j++)
      {

        document.getElementById("dataTable").rows[i].cells[j].innerText = tableConSplit[joy++];
      }
    } console.log(joy);
  }
}

// For multiple cookies
function getAllCookies()
{
  // Get the length of the rows and columns of the table
  var rowNum = document.getElementById("dataTable").rows.length;
  var colNum = document.getElementById("dataTable").rows[0].cells.length;

  for(i = 0; i < rowNum.length; i++)
  {
    for (var j = 0; j < colNum; j++)
    {
      var find = getCookies("Fred" + "row" + i + "col" + j);
      document.getElementById('dataTable').rows[i].cells[j].innerText = find;
    }
  }
}

function deleteCookie(cookieName)
{
  //To delete cookie set date in the past.
  document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}


function rowSelect(id)
{
  var row = document.getElementById("dataTable").rows.length;
  var col = document.getElementById("dataTable").rows[0].cells.length;
  var table = document.getElementById("dataTable");

  if(table.rows.cells(0).style.backgroundColor === "#9cb5cff8"){
      for(j = 0; j < col; j++){
        table.rows[Number(id)].cells[j].style.backgroundColor = "#9cb5cf88";
      }
  }

  if(table.rows[Number(id)].cells(0).style.backgroundColor !== "#9cb5cff8"){
    for(j = 0; j < col; j++){
      table.row[Number(id)].cells[j].style.backgroundColor = "#9cb5cff8";
    }
  }

}


function deleteHighlightCols()
{
      var num = 1;
    var table = document.getElementById("dataTable");
    var x = table.rows.length;
    var y = table.rows[0].cells.length;
    var i = 2;
    for(i = 2; i < y; i++){
        if(table.rows[1].cells[i].style.backgroundColor == "#9cb5cf00"){
            y--;
            colNumHistory = i;
            delCol(i);
            for(j = i+1; j < y-1; j++){
                table.rows[0].cells[j].setAttribute("id", String((j-1) * -1));
            }
            for(j = 0; j < x; j++){
                table.rows[j].deleteCell(i);
            }
            countcol++;
        }
    }
    for(i = 2; i < y-1; i++)
    {
        table.rows[0].cells[i].innerHTML = "Assignment " + (num++);
    }
    deletedCols = true;
}


/*
function createCookie(cookiePath)
{
  var rowNew = document.getElementById("dataTable").rows.length;
  var cellNew = document.getElementById("dataTable").rows[0].cells.length;

  for(i = 0; i < (rowNew * cellNew); i++)
  {
    document.cookie = "table="+ cookiePath;
    document.cookie = "rows"+ rowNew;
    document.cookie = "cols"+ cellNew;
  }

      alert("Cookies: " + document.cookie);
}

function extractCookies() {
  cookies = {};
  var cookieArray = document.cookie.split(";");

  for(i = 0, len=cookieArray.length; i < len; i++) {
    var cookie = cookieArray[i];

    while (cookie.charAt[0]==" ") {
      cookie = cookie.substring(1, cookie.length);
    }
    var cookiePieces = cookie.split("=");
    var name = cookiePieces[0];
    var value = cookiePieces[1];
    cookies[name] = unescape(value);
  }
}


/*
function createCookie(newCookie)
{
  var expDate = new Date();

  expDate.setMonth(expDate.getMonth() + 1); // Adds 1 month ahead as the expiration date
  var cookieVal = document.getElementById(newCookie).value;

  // Retrieves cookie value from the node that was past to the function and create the cookie
  //document.cookie = newCookie + "="+cookieVal + "path =/;expires=" + max-age;
  document.cookie = newCookie + "=" + cookieVal + "path =/;max-age="+5*60+';';
}
*/
/*
function deleteCookie(name)
{
  //To delte cookie set date in the past.
  document.cookie = name + "=deleted; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;";
  document.cookie = name + "; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;";
}

function saveCookies()
{
  myCookies["myUser"] = document.getElementById("user").value;
  myCookies["UserAge"] = document.getElementById("age").value;
  //Start reusable code
  var expiresAttrib = new Date(Date.now()+60*1000).toString();
  var cookieString = "";
  for(var key in myCookies)
  {
    cookieString = key + "="+myCookies[key]+";"+expiresAttrib+";";
    document.cookie = cookieString;
  }// End reusable

  document.getElementById("out").innerText = document.cookie;

}

function loadCookies()
{
  // Start reusable code
  myCookies = {};
  var kv = document.cookie.split(";");
  for(var id in kv)
  {
    var cookie = kv[id].split("=");
    myCookies[cookie[0].trim()] = cookie[1];
  }
  document.getElementById("user").value = myCookies["myUser"];
  document.getElementById("age").value = myCookies["UserAge"];
}
/*
function cookiesEnabled()
{
  var areCookiesEnabled = (navigator.cookiesEnabled) ? true : false;

  if(typeof navigator.cookiesEnabled == "undefined" && !areCookiesEnabled)
  {
    document.cookie = "myTestCookie";
    areCookiesEnabled = (document.cookie.indexOf("myTestCookie") != -1) ? true : false;
  }
    return areCookiesEnabled;
}


if(cookiesEnabled()) {
  document.getElementById("msg").innerText = "Cookies are enabled";
}
else {
  document.getElementById("msg").innerText = "Cookies are disabled";
}
*/
