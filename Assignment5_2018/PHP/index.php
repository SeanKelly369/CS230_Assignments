<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
  <link rel="shortcut icon" href="favicon.png" type="images/x-icon">
    <title>CS230 Assignment 5</title>

    <script
      src="https://code.jquery.com/jquery-3.3.1.min.js"
      integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
      crossorigin="anonymous"></script>

    <script type="text/javascript" src="./JS.js"></script>

    <link rel="stylesheet" type="text/css" href="style.css">

</head>

<body>
<div align="center">
<h2>Create</h2>
<form id="create">
    Name:<br>
    <input type="text" name="name"><br>
    URL:<br>
    <input type="text" name="url"><br>
    Description:<br>
    <input type="text" name="theDesc"><br>
    <input type="submit" name="submit" value="Create">
</form><br>

<h2>Retrieve</h2>
<form id="retrieve">
    ID: <br>
    <input type="number" name="id"><br>
    <input value="Retrieve ID" type="submit" name="submit"><br>
    Name: <br>
    <input type="text" name="retrieveName"><br>
    <input value="Retrieve Name" type="submit" name="submit" value="Retrieve Name">
</form> <br>
<div id="input_data_table" border="0" text-align="left">
    <table class="cell">
        <tr>
            <th id="cell_id">ID</th>
            <th id="id_name">Name</th>
            <th id="id_url">URL</th>
            <th id="id_desc">Description</th>
            <th id="id_date">Date</th>
        </tr>
    </table>
</div>

<h2>Update</h2>
<form id="update">
    ID:<br>
    <input type="text" name="id"><br>
    Name: <br>
    <input type="text" name="name"><br>
    URL:<br>
    <input type="text" name="url"><br>
    Description:<br>
    <input type="text" name="theDesc"><br>
    <input type="submit" name="submit" value="Update">
</form>

<h2>Delete</h2>
<form id="delete">
    ID: <br>
    <input type="text" name="id"><br>
    <input type="submit" name="submit" value="Delete">
</form>
</div>
<p>The REST API written by Maurits van der Schee, found <a href="https://www.leaseweb.com/labs/2015/10/creating-a-simple-rest-api-in-php/">here</a>, was taken and modified for this application </p>




<form id="create">
<div id="outer-grid">

  <div class="inner-grid">

     <div id="spanner">
     </div>
        <div>Name:</div>
        <div><input id="text" class="text" type="text" name="name"></div>
        <div>URL:</div>
        <div><input id="text" class="text" type="text" name="url"></div>
        <div id="spacer"></div><div id="spacer"></div>
        <div>Description:

        </div>
        <div id="spacer">

          <!-- <input id="text" class="text" type="text" name="theDesc"> -->
        </div>
      <div id="textbox">
        <textarea title="textbox" id="textarea" type="text" name="theDesc"></textarea>
      </div>
      <div>
        <input class="button" type="submit" name="submit" value="Create">

      </div>

      </div>
    <!-- </div> -->
</form>

    <!-- <form id=>

    </form> -->




    <form id="update">
        ID:<br>
        <input type="text" name="id"><br>
        Name: <br>
        <input type="text" name="name"><br>
        URL:<br>
        <input type="text" name="url"><br>
        Description:<br>
        <input type="text" name="theDesc"><br>
        <input type="submit" name="submit" value="Update">
    </form>







    <div id="outer-grid2">
<form id="update">
      <div class="inner-grid">



         <div id="spanner">
         </div>
          <input type="text" name="id">
            <div>Name:</div>
            <div><input id="text" class="text" type="text" name="name"></div>
            <div>URL:</div>
            <input id="text" class="text" type="text" name="url">
            <div id="spacer"></div><div id="spacer"></div>
            <div>Description:

            </div>
            <div id="spacer">
            </div>
          <div id="textbox">
            <textarea id="textarea" type="text" name="theDesc"></textarea>
          </div>
          <div>
            <!-- <input class="button" type="submit" name="submit" value="update"> -->

          </div>
            <input class="button" type="submit" name="submit" value="Update">

          </div>
          </form>
  </div>


</div>

<!-- <form id="retrieve"> -->

  <!-- <div class="inner-grid">

    <div id="spanner"></div>

      <div>ID:

      </div>

    <div id="num">
        <input class="num" type="number" name="id">

      </div>
     <div>Name:</div>
    <div>
      <input id="text" class="text" type="text" name="name">

    </div>
    <div>URL:

    </div>
    <div>
      <input id="text" class="text" type="text" name="url">

    </div>
    <div id="spacer"></div>
    <div id="spacer"></div>
    <div>Description:</div>


    <div id="textbox">
      <textarea title="textbox" id="textarea" type="text" name="theDesc"></textarea>
    </div>




    <div>
      <input class="button" type="submit" name="submit" value="Update">
    </div>
  </div>
</div> -->






<!-- </form> -->







  <!-- <div id="inner-grid">
     <div id="spanner">Delete</div>
    <div>ID No.</div>
    <div id="num"></div>
  </div>

  <div id="inner-grid">
     <div id="spanner">
       <input value="Retrieve Name" class="button" type="retrieve" name="retrieve" value="Retrieve Name">

     </div>
    <div>ID No.</div>
    <div id="num">6
        <input type="number" name="id" value="">
    </div>
  </div>

   <div id="inner-grid2">

     <div id="input_data_table" border="0" text-align="left">
         <table class="cell">
             <tr>
                 <th id="cell_id">ID</th>
                 <th id="id_name">Name</th>
                 <th id="id_url">URL</th>
                 <th id="id_desc">Description</th>
                 <th id="id_date">Date</th>
             </tr>
         </table>
     </div>

  </div> -->

</body>

</html>
