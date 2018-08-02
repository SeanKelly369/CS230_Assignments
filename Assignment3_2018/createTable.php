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
$sql = "CREATE TABLE eBook_MetaData (
  id int(6) UNSIGNED NOT NULL,
  creator varchar(40) NOT NULL,
  type varchar(50) NOT NULL,
  title varchar(70) NOT NULL,
  identifier varchar(120) NOT NULL,
  dates varchar(40) NOT NULL,
  language varchar(80) NOT NULL,
  description varchar(800) NOT NULL
)";



if ($conn->query($sql) === TRUE) {
    echo "Table eBook_MetaDataB created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}

$conn->close();
?>
