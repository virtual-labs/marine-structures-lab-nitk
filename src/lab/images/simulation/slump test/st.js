//on click of next button
var flag=0;
var repeat=0;
var count=0;
var cnt=0;

function navNext()
{

     for (temp = 0; temp <= 9 ; temp++)  
     { 
         document.getElementById ('canvas'+temp).style.visibility="hidden";
     }
     simsubscreennum+=1;

     document.getElementById('canvas'+(simsubscreennum)).style.visibility="visible";
     document.getElementById('nextButton').style.visibility="hidden";
     magic();
}



//-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animatearrow()
{
     if (document.getElementById('arrow1').style.visibility=="hidden")
         document.getElementById('arrow1').style.visibility="visible";
     else
         document.getElementById('arrow1').style.visibility="hidden";
}

//stop blinking arrow
function myStopFunction() 
{
     clearInterval(myInt);
     document.getElementById('arrow1').style.visibility="hidden";
}

//-------------------------------------function magic starts here----------------------------------------------------

function magic()
{
    if (simsubscreennum==1)
	{ 
          setTimeout(function(){
          document.getElementById('can1-2').style.visibility="visible";
          document.getElementById('can1-1').style.visibility="hidden";
		  },1000);
		  setTimeout(function(){
		  document.getElementById('can1-3').style.visibility="visible";
		  },1200);
		  setTimeout(function(){
          document.getElementById('can1-4').style.visibility="visible";
		  },2000);
		  setTimeout(function(){
          document.getElementById('can1-5').style.visibility="visible";
          },2800);
		  setTimeout(function(){
          document.getElementById('can1-6').style.visibility="visible";
          },3600);
		  setTimeout(function(){
          document.getElementById('can1-7').style.visibility="visible";
          },4400);
		  setTimeout(function(){
          document.getElementById('can1-8').style.visibility="visible";
          },5200);
		  setTimeout(function(){
          document.getElementById('can1-9').style.visibility="visible";
          },6000);
		  setTimeout(function(){
          document.getElementById('can1-10').style.visibility="visible";
          },6800);
		  setTimeout(function(){
          document.getElementById('can1-11').style.visibility="visible";
          },7600);
		  setTimeout(function(){
          document.getElementById('v1-1').style.visibility="visible";
          },8400);
		  setTimeout(function(){
          document.getElementById('v1-2').style.visibility="visible";
          },9200);
		  setTimeout(function(){
          document.getElementById('v1-3').style.visibility="visible";
          },10000);
		  setTimeout(function(){
          document.getElementById('v1-4').style.visibility="visible";
          },10800);
		  setTimeout(function(){
          document.getElementById('can1-12').style.visibility="visible";
          },11600);
		  setTimeout(function(){
          document.getElementById('v1-5').style.visibility="visible";
          },12400);
		  setTimeout(function(){
          document.getElementById('nextButton').style.visibility="visible";
		  },13000);
	}
	else if(simsubscreennum==2)
	{
		document.getElementById('can1-1').style.visibility="hidden";
		document.getElementById('can1-2').style.visibility="hidden";
		document.getElementById('can1-3').style.visibility="hidden";
		document.getElementById('can1-4').style.visibility="hidden";
		document.getElementById('can1-5').style.visibility="hidden";
		document.getElementById('can1-6').style.visibility="hidden";
		document.getElementById('can1-7').style.visibility="hidden";
		document.getElementById('can1-8').style.visibility="hidden";
		document.getElementById('can1-9').style.visibility="hidden";
		document.getElementById('can1-10').style.visibility="hidden";
		document.getElementById('can1-11').style.visibility="hidden";
		document.getElementById('can1-12').style.visibility="hidden";
		document.getElementById('v1-1').style.visibility="hidden";
		document.getElementById('v1-2').style.visibility="hidden";
		document.getElementById('v1-3').style.visibility="hidden";
		document.getElementById('v1-4').style.visibility="hidden";
		document.getElementById('v1-5').style.visibility="hidden";
		setTimeout(function(){
		document.getElementById('v2-11').style.visibility="visible";
        document.getElementById('v2-12').style.visibility="visible";
	    },500);
		setTimeout(function(){
		document.getElementById('v2-13').style.visibility="visible";
		document.getElementById('v2-14').style.visibility="visible";
		},1500);
		setTimeout(function(){
		document.getElementById('v2-15').style.visibility="visible";
		document.getElementById('v2-16').style.visibility="visible";
		},3000);
		
		setTimeout(function(){
		document.getElementById('v2-17').style.visibility="visible";
		document.getElementById('v2-18').style.visibility="visible";
         },4500);
		
		setTimeout(function(){
		document.getElementById('v2-19').style.visibility="visible";
		document.getElementById('v2-20').style.visibility="visible";
         },6000);
		
		
		
		setTimeout(function(){
		step2();
		},12000);
	}
	else if(simsubscreennum==3)
	{
		myStopFunction();
		
		document.getElementById('msrdev').style.visibility="hidden";
		document.getElementById('cylwat').style.visibility="hidden";
		document.getElementById('wc2-1').style.visibility="hidden";
		document.getElementById('wc2-2').style.visibility="hidden";
		document.getElementById('wc2-3').style.visibility="hidden";
		document.getElementById('p2-1').style.visibility="hidden";
		document.getElementById('p2-2').style.visibility="hidden";
		document.getElementById('p2-3').style.visibility="hidden";
		document.getElementById('v2-6').style.visibility="hidden";
		document.getElementById('v2-7').style.visibility="hidden";
		document.getElementById('v2-8').style.visibility="hidden";
		document.getElementById('v2-9').style.visibility="hidden";
		setTimeout(function(){
			document.getElementById('cem_tub').style.visibility="visible";
		},500);
		setTimeout(function()
		 {
             myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 499px; top: 208px; height: 40px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(180deg)";
		     document.getElementById('p3-1').onclick="";
		     document.getElementById('p3-2').onclick="";
	         document.getElementById('p3-1').onclick=function(){step3();}
		 },1500);
	}
	else if(simsubscreennum==4)
	{
		myStopFunction();
		document.getElementById('mix4').style.visibility="hidden";
		document.getElementById('cem_tub').style.visibility="hidden";
		document.getElementById('nextButton').style.visibility="hidden";
		setTimeout(function(){
		document.getElementById('cyl4-1').style.visibility="visible";
		},500);
		setTimeout(function(){
			myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:556px; top:340px; height: 40px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(360deg)";
	         document.getElementById('cyl4-1').onclick=function(){step4();}
		 },1100);
	}
	else if(simsubscreennum==5)
	{
		myStopFunction();
		document.getElementById('mix6').style.visibility="hidden";
		document.getElementById('nextButton').style.visibility="hidden";
		setTimeout(function(){
			myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:50px; top:270px; height: 40px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(180deg)";
	         document.getElementById('can5-2').onclick=function(){step5();}
		 },1200);
	}
	else if(simsubscreennum==6)
	{
		myStopFunction();
		document.getElementById('mix6').style.visibility="hidden";
		document.getElementById('cem_tub4').style.visibility="hidden";
		document.getElementById('can5-3').style.visibility="hidden";
		document.getElementById('can5-6').style.visibility="hidden";
		document.getElementById('can5-7').style.visibility="hidden";
		document.getElementById('nextButton').style.visibility="hidden";
		setTimeout(function(){
			document.getElementById('can6-4').style.visibility="visible";
		},500);
		setTimeout(function(){
			 myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible; position:absolute; left:135px; top:150px; height: 40px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(360deg)";
	         document.getElementById('can6-4').onclick=function(){step6();}
		 },1200);
    }
	else if(simsubscreennum==7)
	{
		myStopFunction();
		document.getElementById('can6-11').style.visibility="hidden";
		document.getElementById('can6-1').style.visibility="hidden";
		document.getElementById('nextButton').style.visibility="hidden";
		setTimeout(function(){
			document.getElementById('can7-4').style.visibility="visible";
		},1000);
		setTimeout(function(){
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible; position:absolute; left:295px; top:195px; height:40px; z-index:10;";
            document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
			// Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(180deg)";
	         document.getElementById('can7-4').onclick=function(){step7();}
		},1500);
	}
	else if(simsubscreennum==8)
	{
		myStopFunction();
		document.getElementById('can7-6').style.visibility="hidden";
		document.getElementById('nextButton').style.visibility="hidden";
		setTimeout(function(){
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible; position:absolute; left:254px; top:422.5px; height:30px; z-index:10;";
            document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
			// Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(180deg)";
	         document.getElementById('can8-3').onclick=function(){step8();}
		},1300);
	}	
	else if(simsubscreennum==9)
	{
		myStopFunction();
		document.getElementById('can8-1').style.visibility="hidden";
		document.getElementById('can8-8').style.visibility="hidden";
		document.getElementById('can8-2').style.visibility="hidden";
		document.getElementById('can8-7').style.visibility="hidden";
		document.getElementById('nextButton').style.visibility="hidden";
		setTimeout(function()
	    {
			document.getElementById('can9-4').style.visibility="visible";
        },500);
		setTimeout(function()
	    {
			myInt = setInterval(function(){ animatearrow(); }, 500);
		      document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:85px; top:130px; height: 40px; z-index: 10;";
		      document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		      // Code for IE9
		      document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		      // Standard syntax
		      document.getElementById("arrow1").style.transform = "rotate(180deg)";
	          document.getElementById('can9-4').onclick=function(){step9();}
	    },1200);
    }
	else if(simsubscreennum==10)
	{
		document.getElementById('nextButton').style.visibility="hidden";
		document.getElementById('canvas9').style.visibility="hidden";
		document.getElementById('can9-1').style.visibility="hidden";
		document.getElementById('can9-2').style.visibility="hidden";
		document.getElementById('can9-5').style.visibility="hidden";
		document.getElementById('can9-6').style.visibility="hidden";
		document.getElementById('can9-7').style.visibility="hidden";
		document.getElementById('can9-9').style.visibility="hidden";
		document.getElementById('can9-10').style.visibility="hidden";
		
	}
}

