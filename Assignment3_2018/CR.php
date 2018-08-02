 <?php
 $servername = "localhost";
 $username = "root";
 $password = "bollux39";
 $dbname = "cs230";
 ini_set('display_errors', 1);

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection=
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// prepare and bind
if($_POST['action'] == 'submit'){
	$stmt = $conn->prepare("INSERT INTO eBook_MetaData (creator, title, type, identifier, dates, language, description) VALUES (?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("sssssss", $creator, $title, $type, $identifier, $dates, $language, $description);
}
else if($_POST['action'] == 'update'){
	$stmt = $conn ->prepare("UPDATE eBook_MetaData
SET creator = ?, title = ?, type = ?, identifier = ?, dates = ?, language = ?, description = ?
WHERE id = ?;");
$stmt->bind_param("sssssssi", $creator, $title, $type, $identifier, $dates, $language, $description, $id);
$id = $_POST['id'];
}


// set parameters and execute
$creator      = $_POST['creator'];
$title        = $_POST['title'];
$type         = $_POST['type'];
$identifier   = $_POST['identifier'];
$dates        = $_POST['dates'];
$language     = $_POST['language'];
$description  = $_POST['description'];
$stmt->execute();

echo "New records created successfully";
header('location: index.php');

$stmt->close();
$conn->close();
?>
