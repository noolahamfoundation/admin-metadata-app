<?php
include('../Model/UserModel.php');

$Action = $_REQUEST['action'];

$usr = new User("AllUsers");

if ($Action == "selectUsers"){
	$Start = (int) $_POST['start'];
	$Limit = (int) $_POST['limit'];
	$usr->selectUsers($Start, $Limit);
} else if ($Action == "selectUsersAll"){
	$Start = (int) $_POST['start'];
	$Limit = (int) $_POST['limit'];
	$usr->selectUsersAll($Start, $Limit);
} else if ($Action == "loadUser"){
	$UserID = $_POST['UserID'];
	$usr->loadUser($UserID);
} else if ($Action == "insertUpdateUser"){
	$FormAction = $_POST['FormAction'];
	$UserID = $_POST['UserID'];
	$FirstName = $_POST['UserFirstName'];
	$LastName = $_POST['UserLastName'];
	$JobTitle = $_POST['UserJobTitle'];
	$Department = $_POST['UserDepartment'];
	$Username = $_POST['UserUsername'];
	$Password = $_POST['UserPassword'];
	$UserRole = $_POST['UserUserRole'];
	$UserStatus = $_POST['UserUserStatus'];
	$Phone = $_POST['UserPhone'];
	$Email = $_POST['UserEmail'];
	$Mobile = $_POST['UserMobile'];
	$Web = $_POST['UserWeb'];
	$Fax = $_POST['UserFax'];
	$usr->insertUpdateUser($FormAction, $UserID, $FirstName, $LastName, $JobTitle, $Department, $Username, $Password, $UserRole, $UserStatus, $Phone, $Email, $Mobile, $Web, $Fax);

}



?>