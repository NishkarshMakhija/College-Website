var header=document.getElementById("header");
var navbar=document.getElementById("navbar");

var navbarHeight=navbar.offsetHeight;
var headerHeight=header.offsetHeight;

header.style.height=screen.height - navbarHeight;

function initParallax()
{
	if(window.pageYOffset > headerHeight && $(window).width()>900)
	{
		navbar.style.position="fixed";
		navbar.style.top="0";
		//navbar.style.backgroundColor="#000";
		//alert("Hello");
	}
	else
	{
		navbar.style.position="relative";
		//navbar.style.backgroundColor="rgba(0,0,0,1)";
	}
	
//	bg.style.top=-(window.pageYOffset/10)+"px";
}

window.addEventListener("scroll",initParallax);
