<?php
class dbConnect
{
		function connect()
		{
			$con = mysqli_connect("localhost","root","");
			mysqli_select_db($con,"enigma");
			return $con;
		}
		
		function execute($query)
		{
			return mysqli_query($this->connect(),$query);
		}
}
?>