function step2()
{
	document.getElementById('v2-11').style.visibility="hidden";
	document.getElementById('v2-12').style.visibility="hidden";
	document.getElementById('v2-13').style.visibility="hidden";
	document.getElementById('v2-14').style.visibility="hidden";
	document.getElementById('v2-15').style.visibility="hidden";
	document.getElementById('v2-16').style.visibility="hidden";
	document.getElementById('v2-17').style.visibility="hidden";
	document.getElementById('v2-18').style.visibility="hidden";
	document.getElementById('v2-19').style.visibility="hidden";
	document.getElementById('v2-20').style.visibility="hidden";
	
	document.getElementById('ewm').style.visibility="visible";
	document.getElementById('on2-1').style.visibility="visible";
	document.getElementById('off2-1').style.visibility="visible";
	document.getElementById('tare2-1').style.visibility="visible";
	document.getElementById('zero2-1').style.visibility="visible";

	setTimeout(function()
	{
		myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 345px; top:446px; height: 30px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(90deg)";
		 document.getElementById('off2-1').onclick="";
		 document.getElementById('tare2-1').onclick="";
		 document.getElementById('hn').onclick="";
		 document.getElementById('p2').onclick="";
	     document.getElementById('on2-1').onclick=function(){step21();}
	},500);
}
function step21()
{
     myStopFunction();
	 document.getElementById('mw').style.visibility="visible";
     document.getElementById('hp2-1').style.visibility="visible";
	 setTimeout(function()
		 {   
		     myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:330px; top:210px; height: 40px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(360deg)";
			 document.getElementById('off2-1').onclick="";
		     document.getElementById('tare2-1').onclick="";
	         document.getElementById('on2-1').onclick="";
			 document.getElementById('hn').onclick="";
		     document.getElementById('p2').onclick="";
	         document.getElementById('hp2-1').onclick=function(){step22();}
		 },300);	
}
function step22()
{
	refresh();
	myStopFunction();
	document.getElementById('hp2-1').style.visibility="hidden";
	document.getElementById('p2').style.visibility="visible";
    setTimeout(function()
		 {
		     myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:435px; top:446px; height: 30px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(90deg)";
			 document.getElementById('off2-1').onclick="";
	         document.getElementById('on2-1').onclick="";
			 document.getElementById('hn').onclick="";
		     document.getElementById('p2').onclick="";
             document.getElementById('tare2-1').onclick=function(){step23();} 
		 },500);
}
function step23()
{
	refresh();
	myStopFunction();
	document.getElementById('v2-1').style.visibility="visible";
	      setTimeout(function()
		 {
			 document.getElementById('hand').style.visibility="visible";
			 
			 document.getElementById('swc2').style.visibility="visible";
			 
		 },500);
		 setTimeout(function()
		 {
             myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:650px; top:180px; height: 40px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(360deg)";
			 document.getElementById('off2-1').onclick="";
		     document.getElementById('tare2-1').onclick="";
	         document.getElementById('on2-1').onclick="";
			 document.getElementById('hn').onclick="";
		     document.getElementById('p2').onclick="";
             document.getElementById('hand').onclick=function(){step24();} 
		 },1000);	
}
function step24()
{
	refresh();
	myStopFunction();
	
		document.getElementById('swc2').style.visibility="hidden";
	
    document.getElementById('hand').style.transformOrigin = "100% 80%";
	document.getElementById('hand').style.animation = "valveturn-4 1.5s forwards ";
	setTimeout(function()
	{
		
        document.getElementById('pwc').style.visibility="visible";
		
    },800);
	setTimeout(function()
	{	
		document.getElementById('v2-1').style.visibility="hidden";
		
        document.getElementById('wc').style.visibility="visible";
		document.getElementById('pwc').style.visibility="hidden";
		
		document.getElementById('v2-2').style.visibility="visible";
		document.getElementById('v2-2').innerHTML=+values[lnt]+" g";
		
    },1200);
    setTimeout(function()
	{
		document.getElementById('hand').style.visibility="hidden";
	
		document.getElementById('v2-3').style.visibility="visible";
	
	},1500);
	myStopFunction();
	setTimeout(function()
    {
        myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 526px; top: 280.75px; height: 40px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(360deg)";
        document.getElementById('off2-1').onclick="";
	    document.getElementById('tare2-1').onclick="";
	    document.getElementById('on2-1').onclick="";
        document.getElementById('hn').onclick="";	    
	    document.getElementById('p2').onclick=function(){step25();}
	},2000);
}

