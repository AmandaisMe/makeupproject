<?php

	include 'DBHelper.php';
	$username=$_POST["phone"];
	$password=$_POST["password"];
	$sql="SELECT * from login where phone='$username' and password='$password'";
	$result = query($sql);
	
	//当前 email 不存在，执行插入操作
	if(count($result) < 1){
		echo "{state: false, message: '该用户不存在'}";
	} else {
		echo "{state: true, message: '登录成功！！！'}";

		session_start();

    	
    	echo $_SESSION["login_name"] = $result[0]->phone;
    	echo "location.href='index.html'"; 

	}
	
?>


