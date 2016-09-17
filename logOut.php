<?php
session_start(); 
session_unset();
session_destroy();

ob_start();
header("Location: index.php"); // Back to login form
ob_end_flush();

?>