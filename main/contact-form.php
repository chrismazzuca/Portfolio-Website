<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<title>Thank You!</title>
</head>
<body style="text-align: center;padding:20px 0;">
	<?php

		$name = $_POST['name'];
		$email = $_POST['email'];
		$message = $_POST['message'];
		$submit = $_POST['submit'];
		
		$formcontent=" From: $email \n
		Name: $name \n
		Email Address: $email \n
		Message: $message";
		
		$recipient = "christopher.mazzuca@outlook.com";
		$subject = "Portfolio Website Inquiry";
		$mailheader = "From: $email \r\n";
		mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
		
	?>
	
	
</body>
</html>