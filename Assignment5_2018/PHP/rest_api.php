<?php
// This API was made from modifying the API found at https://www.leaseweb.com/labs/2015/10/creating-a-simple-rest-api-in-php/




// connect to the mysql database
$link = mysqli_connect('localhost', 'root', 'bollux39', 'cs230');
mysqli_set_charset($link,'utf8');



// get the HTTP method, path and body of the request
$method = $_SERVER['REQUEST_METHOD'];
switch($method){
    case "GET":
        $input = explode('/', $_GET['params']);
        $keys = key(get_object_vars(json_decode($input[0]))); //Gets the key from JSON object
        $key = json_decode($input[0])->$keys; break;
    case "POST":
        $input = json_decode(file_get_contents('php://input'), true); break;
    default:
        $input = json_decode(file_get_contents('php://input'), true);
        $key = $input["id"];
}



// escape the columns and values from the input object
$columns = preg_replace('/[^a-z0-9_]+/i','',array_keys($input));
$values = array_map(function ($value) use ($link) {
    if ($value===null) return null;
    return mysqli_real_escape_string($link,(string)$value);
},array_values($input));

// build the SET part of the SQL command
$set = '';
for ($i=0;$i<count($columns);$i++) {
    $set.=($i>0?',':'').'`'.$columns[$i].'`=';
    $set.=($values[$i]===null?'NULL':'"'.$values[$i].'"');
}

// create SQL based on HTTP method
switch ($method) {
    case 'GET':
            $sql = "select * from readinglist WHERE $keys='$key'";break;
    case 'PUT':
        $sql = "update readinglist set $set where id=$key"; break;
    case 'POST':
        $sql = "insert into readinglist set $set"; break;
    case 'DELETE':
        $sql = "delete from readinglist where id=$key"; break;
}

// excecute SQL statement
$result = mysqli_query($link,$sql);

// die if SQL statement failed
if (!$result) {
    http_response_code(404);
    die(mysqli_error());
}

// print results, insert id or affected row count
if ($method == 'GET') {
    $reponse =  '[';
    for ($i=0;$i<mysqli_num_rows($result);$i++) {
        $reponse .= ($i>0?',':'').json_encode(mysqli_fetch_object($result));
    }
    echo $reponse.']';
} elseif ($method == 'POST') {
    echo mysqli_insert_id($link);
} else {
    echo mysqli_affected_rows($link);
}
// close mysql connection
mysqli_close($link);
?>
