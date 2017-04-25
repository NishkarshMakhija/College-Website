var top1;
var left;
var index1;
$(document).ready(function(e) {
	
	$(window).keydown(function(e) {
        if(e.which==27 && $("#main").is(":visible"))
		{
			close1();
		}
		if(e.which==8)
		{
			if($("#main").is(":visible"))
			{
				e.preventDefault();
				close1();
			}	
		}
    });
	
    $(".cube").click(function(e) {
		
		top1=$(this).offset().top;
		left=$(this).offset().left;
		var id1=$(this).attr('id');
		//alert(index1);
		//$(this).css("transform","rotateY(180deg)");
		//$("#main").css("background","#FFF");
		//$("#main").css("top",$(this).offset().top);
		$("#main").css("left",$(this).offset().left);
		
		
			
		//setTimeout(function(){$("#main").css("visibility","visible")},1000);
		
		setTimeout(function(){
			$("#main").fadeIn(500);
			$("#main").animate({width:760},{duration:500,queue:false});
			$("#main").animate({height:955},{duration:500,queue:false});
			//$("#main").animate({top:$(".cube").first().offset().top},{duration:500,queue:false});
			$("#main").animate({left:$(".cube").first().offset().left},{duration:500,queue:false});
		},0);
		
		setTimeout(Content(id1),5000);
		//setTimeout(window.location(window.location.hostname+window.location.pathname+"#events"),5000);
    });
	
	$("#close").live("click",function()
	{
		$("#main").animate({width:160},{duration:500,queue:false});
		$("#main").animate({height:160},{duration:500,queue:false});
		//$("#main").animate({top:top1},{duration:500,queue:false});
		$("#main").animate({left:left},{duration:500,queue:false});
		$("#main").fadeOut(500);
	});
	
	$("#content a").live("click",function(){
		innerContent($(this).attr('id'));
		$("#content a").each(function(index, element) {
            $(element).attr('class','');
        });
		$(this).attr('class','selected');
	});
});

function close1()
{
	$("#main").animate({width:160},{duration:500,queue:false});
		$("#main").animate({height:160},{duration:500,queue:false});
		//$("#main").animate({top:top1},{duration:500,queue:false});
		$("#main").animate({left:left},{duration:500,queue:false});
		$("#main").fadeOut(500);
}

function Content(e)
{
	var html;
	switch (e)
	{
		case '1':
	html='<span id="close"><img src="img/close.png" style="width:30px; height:30px; top:0%;" /></span>'+
	'<div id="abc" style="width:97%; height:auto; position:absolute; background:#00B0B3; text-align:center;">'+
            '<ul>'+
            	'<li><a class="selected" id="1">Apogee</a></li>'+
                '<li><a id="1.1">Internet of Things</a></li>'+
				'<li><a id="1.2">Battle Of Breadboards</a></li>'+
            '</ul>'+
            '</div>'+
            '<div id="innerContent">'+
				
            '</div>';
			break;
			
		case '2':
	html='<span id="close"><img src="img/close.png" style="width:30px; height:30px; top:0%; "  /></span>'+
	'<div id="abc" style="width:97%; height:auto; position:absolute; background:#00B0B3; text-align:center;">'+
            '<ul>'+
            	'<li><a class="selected" id="2">Megastructures</a></li>'+
            '</ul>'+
            '</div>'+
            '<div id="innerContent">'+
				
            '</div>';
			break;
			
		case '3':
	html='<span id="close"><img src="img/close.png" style="width:30px; height:30px; top:0%; "  /></span>'+
	'<div id="abc" style="width:97%; height:auto; position:absolute; background:#00B0B3; text-align:center;">'+
            '<ul>'+
            	'<li><a class="selected" id="3">Hurdle Mania</a></li>'+
				'<li><a id="3.1">Maze Runner</a></li>'+
				'<li><a id="3.2">Wild Soccer</a></li>'+
				'<li><a id="3.3">Aqua Bots</a></li>'+
            '</ul>'+
            '</div>'+
            '<div id="innerContent">'+
				
            '</div>';
			break;
			
		case '4':
	html='<span id="close"><img src="img/close.png" style="width:30px; height:30px; top:0%; "  /></span>'+
	'<div id="abc" style="width:97%; height:auto; position:absolute; background:#00B0B3; text-align:center;">'+
            '<ul>'+
            	'<li><a class="selected" id="4">Appzire</a></li>'+
            '</ul>'+
            '</div>'+
            '<div id="innerContent">'+
				
            '</div>';
			break;
			
		case '5':
	html='<span id="close"><img src="img/close.png" style="width:30px; height:30px; top:0%; "  /></span>'+
	'<div id="abc" style="width:97%; height:auto; position:absolute; background:#00B0B3; text-align:center;">'+
            '<ul>'+
            	'<li><a class="selected" id="5">Codex</a></li>'+
				'<li><a id="5.1">Code Hunt</a></li>'+
            '</ul>'+
            '</div>'+
            '<div id="innerContent">'+
				
            '</div>';
			break;
			
		case '6':
	html='<span id="close"><img src="img/close.png" style="width:30px; height:30px; top:0%; "  /></span>'+
	'<div id="abc" style="width:97%; height:auto; position:absolute; background:#00B0B3; text-align:center;">'+
            '<ul>'+
            	'<li><a class="selected" id="6">Ad-Maniac</a></li>'+
            '</ul>'+
            '</div>'+
            '<div id="innerContent">'+
				
            '</div>';
			break;
			
		case '7':
	html='<span id="close"><img src="img/close.png" style="width:30px; height:30px; top:0%; "  /></span>'+
	'<div id="abc" style="width:97%; height:auto; position:absolute; background:#00B0B3; text-align:center;">'+
            '<ul>'+
            	'<li><a class="selected" id="7">Quiz Mania</a></li>'+
            '</ul>'+
            '</div>'+
            '<div id="innerContent">'+
				
            '</div>';
			break;
			
		case '8':
	html='<span id="close"><img src="img/close.png" style="width:30px; height:30px; top:0%; "  /></span>'+
	'<div id="abc" style="width:97%; height:auto; position:absolute; background:#00B0B3; text-align:center;">'+
            '<ul>'+
            	'<li><a class="selected" id="8">Junk Yard</a></li>'+
            '</ul>'+
            '</div>'+
            '<div id="innerContent">'+
				
            '</div>';
			break;
			
		case '9':
	html='<span id="close"><img src="img/close.png" style="width:30px; height:30px; top:0%; "  /></span>'+
	'<div id="abc" style="width:97%; height:auto; position:absolute; background:#00B0B3; text-align:center;">'+
            '<ul>'+
            	'<li><a class="selected" id="9">Be an Entrepreneur</a></li>'+
				'<li><a id="9.1">Prastuti</a></li>'+
            '</ul>'+
            '</div>'+
            '<div id="innerContent">'+
				
            '</div>';
			break;
			
		case '10':
	html='<span id="close"><img src="img/close.png" style="width:30px; height:30px; top:0%; "  /></span>'+
	'<div id="abc" style="width:97%; height:auto; position:absolute; background:#00B0B3; text-align:center;">'+
            '<ul>'+
            	'<li><a class="selected" id="10">Mini United Nation</a></li>'+
            '</ul>'+
            '</div>'+
            '<div id="innerContent">'+
				
            '</div>';
			break;
			
		case '11':
	html='<span id="close"><img src="img/close.png" style="width:30px; height:30px; top:0%; "  /></span>'+
	'<div id="abc" style="width:97%; height:auto; position:absolute; background:#00B0B3; text-align:center;">'+
            '<ul>'+
            	'<li><a class="selected" id="11">Solo &amp; Duet dance</a></li>'+
				'<li><a id="11.1">Group dance</a></li>'+
            '</ul>'+
            '</div>'+
            '<div id="innerContent">'+
				
            '</div>';
			break;	
			
		case '12':
	html='<span id="close"><img src="img/close.png" style="width:30px; height:30px; top:0%; "  /></span>'+
	'<div id="abc" style="width:97%; height:auto; position:absolute; background:#00B0B3; text-align:center;">'+
            '<ul>'+
            	'<li><a class="selected" id="10">Alankaar</a></li>'+
            '</ul>'+
            '</div>'+
            '<div id="innerContent">'+
				
            '</div>';
			break;
		
		case '13':
	html='<span id="close"><img src="img/close.png" style="width:30px; height:30px; top:0%; "  /></span>'+
	'<div id="abc" style="width:97%; height:auto; position:absolute; background:#00B0B3; text-align:center;">'+
            '<ul>'+
            	'<li><a class="selected" id="13">Band War</a></li>'+
				'<li><a id="13.1">Acoustic</a></li>'+
            '</ul>'+
            '</div>'+
            '<div id="innerContent">'+
				
            '</div>';
			break;
			
		case '14':
	html='<span id="close"><img src="img/close.png" style="width:30px; height:30px; top:0%; "  /></span>'+
	'<div id="abc" style="width:97%; height:auto; position:absolute; background:#00B0B3; text-align:center;">'+
            '<ul>'+
            	'<li><a class="selected" id="14">Soliloquy</a></li>'+
				'<li><a id="14.1">Nukkad</a></li>'+
				'<li><a id="14.2">Theatre</a></li>'+
            '</ul>'+
            '</div>'+
            '<div id="innerContent">'+
				
            '</div>';
			break;
			
		case '15':
	html='<span id="close"><img src="img/close.png" style="width:30px; height:30px; top:0%; "  /></span>'+
	'<div id="abc" style="width:97%; height:auto; position:absolute; background:#00B0B3; text-align:center;">'+
            '<ul>'+
            	'<li><a class="selected" id="15">T-Shirt Painting</a></li>'+
				'<li><a id="15.1">Face Painting</a></li>'+
				'<li><a id="15.2">Rangoli</a></li>'+
				'<li><a id="15.3">Tattoo Making</a></li>'+
				'<li><a id="15.4">Flashes</a></li>'+
				'<li><a id="15.5">Mehandi</a></li>'+
            '</ul>'+
            '</div>'+
            '<div id="innerContent">'+
				
            '</div>';
			break;
			
		case '16':
	html='<span id="close"><img src="img/close.png" style="width:30px; height:30px; top:0%; "  /></span>'+
	'<div id="abc" style="width:97%; height:auto; position:absolute; background:#00B0B3; text-align:center;">'+
            '<ul>'+
            	'<li><a class="selected" id="16">Counter Strike 1.6</a></li>'+
				'<li><a id="16.1">Need For Speed</a></li>'+
				'<li><a id="16.2">Mini Militia</a></li>'+
            '</ul>'+
            '</div>'+
            '<div id="innerContent">'+
				
            '</div>';
			break;
			
		case '17':
	html='<span id="close"><img src="img/close.png" style="width:30px; height:30px; top:0%; "  /></span>'+
	'<div id="abc" style="width:97%; height:auto; position:absolute; background:#00B0B3; text-align:center;">'+
            '<ul>'+
            	'<li><a class="selected" id="16">Rusties</a></li>'+
            '</ul>'+
            '</div>'+
            '<div id="innerContent">'+
				
            '</div>';
			break;
			
		
		default:
			html='';
			break;
	}
	
	$("#content").html(html);
	innerContent(e);
		
}

