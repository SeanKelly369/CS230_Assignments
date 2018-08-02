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

// sql to delete a record
$stmt = $conn->prepare("DELETE FROM eBook_MetaData WHERE id = ?");
$stmt->bind_param("i", $id);

$id = $_POST['ID'];

if ($stmt->execute() === TRUE) {
    echo "Record deleted successfully";
} else {
    echo "Error deleting record: " . $conn->error;
}

header("location: index.php");
$conn->close();
?>
