<?php

	include 'DB.php';
	$username=$_POST['phone'];
	
	$password=$_POST['password'];
	$sql="SELECT * from login where phone='$username' and password='$password'";
	$result = query($sql);
	
	// 当前 email 不存在，执行插入操作
	if(count($result) < 0){
		echo "{state: false, message: '该用户不存在'}";
	} else {
		echo "{state: true, message: '登录成功！！！'}";
		
    	
    	

	}
	
?>