function step25()
{
	refresh();
	myStopFunction();
	document.getElementById('v2-2').style.visibility="hidden";
	document.getElementById('v2-3').style.visibility="hidden";
	document.getElementById('p2').style.visibility="hidden";
	
	document.getElementById('wc').style.visibility="hidden";
	document.getElementById('p2-1').style.visibility="visible";
	document.getElementById('wc2-1').style.visibility="visible";
	document.getElementById('v2-7').style.visibility="visible";
	
	step2_2();
}


function step2_2()
{
     
	 setTimeout(function()
	 {   
	         document.getElementById('hp2-1').style.visibility="visible";
		     myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:330px; top:210px; height: 40px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(360deg)";
			 document.getElementById('off2-1').onclick="";
		     document.getElementById('tare2-1').onclick="";
	         document.getElementById('on2-1').onclick="";
			 document.getElementById('hn').onclick="";
		     document.getElementById('p2').onclick="";
	         document.getElementById('hp2-1').onclick=function(){step22_2();}
	},300);	
}
function step22_2()
{
	refresh();
	myStopFunction();
	document.getElementById('hp2-1').style.visibility="hidden";
	document.getElementById('p2').style.visibility="visible";
    setTimeout(function()
		 {
		     myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:435px; top:446px; height: 30px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(90deg)";
			 document.getElementById('off2-1').onclick="";
	         document.getElementById('on2-1').onclick="";
			 document.getElementById('hn').onclick="";
		     document.getElementById('p2').onclick="";
             document.getElementById('tare2-1').onclick=function(){step23_2();} 
		 },500);
}
function step23_2()
{
	refresh();
	myStopFunction();
	document.getElementById('v2-1').style.visibility="visible";
	      setTimeout(function()
		 {
			 document.getElementById('hand').style.visibility="visible";
			 document.getElementById('fa2').style.visibility="visible";
		 },500);
		 setTimeout(function()
		 {
             myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:650px; top:180px; height: 40px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(360deg)";
			 document.getElementById('off2-1').onclick="";
		     document.getElementById('tare2-1').onclick="";
	         document.getElementById('on2-1').onclick="";
			 document.getElementById('hn').onclick="";
		     document.getElementById('p2').onclick="";
             document.getElementById('hand').onclick=function(){step24_2();} 
		 },1000);	
}
function step24_2()
{
	lnt++;
	refresh();
	myStopFunction();
	document.getElementById('fa2').style.visibility="hidden";
    document.getElementById('hand').style.transformOrigin = "100% 80%";
	document.getElementById('hand').style.animation = "valveturn-4 1.5s forwards ";
	setTimeout(function()
	{
        document.getElementById('pfa').style.visibility="visible";
    },800);
	setTimeout(function()
	{	
		document.getElementById('v2-1').style.visibility="hidden";
		
        document.getElementById('fa').style.visibility="visible";
		document.getElementById('pfa').style.visibility="hidden";
		
		document.getElementById('v2-2').style.visibility="visible";
		document.getElementById('v2-2').innerHTML=+values[lnt]+" g";
		
    },1200);
    setTimeout(function()
	{
		document.getElementById('hand').style.visibility="hidden";
	
		document.getElementById('v2-4').style.visibility="visible";
	
	},1500);
	myStopFunction();
	setTimeout(function()
    {
        myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 526px; top: 280.75px; height: 40px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(360deg)";
        document.getElementById('off2-1').onclick="";
	    document.getElementById('tare2-1').onclick="";
	    document.getElementById('on2-1').onclick="";
        document.getElementById('hn').onclick="";	    
	    document.getElementById('p2').onclick=function(){step25_2();}
	},2000);
}

