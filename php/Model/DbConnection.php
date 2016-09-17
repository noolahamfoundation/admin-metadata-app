<?php
$dbhost ="dbhost";  
$dbuser ="dbuser";  
$dbpassword ="dbpwd.";  
$dbname ="dbname";  

// Connect to db server
$Connection = mysql_connect("$dbhost", "$dbuser", "$dbpassword")or die("cannot connect");
// make foo the current db
$db_selected = mysql_select_db("$dbname", $Connection);

mysql_set_charset('utf8',$Connection); 

if (!$db_selected) {
    die ('Can\'t use foo : ' . mysql_error());
}


?>
