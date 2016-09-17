<?php
session_start();
include('../Model/LoginModel.php');

$LoginManager = new LoginManager();

$Action = $_POST['action'];

if ($Action = "verifyUser"){
	$Username = $_POST['Username'];
	$Password = $_POST['Password'];
	$Password=md5($Password);

	$LoginManager->verifyUser($Username, $Password);
} 



?>