function step25_2()
{
	refresh();
	myStopFunction();
	document.getElementById('v2-2').style.visibility="hidden";
	document.getElementById('v2-4').style.visibility="hidden";
	document.getElementById('p2').style.visibility="hidden";
	
	document.getElementById('fa').style.visibility="hidden";
	document.getElementById('p2-2').style.visibility="visible";
	document.getElementById('wc2-2').style.visibility="visible";
	document.getElementById('v2-8').style.visibility="visible";
	
	step2_3();
}


function step2_3()
{
	
	 setTimeout(function()
		 {   
		     document.getElementById('hp2-1').style.visibility="visible";
		     myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:330px; top:210px; height: 40px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(360deg)";
			 document.getElementById('off2-1').onclick="";
		     document.getElementById('tare2-1').onclick="";
	         document.getElementById('on2-1').onclick="";
			 document.getElementById('hn').onclick="";
		     document.getElementById('p2').onclick="";
	         document.getElementById('hp2-1').onclick=function(){step22_3();}
		 },300);	
}
function step22_3()
{
	refresh();
	myStopFunction();
	document.getElementById('hp2-1').style.visibility="hidden";
	document.getElementById('p2').style.visibility="visible";
    setTimeout(function()
		 {
		     myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:435px; top:446px; height: 30px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(90deg)";
			 document.getElementById('off2-1').onclick="";
	         document.getElementById('on2-1').onclick="";
			 document.getElementById('hn').onclick="";
		     document.getElementById('p2').onclick="";
             document.getElementById('tare2-1').onclick=function(){step23_3();} 
		 },500);
}
function step23_3()
{
	refresh();
	myStopFunction();
	document.getElementById('v2-1').style.visibility="visible";
	      setTimeout(function()
		 {
			 document.getElementById('hand').style.visibility="visible";
			 
			 document.getElementById('ca2').style.visibility="visible";
			 
		 },500);
		 setTimeout(function()
		 {
             myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:650px; top:180px; height: 40px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(360deg)";
			 document.getElementById('off2-1').onclick="";
		     document.getElementById('tare2-1').onclick="";
	         document.getElementById('on2-1').onclick="";
			 document.getElementById('hn').onclick="";
		     document.getElementById('p2').onclick="";
             document.getElementById('hand').onclick=function(){step24_3();} 
		 },1000);	
}
function step24_3()
{
	lnt++;
	refresh();
	myStopFunction();
	
		document.getElementById('ca2').style.visibility="hidden";
	
    document.getElementById('hand').style.transformOrigin = "100% 80%";
	document.getElementById('hand').style.animation = "valveturn-4 1.5s forwards ";
	setTimeout(function()
	{
		
        document.getElementById('pca').style.visibility="visible";
		
    },800);
	setTimeout(function()
	{	
		document.getElementById('v2-1').style.visibility="hidden";
		
        document.getElementById('ca').style.visibility="visible";
		document.getElementById('pca').style.visibility="hidden";
		
		document.getElementById('v2-2').style.visibility="visible";
		document.getElementById('v2-2').innerHTML=+values[lnt]+" g";
		
    },1200);
    setTimeout(function()
	{
		document.getElementById('hand').style.visibility="hidden";
	
		document.getElementById('v2-5').style.visibility="visible";
	
	},1500);
	myStopFunction();
	setTimeout(function()
    {
        myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 526px; top: 280.75px; height: 40px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(360deg)";
   	    document.getElementById('tare2-1').onclick="";
	    document.getElementById('on2-1').onclick="";
        document.getElementById('hn').onclick="";	    
	    document.getElementById('p2').onclick=function(){step25_3();}
	},2000);
}

function step25_3()
{
	refresh();
	myStopFunction();
	document.getElementById('v2-2').style.visibility="hidden";
	document.getElementById('v2-5').style.visibility="hidden";
	document.getElementById('p2').style.visibility="hidden";
	
	document.getElementById('ca').style.visibility="hidden";
	document.getElementById('p2-3').style.visibility="visible";
	document.getElementById('wc2-3').style.visibility="visible";
	document.getElementById('v2-9').style.visibility="visible";
	
	step27();
}


function step27()
{   
    myStopFunction();
	refresh();
	
	  document.getElementById('mw').style.visibility="hidden";
	  document.getElementById('ewm').style.visibility="hidden";
	  document.getElementById('on2-1').style.visibility="hidden";
	  document.getElementById('off2-1').style.visibility="hidden";
	  document.getElementById('zero2-1').style.visibility="hidden";
	  document.getElementById('tare2-1').style.visibility="hidden";
	  setTimeout(function(){
	    document.getElementById('msrdev').style.visibility="visible";
	    document.getElementById('hn').style.visibility="visible";
	  },800);
	
	
	setTimeout(function()
    {
        myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:335px; top:138px; height: 40px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(360deg)";
		document.getElementById('off2-1').onclick="";
		document.getElementById('tare2-1').onclick="";
	    document.getElementById('on2-1').onclick="";
		document.getElementById('p2').onclick="";
	    document.getElementById('hn').onclick=function(){step28();}
	},1300);
	myStopFunction();
}

function step28()
{        
refresh();
myStopFunction();
document.getElementById('hn').style.transformOrigin="100% 80%";
document.getElementById('hn').style.animation = "valveturn-2 2.5s forwards ";
setTimeout(function(){
	document.getElementById('hn').style.visibility="hidden";
             document.getElementById('hn2').style.visibility="visible";
			 document.getElementById('water').style.visibility="visible";
			 document.getElementById('cylwat').style.visibility="visible";
			 document.getElementById('cylwat').style.transformOrigin="100% 80%";
		     document.getElementById('cylwat').style.animation="water-4  0.8s 1 forwards";
         },1200);
		 myStopFunction();
		 setTimeout(function(){
			document.getElementById('hn2').style.visibility="hidden";
			document.getElementById('water').style.visibility="hidden";
			document.getElementById('v2-6').style.visibility="visible";
		 },1800);
		 setTimeout(function(){
			 document.getElementById('nextButton').style.visibility="visible";
		 },1850);
}

