<?php
	include 'DBHelper.php';
	$username=$_POST["phone"];
	$password=$_POST["password"];
	$sql="SELECT * from login where phone='$username' and password='$password'";
	query($sql);
	// echo $username;
?>