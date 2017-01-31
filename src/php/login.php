<?php
	include 'DBHelper';
	include 'freelogin.php';

	// // $sql='SELECT * FROM makeup where phone=$_POST["phone"] and password=$_POST["password"]';
	// // if($_POST["phone"]!=$_POST['username']){

	// // }
	// function login($name, $password){
	// 	if($name != "admin"){
	// 		echo "用户名不存在！";
	// 	} else if($password != "123"){
	// 		echo "密码不正确！";
	// 	} else {
	// 		echo "登陆成功!";
	// 	}		
	// }
	// login($_POST["phone"], $_POST["password"]);
	
	// $username=$_POST['username'];
	// $password=$_POST['password'];

	// $check_query=mysqli_query('SELECT * FROM makeup where phone="$username" and password="$password"');
	

	// if($result = mysql_fetch_array($check_query)){
	// 	session_start();

	// 	$_SESSION['username'] = $username;  
    	
	// }else{
	// 	echo '登录失败';
	// }

	if(isset($_POST['submit'])){
	    $phone=$_POST['username'];
	    $pwd=$_POST['password'];
	if($phone=="" || $pws==""){
	    echo '用户名密码不能为空';
	}
	    //在数据库中找到与登陆相同的密码与用户名
	    $sql="select phone,password from makeup where  phone='$phone' and password='$pwd'";
	    $result=mysql_query($sql);
	    //密码与用户名只有一行时，登陆才能成功
	    // 取得结果集中行的数目
	    if(mysql_fetch_array($result)==1){
	    echo "<script>alert('登陆成功');location.href='index.html'</script>";
	    }else{
	            echo "<script>alert('登陆失败');history.go(-1)='login.html'</script>";
	    }
	}else{
	    echo "<script>alert('非法操作');location.href='login.html'</script>";
	}

?>