function step3()
{
	myStopFunction();
	document.getElementById('p3-1').style.visibility="hidden";
	document.getElementById('wc3-1').style.visibility="hidden";
	document.getElementById('p3-11').style.visibility="visible";
	document.getElementById('p3-11').style.transformOrigin="100% 80%";
	document.getElementById('p3-11').style.animation="valveturn-4  0.8s 1 forwards";
	setTimeout(function(){
		document.getElementById('mix1').style.visibility="visible";
		document.getElementById('p3-11').style.visibility="hidden";
	},1250);
	setTimeout(function()
    {
        myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 499px; top: 335px; height: 40px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById('p3-3').onclick="";
	    document.getElementById('p3-2').onclick=function(){step31();}
	},1400);
}
function step31()
{
	myStopFunction();
	document.getElementById('p3-2').style.visibility="hidden";
	document.getElementById('wc3-2').style.visibility="hidden";
	document.getElementById('p3-22').style.visibility="visible";
	document.getElementById('p3-22').style.transformOrigin="100% 80%";
	document.getElementById('p3-22').style.animation="valveturn-4 0.8s 1 forwards";
	setTimeout(function(){
		document.getElementById('mix2').style.visibility="visible";
		document.getElementById('p3-22').style.visibility="hidden";
	},1250);
	setTimeout(function()
    {
        myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 499px; top: 442px; height: 40px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
	    document.getElementById('p3-3').onclick=function(){step32();}
	},1400);
}
function step32()
{
	myStopFunction();
	document.getElementById('p3-3').style.visibility="hidden";
	document.getElementById('wc3-3').style.visibility="hidden";
	document.getElementById('p3-33').style.visibility="visible";
	document.getElementById('p3-33').style.transformOrigin="100% 80%";
	document.getElementById('p3-33').style.animation="valveturn-4 0.8s 1 forwards";
	setTimeout(function(){
		document.getElementById('mix3').style.visibility="visible";
		document.getElementById('p3-33').style.visibility="hidden";
	},1250);
	setTimeout(function(){
		document.getElementById('trowel1').style.visibility="visible";
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:405px; top:200px;  height: 40px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(360deg)";
	    document.getElementById('trowel1').onclick=function(){step33();}
	},1450);
}
function step33()
{
	myStopFunction();
	document.getElementById('trowel1').style.visibility="hidden";
	document.getElementById('trowel2').style.visibility="visible";
    document.getElementById('trowel2').style.transformOrigin="100% 80%";
    document.getElementById('trowel2').style.animation = "mymove 2.5s 2 forwards ";
	setTimeout(function(){
	document.getElementById('mix1').style.visibility="hidden";
	document.getElementById('mix2').style.visibility="hidden";
	document.getElementById('mix3').style.visibility="hidden";
	document.getElementById('trowel2').style.visibility="hidden";
	document.getElementById('cem_tub').style.visibility="hidden";
	document.getElementById('mix4').style.visibility="visible";
   	},5000);
	setTimeout(function(){
		document.getElementById('nextButton').style.visibility="visible";
	},5500);
}

function step4()
{   
    myStopFunction();
	document.getElementById('cyl4-1').style.visibility="hidden";
	document.getElementById('cyl4-2').style.visibility="visible";
	document.getElementById('cyl4-2').style.transformOrigin="100% 80%";
	document.getElementById('cyl4-2').style.animation="valveturn-5 1.0s 1 forwards";
    setTimeout(function(){
			document.getElementById('water4').style.visibility="visible";
			document.getElementById('water4-2').style.visibility="visible";
			document.getElementById('water4-2').style.transformOrigin="100% 80%";
	        document.getElementById('water4-2').style.animation="water-6 1.5s 1 forwards";
    },1500);
	setTimeout(function(){
	document.getElementById('cyl4-2').style.visibility="hidden";
	document.getElementById('water4').style.visibility="hidden";
    document.getElementById('trowel4-1').style.visibility="visible";
	},2500);
    setTimeout(function(){
		document.getElementById('trowel4-1').style.visibility="visible";
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:405px; top:200px;  height: 40px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(360deg)";
	    document.getElementById('trowel4-1').onclick=function(){step41();}
	},2600);
}
function step41()
{
	myStopFunction();
	document.getElementById('trowel4-1').style.visibility="hidden";
	document.getElementById('trowel4-2').style.visibility="visible";
    document.getElementById('trowel4-2').style.transformOrigin="100% 80%";
    document.getElementById('trowel4-2').style.animation = "mymove 2.5s 2 forwards ";
	
	setTimeout(function(){
	document.getElementById('water4-2').style.visibility="hidden";
	document.getElementById('trowel4-2').style.visibility="hidden";
	document.getElementById('mix6').style.visibility="visible";
	document.getElementById('cem_tub4').style.visibility="hidden";
   	},5500);
	setTimeout(function(){
		document.getElementById('nextButton').style.visibility="visible";
	},6000);
}

function step5()
{
	myStopFunction();
	document.getElementById('can5-2').style.visibility="hidden";
	document.getElementById('can5-3').style.visibility="visible";
    setTimeout(function(){
	document.getElementById('can5-4').style.visibility="visible";
	document.getElementById('can5-5').style.visibility="visible";	
	},500);
	setTimeout(function(){
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:250px; top:345px;  height: 30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById('can5-5').onclick="";
	    document.getElementById('can5-4').onclick=function(){step51();}
	},1000);
}
function step51()
{
	myStopFunction();
	document.getElementById('can5-4').style.visibility="hidden";
	document.getElementById('can5-6').style.visibility="visible";
	setTimeout(function(){
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:503px; top:345px;  height: 30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(360deg)";
	    document.getElementById('can5-5').onclick=function(){step52();}
	},500);
}
function step52()
{
	myStopFunction();
	document.getElementById('can5-5').style.visibility="hidden";
	document.getElementById('can5-7').style.visibility="visible";
	setTimeout(function(){
		document.getElementById('nextButton').style.visibility="visible";
	},1000);
}

