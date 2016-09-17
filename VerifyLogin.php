<?PHP
if (!(isset ($_SESSION['Login']))){
	header ("Location: index.php");
} else {
   $UserID = $_SESSION['UserID'];
   $Username = $_SESSION['Username'];
   $UserUserRole = $_SESSION['UserUserRole'];
}

?>