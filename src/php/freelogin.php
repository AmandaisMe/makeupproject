<?php
	include 'DBHelper.php';
	$phoneNumber = $_POST["phone"];
	$password = $_POST["password"];
	$confirm = $_POST["confirm"];

	//判断当前 email 是否已存在数据表中
	$phoneCheck ="select * from login where phone='$phoneNumber'and password='$password'" ;
	$result = query($phoneCheck);
	//当前 email 不存在，执行插入操作
	echo $result;
	if(count($result)==0){

		$sql = "insert into login(phone, password, confirm) values('$phoneNumber', '$password', '$confirm')";
		// echo $sql;
		$excute = excute($sql);

		if($excute){
			
		} else {
			echo "{state: false, message: '插入失败！！！'}";
		}
	} else {
		echo "{state: false, message: ' 已被注册！！！'}";
	}
?>