function step6()
{
	myStopFunction();
	document.getElementById('can6-4').style.transformOrigin = "100% 80% ";
	document.getElementById('can6-4').style.animation = "mymove2 2.5s forwards";
	setTimeout(function(){
		document.getElementById('can6-4').style.visibility="hidden";
		document.getElementById('can6-5').style.visibility="visible";
		document.getElementById('can6-5').style.transformOrigin = "100% 80% ";
	    document.getElementById('can6-5').style.animation = "mymove3 2.5s forwards";
	},2250);
	
	setTimeout(function(){
		document.getElementById('can6-3').style.visibility="hidden";
		document.getElementById('can6-21').style.visibility="visible";
	},2350);
	
	setTimeout(function(){
		document.getElementById('can6-5').style.visibility="hidden";
		document.getElementById('can6-6').style.visibility="visible";
		document.getElementById('can6-6').style.transformOrigin = "100% 80% ";
	    document.getElementById('can6-6').style.animation = "valveturn-6 2s forwards";
	},5150);
	setTimeout(function(){
		document.getElementById('can6-6').style.visibility="hidden";
		document.getElementById('can6-7').style.visibility="visible";
	},6050);
	
	//2nd time pouring cement
	
	setTimeout(function(){
		document.getElementById('can6-7').style.visibility="hidden";
		document.getElementById('can6-8').style.visibility="visible";
		document.getElementById('can6-8').style.transformOrigin = "100% 80% ";
	    document.getElementById('can6-8').style.animation = "mymove3 2.5s forwards";
	},6850);
	
	setTimeout(function(){
		document.getElementById('can6-21').style.visibility="hidden";
		document.getElementById('can6-22').style.visibility="visible";
	},7050);
	
	
	setTimeout(function(){
		document.getElementById('can6-8').style.visibility="hidden";
		document.getElementById('can6-6').style.visibility="visible";
		document.getElementById('can6-6').style.transformOrigin = "100% 80% ";
	    document.getElementById('can6-6').style.animation = "valveturn-6 2s forwards";
	},9850);
	
	
	setTimeout(function(){
		document.getElementById('can6-6').style.visibility="hidden";
		document.getElementById('can6-7').style.visibility="visible";
	},10850);
	setTimeout(function(){
		document.getElementById('can6-7').style.visibility="hidden";
	},11100);
	setTimeout(function(){
		document.getElementById('can6-9').style.visibility="visible";
	},11850);
	setTimeout(function(){
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:585px; top:175px; height: 40px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(360deg)";
	    document.getElementById('can6-9').onclick=function(){step62();}
	},11950);
}
function step62()
{ 
    myStopFunction();
    document.getElementById('can6-9').onclick="";
    setTimeout(function(){
	document.getElementById('can6-9').style.transformOrigin="100% 80%";
	document.getElementById('can6-9').style.animation = "water-7 0.5s 10 forwards ";
	},500);
	setTimeout(function(){
	document.getElementById('can6-9').style.visibility="hidden";
	document.getElementById('can6-10').style.visibility="visible";
    document.getElementById('can6-10').style.transformOrigin="100% 80%";
	document.getElementById('can6-10').style.animation = "water-7 0.5s 10 forwards ";
	},5100);
    setTimeout(function(){
		document.getElementById('can6-10').style.visibility="hidden";
	},10100);
	 
	 refresh();
	
	setTimeout(function(){
		document.getElementById('can6-4').style.visibility="visible";
	},10200);
	setTimeout(function(){
		myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible; position:absolute; left:135px; top:150px; height: 40px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(360deg)";
	    document.getElementById('can6-4').onclick=function(){step60_2();}
	},10300);
}


function step60_2()
{
	myStopFunction();
	refresh();
	document.getElementById('can6-4').style.transformOrigin = "100% 80% ";
	document.getElementById('can6-4').style.animation = "mymove2 2.5s forwards";
	setTimeout(function(){
		document.getElementById('can6-4').style.visibility="hidden";
		document.getElementById('can6-5').style.visibility="visible";
		document.getElementById('can6-5').style.transformOrigin = "100% 80% ";
	    document.getElementById('can6-5').style.animation = "mymove3 2.5s forwards";
	},2800);
	
	
	
	setTimeout(function(){
		document.getElementById('can6-5').style.visibility="hidden";
		document.getElementById('can6-6').style.visibility="visible";
		document.getElementById('can6-6').style.transformOrigin = "100% 80% ";
	    document.getElementById('can6-6').style.animation = "valveturn-6 2s forwards";
	},5800);
	setTimeout(function(){
		document.getElementById('can6-6').style.visibility="hidden";
		document.getElementById('can6-7').style.visibility="visible";
	},6800);
	
	//2nd time pouring cement
	
	setTimeout(function(){
		document.getElementById('can6-7').style.visibility="hidden";
		document.getElementById('can6-8').style.visibility="visible";
		document.getElementById('can6-8').style.transformOrigin = "100% 80% ";
	    document.getElementById('can6-8').style.animation = "mymove3 2.5s forwards";
	},7000);
	
	setTimeout(function(){
		document.getElementById('can6-22').style.visibility="hidden";
		document.getElementById('can6-23').style.visibility="visible";
	},7200);
	
	setTimeout(function(){
		document.getElementById('can6-8').style.visibility="hidden";
		document.getElementById('can6-6').style.visibility="visible";
		document.getElementById('can6-6').style.transformOrigin = "100% 80% ";
	    document.getElementById('can6-6').style.animation = "valveturn-6 2s forwards";
	},10000);
	
	
	setTimeout(function(){
		document.getElementById('can6-6').style.visibility="hidden";
		document.getElementById('can6-7').style.visibility="visible";
	},11000);
	setTimeout(function(){
		document.getElementById('can6-7').style.visibility="hidden";
	},11250);
	setTimeout(function(){
		document.getElementById('can6-9').style.visibility="visible";
	},12000);
	setTimeout(function(){
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:585px; top:175px; height: 40px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(360deg)";
	    document.getElementById('can6-9').onclick=function(){step62_2();}
	},12100);
}
function step62_2()
{ 
    myStopFunction();
    document.getElementById('can6-9').onclick="";
    setTimeout(function(){
	document.getElementById('can6-9').style.transformOrigin="100% 80%";
	document.getElementById('can6-9').style.animation = "water-7 0.5s 10 forwards ";
	},500);
	setTimeout(function(){
	document.getElementById('can6-9').style.visibility="hidden";
	document.getElementById('can6-10').style.visibility="visible";
    document.getElementById('can6-10').style.transformOrigin="100% 80%";
	document.getElementById('can6-10').style.animation = "water-7 0.5s 10 forwards ";
	},5100);
    setTimeout(function(){
			document.getElementById('can6-10').style.visibility="hidden";
	},10100);
	refresh();
	setTimeout(function(){
		document.getElementById('can6-4').style.visibility="visible";
	},10200);
	setTimeout(function(){
		myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible; position:absolute; left:135px; top:150px; height: 40px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(360deg)";
	    document.getElementById('can6-4').onclick=function(){step60_3();}
	},10300);
	
}

