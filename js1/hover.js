$(document).ready(function(e) {
	
	$(".containerP").mouseenter(function(e) {
		$(this).die("mouseenter");
		$(this).die("mouseleave");
        $(this).children(".details").fadeTo('slow',1);
    });
	
	$(".containerP").mouseleave(function(e) {
		$(this).die("mouseenter");
		$(this).die("mouseleave");
        $(this).children(".details").fadeTo('slow',0);
    });
	
	var navbar=document.getElementById("navbar");
	var windowOneViewHeight = $(window).height() / 100;
	$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		var loc=$(this).attr('href');
		if($(window).width()<=900 && loc==="#events")
		{
			window.location.href="events.html";
			return;	
		}
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
		  if(navbar.style.position=="fixed")
			{       
				if($(window).width()<=900)
				{
					$('html, body').animate({
					  scrollTop: target.offset().top + (windowOneViewHeight * 0)
					}, 1000);
					$("#navbar>ul").toggle(1000);
				}
				else
				{
					$('html, body').animate({
					  scrollTop: target.offset().top
					}, 1000);
				}
		}
		else
		{
			if($(window).width()<=900)
			{
				$('html, body').animate({
					  scrollTop: target.offset().top + (windowOneViewHeight * 0)
					}, 1000);
					$("#navbar>ul").toggle(1000);
			}
			else
			{
				$('html, body').animate({
		          scrollTop: target.offset().top - (windowOneViewHeight * 10)
        		}, 1000);	
			}

		}
		
        return false;
      }
    }
  });
});
	
	$("#menuIcon").click(function(e) {
        $("#navbar>ul").toggle(1000);
    });
});