<?php
include_once('class/class.dbConnect.php');
$con = new dbConnect();
if(isset($_POST['id']) && isset($_POST['name']) &&isset($_POST['branch']) &&isset($_POST['year']) &&isset($_POST['phone']) &&isset($_POST['email']) &&isset($_POST['college']) &&isset($_POST['event']))
{
	$id=$_POST['id'];
	$name=$_POST['name'];
	$branch=$_POST['branch'];
	$year=$_POST['year'];
	$phone=$_POST['phone'];
	$email=$_POST['email'];
	$college=$_POST['college'];
	$event=$_POST['event'];
	
	$query ="Select * from student where email='$email'";
	$result=$con->execute($query);
	$row=mysqli_fetch_array($result);
	if($row==NULL)
	{
		$query ="Insert into student(id,name,branch,year,contact,email,college,event) values('$id','$name','$branch','$year','$phone','$email','$college','$event') ";
		$result=$con->execute($query);
		if($result!=1)
		{
			echo 'error';
		}
		else
		{
			echo 'done';
			$to = $email;
         $subject = "Enigma 8.0 Registration";
         
         $message = "<h1>Welcome ".$name."</h1>";
         $message .= "<p>Thank You for your registration.</p>";
		 $message .= "</br><p>See you at Enigma 8.0, November 11 to 12, 2016</p>";
		 $message .= "</br><p>Cheers!!!";
		 $message .= "</br>Team Enigma</p>";
         
         $header = "From: ENIGMA 8.0 <help@ugienigma.org> \r\n";
//         $header .= "Cc:afgh@somedomain.com \r\n";
         $header .= "MIME-Version: 1.0\r\n";
         $header .= "Content-type: text/html\r\n";
         
         $retval = mail ($to,$subject,$message,$header);
		}
	}
	else
	{
		echo 'exists';
	}
}
else
{
	echo 'error';
}
?>