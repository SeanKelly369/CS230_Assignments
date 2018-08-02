 <?php
 $servername = "localhost";
 $username = "root";
 $password = "bollux39";
 $dbname = "cs230";
 ini_set('display_errors', 1);

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// sql to create table
$sql = "CREATE TABLE readinglist (
  id int(6) not null,
  name varchar(80) NOT NULL,
  URL varchar(80) NOT NULL,
  theDate date NOT NULL,
  theDesc text(500) NOT NULL
)";

// CREATE TABLE Persons (
//     ID int NOT NULL,
//     LastName varchar(255) NOT NULL,
//     FirstName varchar(255),
//     Age int,
//     PRIMARY KEY (ID)
// );


if ($conn->query($sql) === TRUE) {
    echo "readinglist created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}

$conn->close();
?>