function innerContent(id)
{
	var html='';
	switch (id)
	{
		case '1':
			html='<p>Have you ever imagined a partially filled water bottle flying over the range of 100 meters or more? Have you felt confused about that enthusiastic pressure, curious thrust and inquisitive range of flight of that simple water bottle? If you did, then this is the accurate place to launch your bottle of thought and innovation.'+
			'</br></br>Here’s the APOGEE for you. A one-of-a-kind recreational event, it welcomes you to participate and witness the festival of flight.'+
'</br></br><b>Task:</b></br>'+
'Design and construct a water propelled rocket pressurized with air in accordance with the constraints which will be told further in the workshop.'+
'</br></br><b>Rules:</b></p><ul>'+
'<li>There will be a maximum of 2 members in a team.</li>'+
'<li>One will be holding the launcher while the other will pressurize the water bottle with Pump provided.</li>'+
'<li>Launcher and the water bottle rocket must be prepared by the team members only.</li>'+
'<li>Range (in meters) and time of flight (in seconds) will be measured by organizers.</li>'+
'<li>Launching angle has to be decided by the participating team.</li>'+
'<li>Rocket has to be launched from a fixed launch zone on the ground.</li>'+
'<li>The first point of contact will be considered as the landing point.</li>'+
'<li>The arena will be given on the day of workshop to be organized.</li>'+
'<li>After the workshop participants will be given a 2 day tenure to fabricate their rocket and compete.</li>'+
'</ul>'+

'</br><p><b>Venue:</b> UCEM ground in front of Auditorium</br>'+
'<b>Date:</b> 11<sup>th</sup> November 2016</br>'+
'<b>Time:</b> 11:00 a.m.</br></br></p>'+

'<p><b>Contact Details:</b>'+
'</br>Chandrabhan Singh 9648763710'+
'</br>Awaneesh kumar 7388832932'+
'</br>Shubham kashyap 9005377270'+
'</p>';
break;
			
case '1.1':
html='<p>In this event there will be a workshop on internet of things (IOT) for all its participants, they will then use that knowledge for the competition which will follow it.The group(maximum 4 members) will itself select a topic for themselves and make a working Model/Project and inform it to the heads of that event and register it. Groups will present their projects on the day of the event.'+
'</br></br><b>ROUND1:</b></p><ul>'+
'<li>Exhibition of the Project.</li>'+
'<li>Idea Submission and Brief Description about the Project.</li></ul>'+

'</br><p><b>Venue:</b> UIT, B-Block, Conference Hall</br>'+
'<b>Date:</b> 12<sup>th</sup> November 2016</br>'+
'<b>Time:</b> 10:00 a.m.</p>'+

'<p><b>FINAL ROUND:</b></p><ul>'+
'<li>The selected Groups will  have to present a ppt about their Project which includes all the essential details about it including equipments used, coding, protocols used, etc as well as their working.</li>'+
'<li>Live working of the Project at the time of competition.</li>'+
'<li>Question-Answers during the ppt presentation.</li></ul>'+
'<center>(Questions will be only put by the judges)</center>'+

'</br><p><b>Venue:</b> UIT, B-Block, Conference Hall</br>'+
'<b>Date:</b> 12<sup>th</sup> November 2016</br>'+
'<b>Time:</b> 2:00 p.m.'+

'</br></br><b>NOTE:</b> The decisions of all officials regarding any change in these rules and/or the conduct of the event will be final.'+
'</br></br><p><b>Contact Details:</b>'+
'</br>Hemansh Srivastava (+91 8004928707)'+
'</br>Yash Thakur (+91 9198218094)'+
'</p>';
break;

case '1.2':
html='<p><b>Team size:</b> 3-4 members</br></br>'+
'This is an event which involves complex circuit analysis and the skills to perform and execute the theoretical laws practically, using analog devices and components. As the name suggests, it is an event which comprises of knowledge about circuit making on the breadboard along with the know how of basic analog components.</br></br>'+
'The event comprises of <b>3 rounds.</b></br></br>'+
'First round is an <b>elimination round</b> where each team would be given M.C.Q'+'apos;'+'s. Fixed no. of teams with the best scores would advance to the second round.</br>'+

'</br><b>Venue:</b> UCER D-Block DLD Lab</br>'+
'<b>Date:</b> 11<sup>th</sup> November 2016</br>'+
'<b>Time:</b> 12:00 p.m.</br>'+

'</br>In the second round the teams would be given a circuit and are required to verify Kirchoff&apos;s law practically as well as theoretically and match the values. Fixed No. of teams with the lowest clocked time would advance to the 3rd round.</br>'+

'</br><b>Venue:</b> UCER D-Block DLD Lab</br>'+
'<b>Date:</b> 11<sup>th</sup> November 2016</br>'+
'<b>Time:</b> 2:00 p.m.</br>'+

'</br>The third round is the Debugging round. The teams are required to have the knowledge of 555 TIMER IC (pin config), different types of diodes, transistors, Op-Amps, and other basic analog components. The team with the lowest clock time and max fault identification would be the winner.</br></br>'+

'<b>Venue:</b>UCER D-Block DLD Lab</br>'+
'<b>Date:</b> 11<sup>th</sup> November 2016</br>'+
'<b>Time:</b> 3:00 p.m.</br></br>'+

'So come on guys ...... if u have the love for wires .... this event is for you. If you got the brain circuit then beat the board.</br></br>'+
'<b>Rules:</b></br></p><ul>'+
'<li>Each team would comprise of atmost 2 members.</li>'+
'<li>Further information about each round would be provided to the participants on the day of the event.</li>'+
'<li>Teams are allowed to bring scientific calculator for calculations.</li>'+
'<li>The rules are subjected to change without prior notice.</li>'+
'<li>The decision of the Event Manager would be considered to be final.</li>'+
'<li>The participants are requested to make their registration before the start of the event.</li></ul>'+
'</br></br><p><b>Contact Details:</b>'+
'</br>Anurag Mishra(+91 8355042035)'+
'</br>Dhirendra Pratap Patel(+91 9795483620)'+
'</p>';
break;

case '2':
html='<p><b>About Event:</b></br>'+
'Participants will be able to know their innovative and technical skill.</br>'+
'<b>Event structure:</b></br><ul>'+
'<li><b>Round 1</b></br></li>'+
'Participants in a group of 2-3 have to submit a drawing of any Megastructure on a chart paper along with they have to give a short IQ test consisting of 10 questions in 10 mins.'+

'</br><b>Venue:</b> UCER Survey Lab</br>'+
'<b>Date:</b> 11<sup>th</sup> November 2016</br>'+
'<b>Time:</b> 11:00 a.m.</br>'+

'<li><b>Round 2</b></li>'+
'Filtered groups through Round 1 will be going through a Quiz based on Megastructures through PPt slides.'+

'</br><b>Venue:</b> UCER D-Block Room Number 004</br>'+
'<b>Date:</b> 11<sup>th</sup> November 2016</br>'+
'<b>Time:</b> 2:00 p.m.</br>'+

'<li><b>Round 3</b></li>'+
'1. Selected teams will be given popsicle sticks, card board, fevicol and threads from which they have to make a BRIDGE on which load testing would be done.</br>'+
'2. Bridge carrying max load will be declared winner.'+

'</br><b>Venue:</b> Geotech Lab, UCER</br>'+
'<b>Date:</b> 12<sup>th</sup> November 2016</br>'+
'<b>Time:</b> 10:00 a.m.</br></ul>'+

'<p><b>Note:</b></p></br><ul>'+
'<li>Group must not exceed 3 members</li>'+
'<li>Only limited raw materials would be provided.</li>'+
'<li>Outside materials not allowed.</li>'+
'<li>Drawing on chart paper should only be made of pencil.</li></ul>'+

'</br></br><p><b>Contact Details:</b>'+
'</br>Amrit Upadhyay (+91 7054241955)'+
'</br>Ajay Kumar Yadav(+91 9415631097)'+
'</br>Abhishek Kumar Singh(+91 8808843259)'+
'</br>Suresh Nagar(+91 9044700963)'+
'</p>';
break;

case '3':
html='<p>You have a love for robotics and playing with robot is your hobby then this event is specially made for you'+
'</br></br>Come here and show your love for robots by building a one and battle with other robots for the ultimate glory.'+
'</br></br><b>ROUND 1:</b></p><ul>'+
'<li>In the first round, single robot will run in the arena.</li>'+
'<li>There will be two laps in round 1.</li>'+
'<li>Qualifiers for the second round will be selected on time basis.</li></ul>'+

'</br><p><b>Venue:</b> UCER Ground in front of A Block</br>'+
'<b>Date:</b> 11<sup>th</sup> November 2016</br>'+
'<b>Time:</b> 12:00 p.m.</br></br></p>'+

'</br><p><b>ROUND 2:</b></p><ul>'+
'<li>In the second round, again single robot will run in the arena.</li>'+
'<li>There will be three laps in round 2.</li></ul>'+

'</br><p><b>Venue:</b> UCER Ground in front of A-Block</br>'+
'<b>Date:</b> 11<sup>th</sup> November 2016</br>'+
'<b>Time:</b> 2:00 p.m.</p>'+

'</br></br><center><p><b>Terms and Conditions</b></p></center><ul>'+
'<li>Maximum dimension of robot will be 25*25*15(cm) Both wired/wireless robots are allowed.</li>'+
'<li>Pulling of wire is not allowed.</li>'+
'<li>Maximam 4 members are allowed to each team during event.</li>'+
'<li>Only 2 hand touch will be allowed for each round during the event. (Each touch make +15sec penalty.)</li></ul>'+
'</br></br><center><p><b>Causes for Disqualifications</b></p></center>'+
'<p>Use of abusive words, Pulling of wire, Failing to meet dimensional condition, Disobeying rules and regulation, Unnecessary Quarrelling</p>'+
'</br></br><center><p><b>ARENA PICTURE</b></p></center>'+
'<img src="img/arena.jpg" style="width:100%;" />'+
'</br></br><p><b>Contact Details:</b>'+
'</br>Ritesh Verma (+91 8896226804)'+
'</br>Avinash Dubey (+91 8953363231)'+
'</br>Rishabh Mishra (+91 9452784351)'+
'</p>';
break;

case '3.1':
html='<p>In near future every thing is going to be handled by robots. Robots will be every where from our school, gyms, colleges, industry, homes, etc.'+
'</br></br>Being a future engineers it is our responsibility to help in the development of these robots.</p>'+

'</br><p><b>Venue:</b> Infront of UCER Library</br>'+
'<b>Date:</b> 11<sup>th</sup> November 2016</br>'+
'<b>Time:</b> 2:00 p.m.</br></br></p>'+

'<center><p><b>OBJECTIVE</b></p></center><p>'+
'The objective of this contest is to build a robot that can follow a black line on a white background, without losing the line, and navigating several 90 degree turns.Only two human intervention is allowed which adds 15seconds to your final time.The robot has to complete the course in the shortest period of time while accurately tracking the course line from start to finish wins.</p>'+
'<center><p><b>DESCRIPTION</b></p></center><ul style="list-style=decimal;">'+
'<li><b>Number of members in a group:4</b></li>'+
'<li><b>Maximum robot weight:500gm</b></li>'+
'<li><b>Size and Weight Limits:</b></li>'+
'<b>Robot Dimensions:</b>W:25cm x L:25cm x H:7cm</br>'+
'Dimensional and weight limits for robots shall be strictly enforced. Robots must have passed inspection prior to competing.'+
'<li><b>Course Time:</b></li>'+
'Time is measured from the time the robot crosses the starting line until the time it crosses the finish line. A robot is deemed to have crossed the line when the backward most wheel, track of the robot contacts or crosses over the line.'+
'<li><b>Timekeeping:</b></li>'+
'Time shall be measured by an electronic device  or a judge with a stopwatch, based on the availability of equipment. In either case the recorded time shall be final.'+
'<li><b>Autonomous Control:</b></li>'+
'Once a robot has crossed the starting line it must remain fully autonomous, or it will be disqualified.'+
'<li><b>Arena Edges:</b></li>'+
'A robot that wanders off of the arena surface will be disqualified. A robot shall be deemed to have left the arena when any wheel or track has moved completely off the arena surface.'+
'<li><b>Losing the Line:</b></li>'+
'Any robot that loses the line course must reacquire the line at the point where it was lost, or at any earlier (e.g. already traversed) point.'+
'<li><b>Second Attempt:</b></li>'+
'Any robot that loses the line course and fails to reacquire it will be allowed a single reattempt. The robot must start the course again from the beginning, and if it loses the line course on its second attempt it will be disqualified. '+
'<li><b>Power of Officials:</b></li>'+
'The decisions of all officials regarding these rules and the conduct of the event will be final.'+
'<li><b>Course Specifications:</b></li>'+
'The line shall be a black, 1/2" wide  traversing the arena from end to end. It can have crossovers (e.g. places where the line crosses itself).  The line course may have 1 or more sharp right-angle, but no angle will be greater than 90 degrees.</ul>'+
'</br><p><b>Contact Details:</b>'+
'</br>Prasoon (+91 9125608870)'+
'</br>Avinish Kumar Sharma (+91 8546056676)'+
'</br>Sumit Kumar Singh (+91 7703038919)'+
'</p>';
break;

case '3.2':
html='<p>Wild soccer is the ultimate battle between wild robots on soccer field. The robots has to show the tackling skill to score goals. Each team has to come with three bots (wired is allowed). Team with the most number of goals wins.</p>'+

'</br><p><b>Venue:</b> UCER Ground in front of A Block</br>'+
'<b>Date:</b> 11<sup>th</sup> November 2016</br>'+
'<b>Time:</b> 12:00 p.m.</br></p>'+

'</br></br><center><p><b>General Rules</b></p></center><ul>'+
'<li>Team will be divided into groups, each facing a random opponent in a group match.</li>'+
'<li>The winning teams from the group round would enter subsequent rounds of semifinals and finals.</li>'+
'<li>Each team can have a maximum of 6 participants.</li>'+
'<li>A team may consist of students from different colleges.</li>'+
'<li>Referee’s decision will be final and binding to all.</li></ul>'+
'<center><p><b>Arena</b></p></center><ul>'+
'<li>The soccer field size would be 5m x 3m. The goal post will be placed outside the 5m mark.</li>'+
'<li>Height of goal post will be 0.3m. The ball will be simple smooth plastic ball with weight in gms (negligible) and diameter 15 cm.</li>'+
'<li>The width of the goal post is 0.8m.</li>'+
'<li>Note- All the dimensions are subjected to +15% change.</li></ul>'+
'<center><p><b>Gameplay</b></p></center><ul>'+
'<li>A maximum of 3 bots can be inside the arena form any team.</li>'+
'<li>Any team should not block the entire goal post, there should be 30cm space at all time.</li>'+
'<li>The team which scores maximum goal in the match would be declared as the winner of the match.</li>'+
'<li>The total playing time between two teams would be of 10 minutes, divided into two half of 5 minutes each.</li>'+
'<li>Only by the means of hitting any bot can fight with any other</li>'+
'<li>Goal will be considered only if the ball crosses the goal posts.</li>'+
'<li>In case of tie in the group matches. NO extra time or penalty shootout would be given.</li>'+
'<li>In case of tie during knock-out matches, firstly extra time of 3mins will be given, and even after that if there is still a tie then there will be penalty shootout.</li>'+
'<li>The break time would be 5 minutes.</li>'+
'<li>Any team lifting and carrying the ball or any other unfair means will be disqualified.</li>'+
'<li>Any part of the bot should not cross the goal line during complete match.</li>'+
'<li>1 minute time out is allowed by both the team in each half.</li>'+
'<li>Claiming is allowed but none should stop his game till referee stops the game.</li></ul>'+
'<center><p><b>Warning</b></p></center><ul>'+
'<li>Touching (any kind of interruption/ human intervention) the bot w/o asking referee.</li>'+
'<li>In case of any discrepancy referee’s decisions would be final.</li></ul>'+
'<center><p><b>Bots Specifications</b></p></center><ul>'+
'<li>The robot should not be more than 35cm x 25cm x 12cm (length x breadth x height).</li></ul>'+
'<center><p><b>Power Supply</b></p></center><ul>'+
'<li>Each team have to come with there own extension board.</li></ul>'+
'</br><p><b>Contact Details:</b>'+
'</br>Amritansh Ranjan (+91 9807734735)'+
'</br>Ankit Mishra (+91 8808428309)'+
'</p>';
break;

case '3.3':
html='<p>This competition is to check the ability of the candidate to Engineer a Robot that can swim, grab the objects and reach the destination properly within the specified arena and specified time.</br>'+

'</br><p><b>Venue:</b> UIP Ground</br>'+
'<b>Date:</b> 11<sup>th</sup> November 2016</br>'+
'<b>Time:</b> 2:00 p.m.</br></br></p>'+

'<p><b>PROBLEM STATEMENT:</b></p><ul>'+
'<li>Prepare a floating robot which can be propelled forward so as to complete the race course avoiding obstacles in minimum time.</li>'+
'<li>Robot must have a mechanism of drag & goal balls/objects and pick and place them respectively at their respective goal-posts in the arena.</li></ul>'+
'</br></br><p><b>GAMEPLAY</b></br>'+
'The play would consist of three rounds.</br>'+
'<b>Round 1</b></br>'+
'Just complete the course of arena in specified time to show the proper working of your bot.</br></br>'+

'<b>Round 2</b></p><ul>'+
'<li>You have to grab the table-tennis ball where each colour has its specified positive points and reach the finish point crossing hurdles in a specified time.</li>'+
'<li>Negative points will also be counted for technical and other stated failures by Event Heads.</li></ul>'+
'</br><p>Finally 2 teams will reach the finals that will be in a face to face challenege.</p>'+

'</br></br><p><b>Round 3 – ( Final Round ) </b></br>'+
'The level of difficulty and rules will be disclosed at the time of event. </br></br>'+

'<b>BOT SPECIFICATIONS and RULES</b></p><ul>'+ 
'<li>Robot cannot be constructed using readymade Lego kits or any readymade mechanism. But you can make use of readymade gear assemblies. Violating this clause will lead to the disqualification of the robot.<li>'+
'<li>Bot may be wired or wireless; if wired, connecting wire should be at least 10m. More than one team members can control the robot at a time; more than one control mechanisms can be used.<li>'+
	
'<li>A team may consist of maximum four members, members should be registerd candidate of Enigma 8.0<li>'+

'<li>Any team damaging the arena with the bot or anyway at any point of time in the game would be disqualified at that instant.<li>'+

'<li>Decision of the organizers shall be treated as final and binding to all.<li></ul>'+
'</br><p><b>Contact Details:</b>'+
'</br>Gaurav Prajapati (+91 9198386238)'+
'</br>Anay Pratap Singh(+91 8382979942)'+
'</br>Ankush Pandey (+91 7081508439)'+
'</br>Ashish Kumar Sharma (+91 7753822110)'+
'</p>';
break;

case '4':
html='<p>Appzire is a quest to bring out the coder in you. The first ever Appzire at Enigma 8.0 promises you the most amazing opportunity to give your ideas recognition, as teams via prize and glory. We believe in open-technology, so you are free to develop your app using the technology of your choice, be it Android or iOS, Windows 8/10 metro apps or even web app. The sky is the limit.'+
'</br></br><b>Team Size:</b> 1-4 members</br>'+
'Open for students of all academic years</br>'+
'A team may include members belonging to same or different academic years(1st, 2nd,3rd or 4th).</br>'+
'</br><b>Venue:</b> UCEM</br>'+
'</br><b>Theme Suggestion:</b></p><ul>'+
'<li>Women Security</li>'+
'<li>Health</li>'+
'<li>Education</li></ul>'+

'</br><p><b>Requirements:</b></p><ul>'+
'<li>Smart room or class or any place where a projector is available (based upon number of participations)</li></ul>'+

'</br><p><b>Round 1: Idea and Code Submission</b></p><ul>'+
'<li>Think of a small idea that can bring a great change.</li>'+
'<li>Submit your idea along with the final code on the following email address-  appzire@ugienigma.org</li></ul>'+
'</br><p><b>Last Date of Submission: 11- Nov- 2016</b></p>'+

'</br><p><b>The theme or idea of your app will be shortlisted on the basis of its</b></p><ul>'+
'<li>Uniqueness</li>'+
'<li>Feasibility</li>'+
'<li>Usefulness</li>'+
'<li>Efficiency</li>'+
'<li>Fascination</li></ul>'+
'</br><p>Please ensure that your idea is your intellectual property. Stealing of idea or codes will eventually lead to your disqualification. '+
'</br>You will proceed to the next and the final round only if your idea is chosen to be the promising idea that has a properly working code.'+
'</br>Number of teams that would qualify in the final round: '+
'</br>Proposed number of teams is 10 but it may vary according to the number of participations.'+

'</br><p><b>Round 2: </b></p><ul>'+
'<li>Shortlisted teams will demonstrate  their app through powerpoint presentation before the judges.</li>'+
'<li>Question-Answer session with the judges.</li></ul>'+
'</br><p><b>Judging Criteria:</b></p><ul>'+
'<li>Originality of idea and code</li>'+
'<li>Level of creativity</li>'+
'<li>Emphasis given on minute details</li>'+
'<li>Proper functioning of the app</li>'+
'<li>Absence of errors</li></ul>'+

'</br><p><b>Venue:</b> UCEM, A-Block, Room Number 301</br>'+
'<b>Date:</b> 12<sup>th</sup> November 2016</br>'+
'<b>Time:</b> 12:00 p.m.</br></p>'+

'</br><p><b>Contact Details:</b>'+
'</br>Abhijeet Singh (+91 9936322698)'+
'</br>Ekta (+91 8808885899)'+
'</p>';
break;

case '5':
html='<p><b>Individual Participation.</b><br></br>'+
'Codex is the annual Online Programming Contest of United Group of Institutions, organized by the Enigma team.</br></br>'+
'It is a prestigious programming contest where each coder whacks his brain to code solutions to the given problems.</br></br>'+
'It is the place where optimization and proficiency matters, skills matter, hard work matters, trying till the very end matters and winning loads of swags matter!'+
'</br></br><b>EVENT DETAILS</b>'+
'</p><ul>'+
'<li>This will be an one round event.</li>'+
'<li>It will consist 10 questions based on the concepts of Data structures, String manipulation,  Algorithms and other topics too.</li>'+
'<li>The difficulty of questions will increase after each question.</li>'+
'<li>The time limit of this event is 120 minutes (2 hours).</li>'+
'<li>Each participant will participate individually.</li>'+
'<li>The result will be decided on the basis of the time taken in completion of all problems and the accuracy of the code in compliance with the correctness of the test cases.</li>'+
'</ul>'+

'</br><p><b>Date:</b> 11<sup>th</sup> November 2016'+
'</br></br><b>Venue:</b> UCER D-Block First Floor'+
'</br></br><b>Time:</b> 11:00 a.m.'+

'</br></br><b>Importannnt Note:</b></br></br>'+
'All the participants have to register at given link</br>'+
'<a style="color:blue;" href="https://doselect.com/institute/united-group-of-institutions">https://doselect.com/institute/united-group-of-institutions</a>'+
'</br></br><b>Contact Details:</b>'+
'</br>Raghvendra 8577888516'+
'</br>Nishkarsh Makhija 8765322283'+
'</p>';
break;

case '5.1':
html='<p><b>Individual Participation.</b></br></br></p>'+
'<ul>'+
'<li>It will be a single round competition.</li>'+
'<li>Contains 10 questions 2 hours.</li>'+
'<li>All questions with increasing difficulty level.</li>'+
'<li>Questions are created using concept of  C programming.</li>'+
'<li>Some codes are missing, some are incorrect, some are organized in wrong manner (question contains combination of all such error).</li>'+
'<li>One who solve max no of problem in minimum time will be declared winner.</li>'+
'</ul>'+

'</br><p><b>Date:</b> 11<sup>th</sup> November 2016'+
'</br></br><b>Venue:</b> UCER D-Block, First Floor'+
'</br></br><b>Time:</b> 11:00 a.m.'+

'</br></br><b>Importannnt Note:</b></br></br>'+
'All the participants have to register at given link</br>'+
'<a style="color:blue;" href="https://doselect.com/institute/united-group-of-institutions">https://doselect.com/institute/united-group-of-institutions</a>'+
'</br></br><b>Contact Details:</b>'+
'</br>Gaurav Kesharwni 9506330407'+
'</br>Suraj Chaurasia 7388455387'+
'</br>Swasti Jain 8953466927'+
'</br>Nishkarsh Makhija 8765322283'+
'</p>';
break;

case '6':
html='<p><b>Team Size:</b> Group of 5 members</br></br>'+
'<b>Round(s):</b> 2 (Logo Designing & Advertising Round)</br></br>'+
'<b>-Logo designing:</b></br>'+
'In this stage participants have to bring their own <b>A4 sheets</b> and other designing tools (pencil and colors etc.) for drawing the logo of the product  they wish to advertise.'+
'<b>Time Limit:</b>  30 minutes (for making the logo)</br>'+
'Only 3 participants from a team are allowed for logo designing.</br>'+
'</br><b>Originality</b> - the entry should be creative, innovative, and the original work of the team entering the contest.</br>'+
'</br><b>Aesthetic Quality</b> - the entry should command attention, display visual balance and color coordination, and contain elements which work together for a unified and appealing design.</b>'+
'</br></br><b>NOTE:</b> Product you choose to advertise must be your own. Advertising an existing product will lead to team disqualification.</br></br>'+

'<p><b>Venue:</b> UIM Smart Room number 003</br>'+
'<b>Date:</b> 11<sup>th</sup> November 2016</br>'+
'<b>Time:</b> 2:00 p.m.</br></br>'+

'<b>-Advertising round:</b></br>'+
'Teams qualifying the Round I will enter in the advertising round.</br>'+

'You can advertise your product in given three ways </br>'+
'1. Self-made Video</br>'+
'<b>Time Limit:</b> Max 2 minutes.</br>'+
'2. Nukkad Natak:</br>'+
'<b>Time Limit:</b> Max 5 minutes.</br>'+
'3. Skit</br>'+
'<b>Time Limit:</b> Max 5 minutes</br>'+

'</br><b>Venue:</b> Conference Hall, UIM MBA</br>'+
'<b>Date:</b> 12<sup>th</sup> November 2016</br>'+
'<b>Time:</b> 2:00 p.m.'+

'</br></br><b>Contact Details:</b>'+
'</br>Arundhati Ranjan (+91 9565323074)'+
'</br>Somya (+91 9554054344)'+
'</p>';
break;

case '7':
html='<p><b>Number of Rounds:</b> 3</br></br>'+
'<b>ROUND 1:</b> Aptitude test. All participants have to take a test individually.</br>'+
'<b>Venue:</b> UIP Seminar hall (ground floor)</br>'+
'<b>Date:</b> 11<sup>th</sup> November 2016.</br>'+
'<b>Time:</b> 1:00 p.m.</br></br>'+
'<b>ROUND 2:</b> (qualified participants of Mega Round 1 will be teamed up of at most 3) This contains four sub rounds:</p><ul>'+
'<li>Viva voice (GK+ entertainment)</li>'+
'<li>Picture Projection (identify the famous personality and answer the related question)</li>'+
'<li>Logo (identify the correct logo)</li>'+
'<li>Videoing (2.30sec video will be shown and questions related to the video will be asked)</li></ul>'+
'</br><p><b>ROUND 3:</b> Rapid fire round-final round. In this round each teams will be given 90 seconds to answer as many questions as possible. Questions will be asked on the respective category. The category has to be chosen by the teams. The categories are:</p><ul>'+
'<li>Technical</li>'+
'<li>Management </li>'+
'<li>Pharmacy</li></ul>'+
'</br><p><b>Venue:</b> UIT Induction hall(A-block ,1st  floor)</br>'+
'<b>Date:</b> 12th November 2016</br>'+
'<b>Time:</b> 11:00 a.m.</br>'+

'</br><b>SYLLABUS FOR ROUND 1</b></p><ul>'+
'<li><b>Quantitative aptitude and reasoning.</b> </li><ul>'+
'<li>Number system, ratio and proportion, permutation and combination, alligations, profit and loss, partnership, data sufficiency, time and work, time and distance..</li>'+
'<li>Syllogism, puzzles, direction question, cubes, blood relations, nonverbal reasoning.</li></ul>'+
'<li><b>Verbal Ability</b></li><ul>'+
'<li>Para jumbles, sentence correction, fill in the blanks (simple grammar).</li></ul></ul>'+

'</br><p><b>SYLLABUS FOR ROUND 2</b></p><ul>'+
'<li><b>Sub round 1. Viva voice.</b></br>'+
'General knowledge- sports, world (famous places, architectures, universities across the world), famous personalities (inventions, biographies), politics, entertainment, humanities-art. </li>'+
'<li><b>Sub round 2. Picture projection.</b></br>'+
'Pictures of famous personalities, historical buildings and monuments, etc.</li>'+
'<li><b>Sub round 3. Logo round.</b></br>'+
'American cars, American TV shows, international organizations, football and cricket, world famous organizations, well-known companies.</li>'+
'<li><b>Sub round 4. Videoing.</b></br>'+
'An informative video will be shown. Questions will be asked relating to the video.</li></ul>'+

'</br><p><b>SYLLABUS FOR ROUND 3</b></p><ul>'+
'<li>Technical – covers basics of CS, ME, EC, EN branches.</li>'+
'<li>Management- covers basics of management course.</li>'+
'<li>Pharmacy- covers basics of pharmacy course.</li></ul>'+

'</br></br><p><b>Contact Details:</b>'+
'</br>Parul Gupta (+91 9565658496)'+
'</br>Akansha Patel (+91 8004575893)'+
'</br>Satyam Shukla(+91 9807284915)'+
'</p>';
break;

case '8':
html='<p><b>Team size:</b> 5 members</br></br>'+
'Junkyard Wars is the event which bids a team to show their engineering skills to create best out of rest.</br></br>'+
'<b>Description:</b></br>'+
'In this event, the teams will be provided with a pile of junk and they will have to fabricate some working model using items from that junk pile within stipulated time. It will test the skills to create something from limited and useless materials in limited time.'+
'</br></br><b>RULES : To Create Something Innovative</b></p><ul>'+
'<li>Maximum five members are allowed in a team.</li>'+
'<li>Your challenge is to build a desire model from limited materials.</li>'+
'<li>You will have to design a working model.</li>'+
'<li>Team should carry require junk & wastes with them.</li>'+
'<li>You have to complete your task in given time.</li></ul>'+
'</br></br><p><b>Maximum time to complete the task :</b>45 minutes</br>'+

'<b>Venue :</b> UIM</br>'+
'<b>Date :</b> 11<sup>th</sup> November 2016</br>'+
'<b>Reporting time :</b> 11:00 a.m.</br></br>'+


'<b>Judging Criteria:</b> Marks will given on following points.</p><ul>'+
'<li>Model (Working)</li>'+
'<li>Demonstration Based</li>'+
'<li>Application of model</li>'+
'<li>Others specific Quality</li></ul>'+
     
'</br></br><p><b>Note:</b> Team member should present in reporting  time, otherwise team will be disqualified.</p>'+
'</br></br><p><b>Contact Details:</b>'+
'</br>Babita Kanojia (+91 9450296570)'+
'</br>Shivam Shukla (+91 9415177745)'+
'</p>';
break;

case '9':
html='<p>Business is a game, played for fantastic stakes, and you are in a competition with experts. If you want to win, you have to learn to be the master of the game.</br></br>'+
'This is for those who have a plan to sell their practical, rational, viable and master ideas. Create a business plan and make a presentation based on it, showing its purpose, need, stats and usability.</br></br>'+
'Come up with your aspirations to impress the jury and convince them that the society needs what you have thought of.</br></br>'+
'<b>Type of event:</b> Group</br></br>'+
'<b>Team size:</b> 2 to 4</br></br>'+
'<b>EVENT RULES</b></p><ul>'+
'<li>It is a team event.</li>'+
'<li>The team needs to formulate a business plan.</li>'+
'<li>The team has to make a Power Point presentation of that plan stating its need, features, future, viability and necessity.</li>'+
'<li>The presentation can be no longer than 5 minutes.</li>'+
'<li>After your presentation, the judges can ask questions based on your plan.</li>'+
'<li>The questions can be related to the content, information sources or any relevant issue in context of your presentation.</li>'+
'<li>A satisfactory question handling will fetch you points and not answering (or irrelevant/ non satisfactory response) can fetch you negatives also.</li></ul>'+
'</br><p><b>JUDGING CRITERIA</b></p><ul>'+
'<li>Innovativeness of business plan.</li>'+
'<li>Executive summary, product and services.</li>'+
'<li>Market opportunity and marketing/sales.</li>'+
'<li>Team and operation.</li>'+
'<li>Financial risks and sensitivity.</li>'+
'<li>Feasibility and source of finance.</li></ul>'+

'</br><p><b>Venue :</b> UIM</br>'+
'<b>Date :</b> 12<sup>th</sup> November 2016</br>'+
'<b>Presentation Submission Time :</b> 10:00 a.m. - 11:00 a.m.'+
'</br><b>Presentation Time :</b> 12:00 p.m. - 1:00 p.m.</p>'+

'</br></br><p><b>Contact Details:</b>'+
'</br>Syed Aale Mustafa (+91 7379219112)'+
'</br>Aman Kumar (+91 9452322332)'+
'</p>';
break;

case '9.1':
html='<center><p><b>Get ready for the Presentation Battle!!!!!!</b></p></center>'+
'<center><p><b>Recharge yourself for the &quot;Tongue and Brain Contest&quot;</b></p></center>'+
'<p><b>Topic Bucket:</b></p><ul>'+
'<li>India, from Today to the Future.</li>'+
'<li>Our Perishing Culture.</li>'+
'<li>E-Learning: The Pinch-Hitter to Classroom Learning.</li>'+
'<li>Entrepreneurs V/s Managers: Who influences the &quot;Evolution&quot;??</li></ul>'+

'</br><p><b>Rules & Regulation:</b></p><ul>'+
'<li>Participation could be done Individually or in teams of up to 4 members.</li>'+
'<li>There will be only one round in the event i.e. the Presentation round.</li>'+
'<li>The participants need to choose any one topic of their own choice from the Topics Bucket.</li>'+
'<li>They will need to prepare the Slides beforehand and will have to present them on the finale day.</li>'+
'<li>The Time Allotted will be 10 Minutes. Of which 8 mins for presentation and 2 mins for interjections.</li></ul>'+

'</br><p><b>Judging Criteria:</b></br>'+
'Evaluation will be done on the following parameters:</p><ul>'+
'<li>Theme execution & innovative thinking.</li>'+
'<li>Proper presentation.</li>'+
'<li>Presentation skills.</li>'+
'<li>Question and Answers.</li></ul>'+

'</br><p><b>Venue:</b> UIM MBA Smart Room number 001</br>'+
'<b>Date:</b> 11<sup>th</sup> November 2016</br>'+
'<b>Time:</b> 2:00 p.m.</br></p>'+

'</br></br><p><b>Contact Details:</b>'+
'</br>Ritesh Singh (+91 8932920827)'+
'</br>Garima Singh (+91 9580797859)'+
'</p>';

break;

case '10':
html='<p>In this event, the participants will be delegating for a country. The countries will be assigned 3 days before the actual event by the Event Heads, so the participant can do the necessary research.</br></br>'+
'<b>Round 1</b></br>'+
'In the first round, candidates will be given a country related topic day before the event through online and offline notices.</br>'+
'</br>The topic provided to the candidates has to be nicely prepared and then presented before the panel on day 1. </br>'+
'</br>Depending on the participation this round can be a individual or pair round, but judgement will be done individual performance.</br>'+
'</br>Selected students will qualify for the finale.</br></br>'+

'<b>ROUND 1: JAM – JUST A MINUTE</b></br>'+
'Candidates will be given a topic on the spot and will have to speak on that for one minute. Every individual will have different topic provided by the team.</br>'+
'Results (qualifiers for the round2) will be announced within the first hour of the completion of round 1.</br></br>'+


'<p><b>Venue:</b> UIM MBA ,Conference Hall</br>'+
'<b>Date:</b> 11<sup>th</sup> November 2016</br>'+
'<b>Time:</b> 2:00 p.m.</br></br>'+

'<b>Round 2:</b></br>'+
'This will be purely mock parliament. The qualifiers on the day1 will be distributed in the team of 3 and will be given a country.</br>'+
'</br>On day 2 they will hve to defend their respective countries . The judgement will again be individual and each team will get 8 mins to speak and question.</br></br>'+

'<b>ROUND 2: MOCK PARLIAMENT</b></br>'+
'Day 1 qualifiers will be divided in the team of 3 and a country will be provided to them. Here in round2, they’ll have to speak for their respective issues of the country and will have to defend their countries. Every team will be given 10 minutes.</br></br>'+


'<b>NOTE</b></p><ul>'+
'<li>Participants are required to wear western business attire.</li>'+
'<li>Participants are required to use Parliamentary Language throughout the whole session.</li></ul>'+

'</br><p><b>Venue:</b> UIM MBA Hall</br>'+
'<b>Date:</b> 12<sup>th</sup> November 2016</br>'+
'<b>Time:</b> 10:00 a.m.</p>'+

'</br></br><p><b>Contact Details:</b>'+
'</br>Archana Pal (+91 9936615278)'+
'</br>Neha Singh (+91 9506871552)'+
'</br>Akash Saxena (+91 9838344464)'+
'</p>';
break;

case '11':
html='<p><b>Rounds:</b> 2</br>'+
'<b>Performance time limit:</b> 3 minutes</br></br>'+

'<b>Audition:</b> All the participants will go through an elimination round from which best participants will be selected for the next round.</br></br>'+
'<b>Venue:</b> UIM Seminar Hall, UIM</br>'+
'<b>Date:</b> 10<sup>th</sup> November 2016</br>'+
'<b>Time:</b> 1:30 p.m. onwards</br></br>'+
'<b>Final:</b> The qualified participants will perform in the final round where they will be judged by our faculty judges and external judge (if any).</br></br>'+
'<b>Venue:</b> UCEM Auditorium</br>'+
'<b>Date:</b> 11<sup>th</sup> November 2016</br>'+
'<b>Time:</b> 12:30 p.m. - 1:30 p.m.</br></br>'+
'<b>Note:</b> If there is a tie between two participants there will be an extempore performance by both the participants and the song will be given by the judges. And then final winner will be decided.</br></br>'+
 
'<b>Judging Criteria:</b></p><ul>'+
'<li>Choreography level</li>'+
'<li>Energy level</li>'+
'<li>Synchronization (for duet)</li>'+
'<li>Expressions</li>'+
'<li>Stage utilization</li>'+
'<li>Innovativity in song incorporation into performance</li></ul>'+

'</br><p><b>Rules</b></p><ul>'+
'<li>Props can be used by the participants</li>'+
'<li>Participants should need to bring their own song,dresses,props. No participant would be entertained if they won&apos;t come with proper preparation </li>'+
'<li>Song should not exceed the time limit else he/she whould be disqualified</li>'+
'<li>Song selection must be a decent one</li></ul>'+

'</br></br><p><b>Contact Details:</b>'+
'</br><b>SOLO:</b>'+
'</br>Ayushi Bisarya (+91 9125630221)'+
'</br>Priyanka Singh (+91 8795107249)'+
'</br>Rhea Jaiswal (+91 7388114865)'+
'</br><b>DUET:</b>'+
'</br>Aakriti kesarwani (+91 7054665808)'+
'</br>Saurabh Shukla (+91 9721138150)'+
'</p>';
break;

case '11.1':
html='<p><b>Entries:</b> Group(maximum 10 members)</br>'+
'<b>Rounds:</b> 2</br></br>'+
'<b>Audtition:</b> Participating groups are required to perform on  any song of their personal choice. The event heads will select 5 -7 best groups.</br></br>'+
'<b>Venue:</b> UIM Seminar Hall, UIM</br>'+
'<b>Date:</b> 10<sup>th</sup> November 2016</br>'+
'<b>Time:</b> 1:30 p.m. onwards</br></br>'+

'<b>Faceoff:</b> The selected groups will send their best performer to challenge their opponent. And the better one will compete with the next group.</br></br>'+
'<b>Venue:</b> UCEM Auditorium</br>'+
'<b>Date:</b> 11<sup>th</sup> November 2016</br>'+
'<b>Time:</b> 1:30 p.m. - 2:30 p.m.</br></br>'+

'<b>Format:</b></br>       A vs. B & C vs. D</br>'+   
                            '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B vs D</br>'+
                                '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D</br></br>'+
'The best performer&apos;s group will win.</br></br>'+
'<b>Judging Criteria: </b></p><ul>'+
'<li>Sense of Choreography</li>'+
'<li>Energy level</li>'+
'<li>Synchronization</li>'+
'<li>Expressions</li>'+
'<li>Stage utilization</li>'+
'<li>Innovativity in song incorporation into performance</li>'+
'<li>For every faceoff the team member should be different each time</li></ul>'+

'</br><p><b>Rules</b></p><ul>'+
'<li>Props can be used by the participants</li>'+
'<li>Participants should need to bring their own song,dresses,props. No participant would be entertained if they won&apos;t come with proper preparation </li>'+
'<li>Song should not exceed the time limit else he/she whould be disqualified</li>'+
'<li>Song selection must be a decent one</li></ul>'+

'</br></br><p><b>Contact Details:</b>'+
'</br>Waqar Afzal (+91 7755895023)'+
'</br>Pooja Ojha'+
'</p>';
break;

case '12':
html='<p><b>Enigma Idol(Solo and Duet)</b></br></br>'+
'<b>1<sup>st</sup> Round:</b>Contestant are required to prepare a song for the audition of round 1 beforehand. The song can be sung in any language. Basically the performance will be judged.</br>'+
'Judges will select best 20 participants for the next round.</br></br>'+
'<b>Date:</b> 10<sup>th</sup> November 2016</br>'+
'<b>Venue:</b> UCER, D-Block Conference Hall</br>'+
'<b>Timing:</b> 1:30 p.m. onwards</br></br>'+
'<b>2<sup>nd</sup> Round :</b>Contestant are required to prepare for the song that will be given to then at that time. Keen judgement will be made on singing ability. 10 contestant will be selected for final round.</br></br>'+
'<b>3<sup>nd</sup> Round :</b>This is the finale round. The shortlisted contestant will sing their final song on the stage on the final day.</br></br>'+
'<b>Venue:</b> UIP Grounnd</br>'+
'<b>Date:</b> 11<sup>th</sup> November 2016</br>'+
'<b>Time:</b> 11:00 a.m.</br></br>'+
'<b>Judging Criteria:</b></p><ul>'+
'<li>Judgment is based on the voice quality (Rhythm, Voice modulation, Pitch) and the vocal abilities of the singer.</li>'+
'<li>No consideration shall be given to accompaniments or karaoke.</li>'+
'<li>Synchronization among the team members (for duet & group).</li></ul>'+
'</br></br><p><b>Contact Details:</b>'+
'</br>Anshika (+91 73998909745)'+
'</br>Siddharth Bhatt (+91 8090266641)'+
'</br>Shrishti Chandra (+91 9792275350)'+
'</p>';
break;

case '13':
html='<p>Sound reverberates as a personification of form. In fact this very same sound is the one linked with the chakras or focal points of our body. The reason some mantras or recitation impacts our body is because of the sounds made. While sound is a formation of vibrations and frequency, chromestesia is a form of synaesthesia that evokes a colour. It inculcates all kinds of sensory design along with sound itself. Emotions are condemnations made to a story told to us through music. Participants are asked to depict one or more emotion(s) translating from the brief of &quot;Band Wars&quot;</br>'+

'</br><b>GUIDELINES</b></br>'+
'Languages that can be used in the performance are restricted to Hindi and English. A performance than involves a fusion of music from different generations in both the languages mentioned is permitted. A performance that involves a fusion of music from different generations in either one of the languages mentioned is permitted as well. One band per college may register for the competition. The band can have a minimum of 3 members and a maximum of 6.</br>'+
'</br><b>RULES &amp; REGULATIONS</b></br>'+
'Each band will get a performance time of 8 minutes + 3 minutes to set up. Drum kit will be provided. Guitars,Keyboards and any other instruments that may be used for the performance must be brought along by the participants. Decision of the Jury is final. Sound and Lights will be switched off if the band exceeds the given time limit.</br>'+

'</br><b>SCREENING CRITERIA</b></br>'+
'Co-ordination among band members while performing and their ability to portray the theme of the convention in their arrangement of songs will be primary criteria for judgement during the screening process.</br>'+

'</br><b>JUDGEMENT CRITERIA</b></br>'+
'Bands will be judged based on stage presence, the arrangement of songs, musical talent and crowd involvement on the day of the event. Vulgarity and any offensive behaviour will result in immediate disqualification. Abusive or offensive language in the lyrics will lead to disqualification. Discrimination against any race, language, religion or person will lead to disqualification.</br>'+


'</br><b>Team Size:</b> Minimum members should be 3 (consisting Singer, Guitarist, Drummers) & maximum should be 8.</br></br>'+

'<b>Time Limit:</b> 5-7minutes.</br>'+
'<b>Winner:</b> One</br>'+

'<b>Venue :</b> Main Stage, UIT ground</br>'+
'<b>Date :</b> 12<sup>th</sup> November 2016</br>'+
'<b>Time :</b> 1:00 p.m.</br>'+

'</br><b>Contact Details:</b>'+
'</br>Himanshu Sharma (+91 7844941560)'+
'</br>Akshat Sinha (+91 9454724786)'+
'</p>';
break;

case '13.1':
html='<p><b>Event Description:</b></br>'+
'An instrumental is a musical composition or recording without lyrics, or singing, although it might include some inarticulate vocal input; the music is primarily or exclusively produced by musical instruments.</br></br>'+

'So, here participants have to play any of the instrument in which he/she is specialized, it can be Guitar, Keyboard, Drum, Flute etc.</br>'+
'<b>Note:</b> Participants cannot sing while they are performing.</br></br>'+

'<b>Entries:</b></br>'+
'Individual participation.</br></br>'+

'<b>Rounds:</b> 2(Elimination & Finale)</br>'+
'<b>Elimination round: </b>2-3 minutes solo performance.</br>'+
'<b>Finale;</b></p><ul>'+
'<li>3 minutes of solo performance.</li>'+
'<li>It should be a fresh act.</li></ul>'+
'<p><b>Venue:</b> UCER D block</p>'+
'</br><p><b>Judging Criteria:</b></p><ul>'+
'<li>Ability of the participants.</li>'+
'<li>Participants command on his instrument.</li>'+
'<li>Improvisation, ingenuity will attain extra weightage.</li></ul>'+

'<p></br><b>Venue :</b> Main Stage, UIT ground</br>'+
'<b>Date :</b> 12<sup>th</sup> November 2016</br>'+
'<b>Time :</b> 1:00 p.m.</br></p>'+

'</br><p><b>Contact Details:</b>'+
'</br>Kartikey Gupta (+91 8726592563)'+
'</br>Preeti (+91 8604114800)'+
'</p>';
break;

case '14':
html='<ul><li>An act of speaking one’s thoughts aloud.</li>'+
'<li>Basically monologue or speech.</li></ul>'+
'<p><b>Team Size:</b> Solo</br></br>'+
'The event will be divided into two rounds:</br>'+
'<b>Round 1:</b> Elimination</p><ul>'+
'<li>Participants need to perform solo act.</li>'+
'<li>Theme of the act to be decided by the participant on his/her own.</li></ul>'+
'<p><b>Time Limit:</b> 2 minutes</br>'+
'<b>Venue: </b>UIP Grounnd</br></br>'+
'<b>Round 2:</b> Finals</br>'+
'Selected participant of round 1 has to perform an extended version of elimination round or a fresh act.</br>'+
'<b>Note:</b> Props can be used.</br>'+
'<b>Time Limit:</b> 4 minutes</br>'+
'<b>Winner:</b> One</br></br>'+

'<b>Venue :</b> UTC Audi(Open Area),UCEM</br>'+
'<b>Date :</b> 12<sup>th</sup> November 2016</br>'+
'<b>Time :</b> 12:00 p.m.</br></br>'+

'<b>Judging Criteria:</b></p><ul>'+
'<li>Acting strength.</li>'+
'<li>Screenplay and Overall Impact.</li>'+
'<li>Stage presence, Audience appeal.</li></ul>'+

'</br></br><p><b>Note:</b> In all the categories of event tamasha, points to be taken care of are language and dresses should be related to the theme of the act. Judgement will be done by keeping the above mentioned points in mind.</p>'+


'</br><p><b>Contact Details:</b>'+
'</br> Prateek kesarwani (+91 8896912220)'+
'</br>Himanshu Mudgal  (+91 9648557140)'+
'</p>';
break;

case '14.1':
html='<p>Basically a nukkad natak has to be performed by the participants with theme decided by themselves.</br></br>'+
'<b>Team Size:</b> Duet or Group(8-10)</br></br>'+
'<b>Round(s):</b> One</br></br>'+
'<b>Time Limit:</b> 5-8 minutes</br></br>'+
'<b>Winner:</b> One team</br></br>'+
'<b>Note:</b></p><ul>'+
'<li>Script of the act should be original, not copied. If found guilty, would result in disqualification of the team.</li>'+
'<li>Vulgarity is strictly prohibited.</li>'+
'<li>Points will be given on the basis acting strength of team & innovation.</li></ul>'+

'</br></br></br><p><b>Note:</b> In all the categories of event tamasha, points to be taken care of are language and dresses should be related to the theme of the act. Judgement will be done by keeping the above mentioned points in mind.</p>'+

'</br><p><b>Venue :</b> UTC Audi, UCEM</br>'+
'<b>Date :</b> 12<sup>th</sup> November 2016</br>'+
'<b>Time :</b> 1:00 p.m.</br></p>'+

'</br><p><b>Contact Details:</b>'+
'</br>Sudhanshu Shukla (+91 9198591921)'+
'</br>Utkarsh Srivastava (+91 9648618288)'+
'</p>';
break;

case '14.2':
html='<p>Participants need to perform a Comedy Act or a Stage play (duet or group).</br></br>'+
'<b>Team Size:</b> Duet or Group (8-10 Actors).</br></br>'+
'<b>Round(s):</b> One</br></br>'+
'<b>Time Limit:</b> 3-6 minutes.</br></br>'+
'<b>Date:</b> 12<sup>th</sup> November 2016</br></br>'+
'<b>Venue:</b> UTC Auditorium, UCEM </br></br>'+
'<b>Time:</b> 12:00 p.m.</br></br>'+
'<b>Winner:</b> One Duet or Group</br></br>'+ 
'<b>Judging Criteria:</b><ul>'+
'<li>Script of the act should be original, not copied. If found guilty, would result in disqualification of the team.</li>'+
'<li>Vulgarity is strictly prohibited.</li>'+
'<li>Points will be given on the basis acting strength of team & innovation.</li></ul></p>'+

'</br></br></br><p><b>Note:</b> In all the categories of event tamasha, points to be taken care of are language and dresses should be related to the theme of the act. Judgement will be done by keeping the above mentioned points in mind.</p>'+

'</br><p><b>Contact Details:</b>'+
'</br>Yugant Pandey (+91 8756329520 ,+91 7236056703)'+
'</br>Shivam Keshari (+91 8957666196)'+
'</p>';
break;

case '15':
html='<p>T shirt painting is a event involved in presenting ideas and themes on the t-shirts through paints. The colors used are water/fabric/markers. The entries are judged based on ones creativity, perception & innovations.</br></br>'+

'<b>Rules & Guidelines</b></p><ul>'+

'<li>The participants must report to the venues before 15min. Of the assigned time for the 	competition.</li>'+
'<li>There should be a two(2) membered team and the team may not exceed more than that.</li>'+
'<li>Participants must carry their own t-shirts (blank) and painting products ,i.e., colors,markers,paintbrushes.</li>'+
'<li>Themes will be given on the spot.</li>'+
'<li>Time limit is bounded by 45 minutes.</li></ul>'+

'</br><p><b>Screening Criteria</b></p><ul>'+

'<li>Judges decision will be final and binding.</li>'+
'<li>The entries are judged based on ones creativity, perception & innovations.</li></ul>'+

'</br><p><b>Themes</b></p><ul>'+

'<li>Nature</li>'+
'<li>Local Views</li>'+
'<li>Abstracts (figure based quotaions, geometric designs, any idea )</li>'+
'<li>Imaginary Characters.</li></ul>'+

'</br><p><b>Venue:</b> UIM FUGS, 1<sup>st</sup> Floor</br>'+
'<b>Date:</b> 12<sup>th</sup> November 2016</br>'+
'<b>Time:</b> 10:00 a.m.</p>'+

'</br><p><b>Contact Details:</b>'+
'</br>Chetana Gaur (+91 9956538168)'+
'</br>Shriya Gupta'+
'</p>';
break;

case '15.1':
html='<p>Face painting is the process or application of facial paint to an individual’s face. The purpose of face painting is to be able to disguise oneself through art. Using face paint allows a person to become any character of choice. The face is painted with a design using paint brushes and the cosmetic paint. Sheets and walls gets too main stream so its time to try your painting skill on the face of your team mate.</br></br>'+
'<b>GUIDELINES</b></br>'+
'All the face painters must have full paid registration fee in order to participate in the competition. Models (the team mate) will be the responsibility of the competitor. Competitors may not use photos or drawings to refer to while painting. All designs will be painted free hand. A complete set of the face painting competition rules will be made available to the competitors at the competition registration table.</br></br>'+

'<b>RULES AND REGULATIONS:</b></p><ul>'+
'<li>The competitors and models will be checked in the competition area before 15mins. Of the assigned time for the competition.</li>'+
'<li>There should be only two members in a team, the team may not exceed more than that.</li>'+
'<li>Competitors should carry their painting products from home.</li>'+
'<li>Competitors are not allowed to take or give any painting products with any other team.</li>'+
'<li>Topic will be given on the spot.</li>'+
'<li>Time limit is bounded by 60minutes.</li></ul>'+

'</br><p><b>SCREENING CRITERIA:</b></p><ul>'+
'<li>Participants will be judged on the basis of creativity, innovation and design.</li>'+
'<li>Decision of the judges will be final and binding.</li></ul>'+
'</br><p><b>AWARDS:</b></br>'+
'There will be only First (1st ) and Second (2nd )place medal which should be awarded to the winning competitor. </p>'+
'</br><p><b>TOPIC:</b></p><ul>'+
'<li>Nature</li>'+
'<li>Masks</li>'+
'<li>Neon/UV</li>'+
'<li>Underwater world</li>'+
'<li>Tribal design</li></ul>'+

'</br><p><b>Venue:</b> UIM FUGS, 2<sup>nd</sup> Floor</br>'+
'<b>Date:</b> 12<sup>th</sup> November 2016</br>'+
'<b>Time:</b> 2:00 p.m.</p>'+

'</br><p><b>Contact Details:</b>'+
'</br>Khushbu Patwa (+91 9198755593)'+
'</br>Vartika Srivastava (+91 9455306045)'+
'</p>';
break;

case '15.2':
html='<p><b>Team size:</b>Maximum 5 members</br></br>'+
'<b>Time:</b> 45 minutes</br></br>'+
'<b>Round(s):</b> One</br></br>'+
'<b>Detail:</b></p><ul>'+
'<li>Participants will be provided some social issues from which they have to choose one and they have to make a simple or rangoli.</li>'+
'<li>Colors will be provided by the co-ordinators at the event.</li>'+
'<li>After completing rangoli, judgement will be done and questions will be asked from each team by the respective judges.</li></ul>'+
'<p><b>Judging Criteria:</b></p><ul>'+
'<li>Creativity as well  as Originality.</li>'+
'<li>Extra weightage to Theme incorporation & Description.</li></ul>'+

'</br><p><b>Venue:</b> UIM FUGS, 1<sup>st</sup> Floor</br>'+
'<b>Date:</b> 12<sup>th</sup> November 2016</br>'+
'<b>Time:</b> 11:00 a.m.</p>'+

'</br><p><b>Contact Details:</b>'+
'</br>Anjali (+91 9565796890)'+
'</br>Pragya (+91 7860472699)'+
'</p>';
break;

case '15.3':
html='<p><b>Team Size:</b> 2 members</br></br>'+
'<b>Time:</b> 45 minutes</br></br>'+
'<b>Round(s):</b> One</br></br>'+
'<b>Detail:</b></p><ul>'+
'<li>Participants will be given 45 minutes for making tattoo.</li>'+
'<li>They can use maximum 3 colours for making it. Colours may be Sketch colour pens,glitter pens.</li>'+
'<li>Participants have to bring their own material.</li>'+
'<li>Once 30 minutes are over then judgement will be done. Judges will ask two question from each team about the tattoo ( like what their tattoo signifies etc.)</li></ul>'+
'</br><p><b>Themes for Tattoo making:</b></p><ul>'+
'<li>Women Empowerment.</li>'+
'<li>Education.</li>'+
'<li>Engineering.</li>'+
'<li>Colourful view of nature(like greenary).</li>'+
'<li>Musical instruments (like tunes on guitar,piano).</li>'+
'<li>Tri-colour tribute.(patriotism)</li></ul>'+

'<p><b>Judging Criteria:</b></p><ul>'+
'<li>Creativity & Originality.</li>'+
'<li>Description.</li></ul>'+

'</br><p><b>Venue:</b> UIM FUGS, 2<sup>nd</sup> Floor</br>'+
'<b>Date:</b> 12<sup>th</sup> November 2016</br>'+
'<b>Time:</b> 1:00 p.m.</p>'+

'</br><p><b>Contact Details:</b>'+
'</br>Sakshi Srivastava (+91 7784991535)'+
'</br>Mayank Mehrotra '+
'</p>';
break;

case '15.4':
html='<p><b>Venue:</b> UIM Fugs'+ 
'</br><b>Timing:</b> 24 Hours for Submission'+
'</br></br><b>Event:</b>This round will involve Photography using a Camera/Smartphone. Each and every participant will be getting a common theme on 11<sup>th</sup> November 2016 and they&apos;ll have to submit it within 24 hours from the time of their registration. From this only 3 participants will be shortlisted.'+
'</br></br><b>Note:</b>Participants have to use a Camera/Smartphone. Camera will be given preference.'+

'</br><b>Date:</b> 12<sup>th</sup> November 2016</br>'+
'<b>Reporting Time:</b> 10:00 a.m.'+

'</br></br><b>Contact Details:</b>'+
'</br>Anubhav Mitra (+91 8953634704)'+
'</br>Harsh Mishra (+91 9554011444)'+
'</br>Aditya Sharma (+91 8174904145)</p>';
break;

case '15.5':
html='<p><b>Number Of rounds:</b> 1</br></br>'+
'<b>Maximum number Of participants in a team:</b> 1 or  2</br></br>'+
'<b>Style of  mehandi design:</b></p><ul>'+          
'<li>Arabic mehandi</li>'+
'<li>Moroccan mehandi</li>'+         
'<li>Hindu mehandi</li></ul>'+
'<p><b>Time limit:</b> 1 hour</br></br>'+
'<b>Judging criteria:</b> Creativity and originality.Extra weightage to the one who incorporates the given style.</br></br>'+
'<b>Date:</b> 12<sup>th</sup> November 2016</br></br>'+
'<b>Venue:</b> UIM (fugs) </br></br>'+

'<b>RULES</b></p><ul>'+
'<li>Mehandi cones are to be brought by participants.</li>'+

'<li>Out of the styles given above any one style will be given to you all .</li>'+

'<li>Mehandi to be made on both the sides of your partners hand or on your hand.</li>'+

'<li>Hands must be clear . No mark of any design should be present on hands otherwise team will be disqualified.</li></ul>'+

'</br><p><b>Venue:</b> UIM FUGS, 2<sup>nd</sup> Floor</br>'+
'<b>Date:</b> 12<sup>th</sup> November 2016</br>'+
'<b>Time:</b> 2:00 p.m.</p>'+

'</br></br><p><b>Contact Details:</b>'+
'</br>Aanchal Mathur (+91 8303190166)'+
'</br>Apoorva Sinha (+91 8808924539)'+
'</p>';
break;

case '16':
html='<p><b>Participants:</b>  5 participants in each team</br></br>'+
'<b>Event structure:</b></br>'+
'The participated teams will be divided into 2 seperate groups and each team will play against another. The final teams from both the groups will have a match against each other. The teams which will win this final game will be the winner.'+
'</p>'+
'</br></br><p><b>Note:</b></br> Participants will come in teams for counter strike and mini militia.</br>'+
             'Participants will bring their Mobile phones for mini militia.</br>'+
             'Participants can bring their headphones and mouse for counter strike.</br></p>'+
			 
'</br><p><b>Venue:</b> UIT, C-Block, CAD LAB(Ground Floor)</br>'+
'<b>Date:</b> 11<sup>th</sup> November 2016</br>'+
'<b>Time:</b> 11:00 a.m.</p>'+
			 
'</br></br><p><b>Contact Details:</b>'+
'</br>Shrey (+91 9452485027)'+
'</br>Akash (+91 9792300494)'+
'</p>';
break;

case '16.1':
html='<p><b>Participants</b> Individual participation</br></br>'+
'<b>Event structure:</b></br> Each individual participant will play against the another and the one who wins, will further play against another.'+
'</p>'+

'</br><p><b>Venue:</b> UIT, C-Block, CAD LAB(Ground Floor)</br>'+
'<b>Date:</b> 11<sup>th</sup> November 2016</br>'+
'<b>Time:</b> 11:00 a.m.</p>'+

'</br></br><p><b>Contact Details:</b>'+
'</br>Avneesh (+91 9935537759)'+
'</br>Aswani (+91 8574189234)'+
'</p>';
break;

case '16.2':
html='<p><b>Participants:</b> 4 members in each team</br></br>'+
'<b>Event structure:</b></br> The participated teams will be divided into 2 seperate groups and each team will play against another. The final teams from both the groups will have a match against each other. The teams which will win this final game will be the winner.'+
'</p>'+
'</br></br><p><b>Note:</b></br> Participants will come in teams for counter strike and mini militia.</br>'+
             'Participants will bring their Mobile phones for mini militia.</br>'+
             'Participants can bring their headphones and mouse for counter strike.</br></p>'+
			 
'</br><p><b>Venue:</b> UIT, C-Block, CAD LAB(Ground Floor)</br>'+
'<b>Date:</b> 11<sup>th</sup> November 2016</br>'+
'<b>Time:</b> 11:00 a.m.</p>'+
			 
'</br></br><p><b>Contact Details:</b>'+
'</br>Prince Pandey (+91 7275583172)'+
'</p>';
break;

case '17':
html='<p>An event similar to reality show Roadies.</br>'+
'<b>Number of tasks:</b> 5</br></br>'+
'<b>Tasks Description:</b></br>'+
'First round ( Form Selection )</br>'+
'Optional round (Group Discussion)</br>'+
'Second round (Personal interview)</br>'+
'Third round ( Dare Task )</br>'+
'Fourth round ( Ground Task )</br>'+
'Fifth round ( Personal Interview )</br></br>'+


'<b>Round 1:</b> Form Selection </br>'+
'Forms will be given upon participation that has to be filled by the participants and then respective co-ordinators will go through the submitted forms. On the basis of wittiness and opinions given to the questions, forms will be subjected to selection or rejection.</br></br>'+

'<b>Optional round (incase number of participants are more)</b></br>'+
'It’s the optional round, will be done according to the number of participants. The participants selected for the second round have to qualify a group discussion to get selected for the third round.</br></br>'+


'</br><b>Round 2:</b>  Personal Interview</br>'+
'Selected participants will be called up for the PI in which every individual has to give a formal interview to the respective co-ordinators.</br>'+
'Selection criteria in this round will be decided by the co-ordinators.</br>'+

'</br><b>Venue:</b> UCER, C-Block, 1<sup>st</sup> and 2<sup>nd</sup> Floor</br>'+
'<b>Date:</b> 11<sup>th</sup> November 2016</br>'+
'<b>Time:</b> 11:00 a.m.'+

'</br></br><b>Round 3:</b> Task Round</br>'+
'Selected candidates for the third round have to perform a random dare task in a pre-mentioned time given by the coordinators at the starting of third round.</br></br>'+

'<b>Round 4:</b>In fourth round, selected candidates will be given two physical tasks which are to be completed in pre-mentioned time slot for selection in the last round.</br></br>'+

'<b>Round 5:</b>Qualified participants from fourth round have to undergo a two-stage personal interview by UGI faculty members.</br></br>'+

'<b>EVENT TYPE:</b> Individual Participation'+


'</br><b>Field Task</b>'+
'</br><p><b>Venue:</b> UTC ground, UCEM</br>'+
'<b>Date:</b> 12<sup>th</sup> November 2016</br>'+
'<b>Time:</b> 10:00 a.m.</br></p>'+

'<p><b>Round 5</b>'+
'</br><b>Venue:</b> UIT Conference Hall</br>'+
'<b>Date:</b> 12<sup>th</sup> November 2016</br>'+
'<b>Time:</b> 3:00 p.m.</br></br></p>'+

'<p><b>Contact Details:</b>'+
'</br>Hitesh Pandey (+91 7897815944)'+
'</br>Abshishek Rana (+91 9690613413)'+
'</br>Akshay Singh (+91 9670578666)'+
'</br>Amit Rai (+91 8765839968)'+
'</br>Tarun Singh (+91 7054234092)'+
'</p>'
break;
		default:
			html='';
	}
	$("#innerContent").html(html);
}