function step60_3()
{
	myStopFunction();
	refresh();
	document.getElementById('can6-4').style.transformOrigin = "100% 80% ";
	document.getElementById('can6-4').style.animation = "mymove2 2.5s forwards";
	setTimeout(function(){
		document.getElementById('can6-4').style.visibility="hidden";
		document.getElementById('can6-5').style.visibility="visible";
		document.getElementById('can6-5').style.transformOrigin = "100% 80% ";
	    document.getElementById('can6-5').style.animation = "mymove3 2.5s forwards";
	},2800);
	
	
	setTimeout(function(){
		document.getElementById('can6-5').style.visibility="hidden";
		document.getElementById('can6-6').style.visibility="visible";
		document.getElementById('can6-6').style.transformOrigin = "100% 80% ";
	    document.getElementById('can6-6').style.animation = "valveturn-6 2s forwards";
	},5800);
	setTimeout(function(){
		document.getElementById('can6-6').style.visibility="hidden";
		document.getElementById('can6-7').style.visibility="visible";
	},6800);
	
	//2nd time pouring cement
	
	setTimeout(function(){
		document.getElementById('can6-7').style.visibility="hidden";
		document.getElementById('can6-8').style.visibility="visible";
		document.getElementById('can6-8').style.transformOrigin = "100% 80% ";
	    document.getElementById('can6-8').style.animation = "mymove3 2.5s forwards";
	},7000);
	
	setTimeout(function(){
		document.getElementById('can6-23').style.visibility="hidden";
		document.getElementById('can6-24').style.visibility="visible";
	},7200);
	
	setTimeout(function(){
		document.getElementById('can6-8').style.visibility="hidden";
		document.getElementById('can6-6').style.visibility="visible";
		document.getElementById('can6-6').style.transformOrigin = "100% 80% ";
	    document.getElementById('can6-6').style.animation = "valveturn-6 2s forwards";
	},10000);
	
	
	setTimeout(function(){
		document.getElementById('can6-6').style.visibility="hidden";
		document.getElementById('can6-7').style.visibility="visible";
	},11000);
	setTimeout(function(){
		document.getElementById('can6-7').style.visibility="hidden";
	},11250);
	setTimeout(function(){
		document.getElementById('can6-9').style.visibility="visible";
	},12000);
	setTimeout(function(){
		myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible; position:absolute; left:585px; top:175px; height: 40px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(360deg)";
	    document.getElementById('can6-9').onclick=function(){step62_3();}
	},12100);
}
function step62_3()
{ 
    myStopFunction();
    document.getElementById('can6-9').onclick="";
    setTimeout(function(){
	document.getElementById('can6-9').style.transformOrigin="100% 80%";
	document.getElementById('can6-9').style.animation = "water-7 0.5s 10 forwards ";
	},500);
	setTimeout(function(){
	document.getElementById('can6-9').style.visibility="hidden";
	document.getElementById('can6-10').style.visibility="visible";
    document.getElementById('can6-10').style.transformOrigin="100% 80%";
	document.getElementById('can6-10').style.animation = "water-7 0.5s 10 forwards ";
	},5100);
    setTimeout(function(){
		document.getElementById('can6-10').style.visibility="hidden";
	},10100);
	refresh();
	setTimeout(function(){
		document.getElementById('can6-4').style.visibility="visible";
	},10200);
	setTimeout(function(){
		myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible; position:absolute; left:135px; top:150px; height: 40px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(360deg)";
	    document.getElementById('can6-4').onclick=function(){step60_4();}
	},10300);
	
}



function step60_4()
{
	myStopFunction();
	refresh();
	document.getElementById('can6-4').style.transformOrigin = "100% 80% ";
	document.getElementById('can6-4').style.animation = "mymove2 2.5s forwards";
	setTimeout(function(){
		document.getElementById('can6-4').style.visibility="hidden";
		document.getElementById('can6-5').style.visibility="visible";
		document.getElementById('can6-5').style.transformOrigin = "100% 80% ";
	    document.getElementById('can6-5').style.animation = "mymove3 2.5s forwards";
	},2800);
	
	setTimeout(function(){
		document.getElementById('can6-24').style.visibility="hidden";
		document.getElementById('can6-25').style.visibility="visible";
	},3000);
	
	setTimeout(function(){
		document.getElementById('can6-5').style.visibility="hidden";
		document.getElementById('can6-6').style.visibility="visible";
		document.getElementById('can6-6').style.transformOrigin = "100% 80% ";
	    document.getElementById('can6-6').style.animation = "valveturn-6 2s forwards";
	},5800);
	setTimeout(function(){
		document.getElementById('can6-6').style.visibility="hidden";
		document.getElementById('can6-7').style.visibility="visible";
	},6800);
	
	//2nd time pouring cement
	
	setTimeout(function(){
		document.getElementById('can6-7').style.visibility="hidden";
		document.getElementById('can6-8').style.visibility="visible";
		document.getElementById('can6-8').style.transformOrigin = "100% 80% ";
	    document.getElementById('can6-8').style.animation = "mymove3 2.5s forwards";
	},7000);
	
	setTimeout(function(){
		document.getElementById('can6-25').style.visibility="hidden";
		document.getElementById('can6-26').style.visibility="visible";
	},7200);
	
	setTimeout(function(){
		document.getElementById('can6-8').style.visibility="hidden";
		document.getElementById('can6-6').style.visibility="visible";
		document.getElementById('can6-6').style.transformOrigin = "100% 80% ";
	    document.getElementById('can6-6').style.animation = "valveturn-6 2s forwards";
	},10000);
	
	
	setTimeout(function(){
		document.getElementById('can6-6').style.visibility="hidden";
		document.getElementById('can6-7').style.visibility="visible";
	},11000);
	setTimeout(function(){
		document.getElementById('can6-7').style.visibility="hidden";
		document.getElementById('can6-11').style.visibility="visible";
	},11250);
	setTimeout(function(){
		document.getElementById('can6-9').style.visibility="visible";
	},12000);
	setTimeout(function(){
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:585px; top:175px; height: 40px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(360deg)";
	    document.getElementById('can6-9').onclick=function(){step62_4();}
	},12100);
}
function step62_4()
{ 
    myStopFunction();
    document.getElementById('can6-9').onclick="";
    setTimeout(function(){
	document.getElementById('can6-9').style.transformOrigin="100% 80%";
	document.getElementById('can6-9').style.animation = "water-7 0.5s 10 forwards ";
	},500);
	setTimeout(function(){
	document.getElementById('can6-9').style.visibility="hidden";
	document.getElementById('can6-10').style.visibility="visible";
    document.getElementById('can6-10').style.transformOrigin="100% 80%";
	document.getElementById('can6-10').style.animation = "water-7 0.5s 10 forwards ";
	},5100);
    setTimeout(function(){
		document.getElementById('can6-10').style.visibility="hidden";
		document.getElementById('can6-26').style.visibility="hidden";
	},10100);
	setTimeout(function(){
		document.getElementById('nextButton').style.visibility="visible";
	},10300);
}


function step7()
{
	myStopFunction();
	document.getElementById('can7-4').style.visibility="hidden";
	document.getElementById('can7-5').style.visibility="visible";
	document.getElementById('can7-5').style.transformOrigin = "100% 80%";
	document.getElementById('can7-5').style.animation = "mymove4 0.8s 2 forwards ";
	setTimeout(function(){
	    document.getElementById('can7-5').style.visibility="hidden";
	    document.getElementById('can7-2').style.visibility="hidden";
	    document.getElementById('can7-6').style.visibility="visible";
	},1700);
	setTimeout(function(){
		document.getElementById('nextButton').style.visibility="visible";
	},1800);
}

function step8()
{
	refresh();
	myStopFunction();
	document.getElementById('can8-3').style.visibility="hidden";
	setTimeout(function(){
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:508px; top:416px; height: 30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(360deg)";
	    document.getElementById('can8-4').onclick=function(){step81();}
	},800);
}
function step81()
{
	myStopFunction();
	refresh();
	document.getElementById('can8-4').style.visibility="hidden";
	setTimeout(function(){
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:290px; top:330px; height: 40px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
	    document.getElementById('can8-2').onclick=function(){step82();}
	},800);
}
function step82()
{   myStopFunction();
    refresh();
	document.getElementById('can8-2').style.visibility="hidden";
	document.getElementById('can8-5').style.visibility="visible";
	document.getElementById('can8-8').style.visibility="visible";
	document.getElementById('can8-5').style.transformOrigin = "100% 80%";
	document.getElementById('can8-5').style.animation = "water0 2.5s forwards ";
	setTimeout(function(){
		 document.getElementById('can8-5').style.visibility="hidden";
		 document.getElementById('can8-6').style.visibility="visible";
         document.getElementById('can8-6').style.transformOrigin = "100% 80%";
	     document.getElementById('can8-6').style.animation = "water0 2.5s reverse ";
	},2500);
    setTimeout(function(){
		 document.getElementById('can8-6').style.visibility="hidden";
		 document.getElementById('can8-7').style.visibility="visible";
	},5000);
	setTimeout(function(){
		document.getElementById('nextButton').style.visibility="visible";
	},5500);
}

function step9()
{
	myStopFunction();
	refresh();
	document.getElementById('can9-4').style.transformOrigin = "100% 80%";
	document.getElementById('can9-4').style.animation = "mymove5 1.5s forwards";
    setTimeout(function(){
	 document.getElementById('can9-5').style.visibility="visible";	
	 document.getElementById('can9-4').style.visibility="hidden";	
	},1500);
	setTimeout(function(){
	 document.getElementById('can9-8').style.visibility="visible";	
	},2200);
	setTimeout(function(){
	    myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:100px; top:250px; height: 40px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
	    document.getElementById('can9-8').onclick=function(){step91();}
	},2700);
}
function step91()
{
	myStopFunction();
	document.getElementById('can9-8').style.visibility="hidden";	
	document.getElementById('can9-7').style.visibility="visible";
    setTimeout(function(){
      	document.getElementById('can9-9').style.visibility="visible";	
	    document.getElementById('can9-10').style.visibility="visible";
    },500);	
    setTimeout(function(){
		document.getElementById('nextButton').style.visibility="visible";
	},800);
}
function refresh()
{
	document.getElementById('hand').style.transformOrigin = "";
	document.getElementById('hand').style.animation = "";
	document.getElementById('hn').style.transformOrigin = "";
	document.getElementById('hn').style.animation = "";
	document.getElementById('can6-4').style.transformOrigin = "";
	document.getElementById('can6-4').style.animation = "";
    document.getElementById('can6-5').style.transformOrigin = "";
	document.getElementById('can6-5').style.animation = "";
	document.getElementById('can6-6').style.transformOrigin = "";
	document.getElementById('can6-6').style.animation = "";
    document.getElementById('can6-8').style.transformOrigin = "";
	document.getElementById('can6-8').style.animation = "";
    document.getElementById('can6-9').style.transformOrigin = "";
	document.getElementById('can6-9').style.animation = "";
	document.getElementById('can6-10').style.transformOrigin = "";
	document.getElementById('can6-10').style.animation = "";
    document.getElementById("arrow1").style.animation = "";

}