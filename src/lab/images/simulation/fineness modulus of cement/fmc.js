//on click of next button
var mpointer=0;
var repeat=0;

function navNext()
{

     for (temp = 0; temp <= 4 ; temp++) 
     { 
         document.getElementById ('canvas'+temp).style.visibility="hidden";
     }
     simsubscreennum+=1;

     document.getElementById('canvas'+(simsubscreennum)).style.visibility="visible";
     document.getElementById('nextButton').style.visibility="hidden";
     magic();
}



//Move pointing finger with mouse
$(document).mousemove(function(e)

{

    if(document.getElementById('v2-1').style.visibility=="hidden" && simsubscreennum==1) 
    {
         if(e.pageX<800 && e.pageY<600)  
         {
             document.getElementById('onarm').style.visibility="visible";
             $("#onarm").css({left:e.pageX, top:e.pageY});
         }
    }
    else if(document.getElementById('v2-1').style.visibility=="visible" && simsubscreennum==1)
    {
	     document.getElementById('onarm').style.visibility="hidden";
    }
    if(	document.getElementById('hp2-1').style.visibility=="visible")
    {
	    if(e.pageX<800 && e.pageY<600 && simsubscreennum==1) 
	    {	
             document.getElementById('onarm').style.visibility="hidden";
		     document.getElementById('hp2-1').style.visibility="visible";
             $("#hp2-1").css({left:e.pageX-150+'px', top:e.pageY-150+'px'});
        }
    }
    if(document.getElementById('v2-2').style.visibility=="visible" && simsubscreennum==1)
    {
	     document.getElementById('onarm').style.visibility="hidden";
    }
}); 




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
        
		repeat+=1;
		 if(mpointer==1)
		{
		 refresh();
		 lnt++;
		 document.getElementById('trial').style="visibility:visible ;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
		 document.getElementById('trial').innerHTML="Trial : " + repeat;
		 document.getElementById('nextButton').style.visibility="hidden";
         document.getElementById('canvas1').style.visibility="visible";
		 document.getElementById('canvas5').style.visibility="hidden";
         document.getElementById('ewm1').style.visibility="visible";
         document.getElementById('on2-1').style.visibility="visible";
         document.getElementById('off2-1').style.visibility="visible";
         document.getElementById('zero2-1').style.visibility="visible";
         document.getElementById('tare2-1').style.visibility="visible";
         document.getElementById('f1').style.visibility="hidden";
         document.getElementById('can5-1').style.visibility="hidden";
         document.getElementById('can5-2').style.visibility="hidden";
		 document.getElementById('can5-3').style.visibility="hidden";

         document.getElementById('can5-4').style.visibility="hidden";
		 
		 setTimeout(function()
		 {
             myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 345px; top:446px; height: 30px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(90deg)";
		     document.getElementById('tare2-1').onmouseover="";
	         document.getElementById('on2-1').onmouseover=function(){step1();}
		 },700);
        }
		else
		{
		 document.getElementById('nextButton').style.visibility="hidden";
		 document.getElementById('trial').style="visibility:visible ;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
		 document.getElementById('trial').innerHTML="Trial : " + repeat;
		 setTimeout(function()
		 {
             myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 345px; top:446px; height: 30px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(90deg)";
		     document.getElementById('tare2-1').onmouseover="";
	         document.getElementById('on2-1').onmouseover=function(){step1();}
		 },700);
	    }
    }
	
	
	else if (simsubscreennum==2)
	{
		refresh();
		
		 document.getElementById('nextButton').style.visibility="hidden";
		 
		  document.getElementById('2-1').style.visibility="visible";
         document.getElementById('2-2').style.visibility="visible";
        
		 
		  document.getElementById('ewm1').style.visibility="hidden";
         document.getElementById('on2-1').style.visibility="hidden";
         document.getElementById('off2-1').style.visibility="hidden";
         document.getElementById('zero2-1').style.visibility="hidden";
         document.getElementById('tare2-1').style.visibility="hidden";
		 
		 
		 document.getElementById('mw').style.visibility="hidden";
         document.getElementById('p2').style.visibility="hidden";
		 document.getElementById('wc').style.visibility="hidden";

         document.getElementById('v2-2').style.visibility="hidden";
         document.getElementById('on2-3').style.visibility="hidden";
         document.getElementById('tare2-3').style.visibility="hidden";
	
		
		 setTimeout(function()
		 {
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 440px; top:360px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
		 refresh();
		 document.getElementById('2-2').onclick=function(){step2();}
		 },800);
    }
	else if (simsubscreennum==3)
	{
		refresh();
		 document.getElementById('canvas2').style.visibility="hidden";
		 
		 document.getElementById('10').style.visibility="visible";
         document.getElementById('11').style.visibility="visible";
         document.getElementById('11on').style.visibility="visible";
         
		 
		 document.getElementById('2-4').style.visibility="hidden";
		 document.getElementById('3-9').style.visibility="hidden";
		 document.getElementById('15').style.visibility="visible";
		 document.getElementById('15a').style.visibility="visible";
         myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 435px; top:230px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
		 refresh();
		 document.getElementById('10').onclick=function(){step3();}


		
	}
	else if (simsubscreennum==4)
	{
		 refresh();
		 
		 document.getElementById('5-1').style.visibility="visible";
         document.getElementById('5-2').style.visibility="visible";
         document.getElementById('5-4').style.visibility="visible";
		 document.getElementById('5-5').style.visibility="visible";
         document.getElementById('5-6').style.visibility="visible";
         document.getElementById('11on5').style.visibility="visible";
         document.getElementById('11off5').style.visibility="visible";
         
		 
		 
		 document.getElementById('3-11').style.visibility="hidden";
         document.getElementById('11bon').style.visibility="hidden";
         document.getElementById('rdr3-1').style.visibility="hidden";
         document.getElementById('12s').style.visibility="hidden";
		 document.getElementById('10').style.visibility="hidden";
		 document.getElementById('11').style.visibility="hidden";
		 document.getElementById('12').style.visibility="hidden";
		 document.getElementById('15b').style.visibility="hidden";
		 document.getElementById('15c').style.visibility="hidden";
		 document.getElementById('9a').style.visibility="hidden";
         myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute;left:376px; top:185px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(360deg)";
		 document.getElementById('5-6').onclick=function(){step5();}
	}
	else if (simsubscreennum==5)
	{
		 refresh();
		 
		 
         document.getElementById('5-15').style.visibility="hidden";
		 document.getElementById('sp5-1').style.visibility="hidden";
         document.getElementById('ewm5').style.visibility="hidden";
		 document.getElementById('mw5').style.visibility="hidden";
		 document.getElementById('p5').style.visibility="hidden";
         document.getElementById('on5-1').style.visibility="hidden";
		 document.getElementById('off5-1').style.visibility="hidden";
		 document.getElementById('zero5-1').style.visibility="hidden";
		 document.getElementById('tare5-1').style.visibility="hidden";
		 document.getElementById('v5-2').style.visibility="hidden";
		 document.getElementById('can5-1').style.visibility="visible";
		 document.getElementById('can5-2').style.visibility="visible";
		 document.getElementById('can5-3').style.visibility="visible";
		 document.getElementById('can5-4').style.visibility="visible";
		 
			
			document.getElementById('can5-1').innerHTML="Weight of cement sample = "+values1[lnt][0]+".00gm";
			document.getElementById('can5-2').innerHTML="Weight of cement passing through 90&micro;m sieve="+values1[lnt][1]+"gm";
			document.getElementById('can5-3').innerHTML="Weight of residue ="+values1[lnt][2]+"gm";
			document.getElementById('can5-4').innerHTML="Percentage weight retained on sieve = "+values1[lnt][3];

		
		
		 if(repeat==1)
		 {
			 mpointer=1;
			 simsubscreennum=0;
			 document.getElementById('nextButton').style.visibility="visible";
		 }
		
		  
		  
		 else if(repeat==2)
		 {
			document.getElementById('f1').style.visibility="visible";

		 }
		 
		 
	}
}
    
	function chkval()
	{
	    document.getElementById('f1').style.visibility="hidden";
        document.getElementById('can5-5').innerHTML="Average=7.15";
	}
	
	function step1()
	{
		 myStopFunction();
		 document.getElementById('on2-1').style.visibility="hidden";
         document.getElementById('on2-2').style.visibility="visible";
         document.getElementById('on2-2').onclick=function(){step11();}
    }
	
	function step11()
	{
         document.getElementById('mw').style.visibility="visible";
	     document.getElementById('on2-3').style.visibility="visible";
		 document.getElementById('on2-2').style.visibility="hidden";
		 setTimeout(function()
		 {
			 document.getElementById('hp2-1').style.visibility="visible";
		 },500);
		 setTimeout(function()
		 {   
		     myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:270px; top:250px; height: 40px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(235deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(235deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(235deg)";
             document.getElementById('hp2-1').onclick=function(){step12();}
		 },1000);						             

	}
	
	
	
	function step12()
	{
		 myStopFunction();
		 document.getElementById('hp2-1').style.visibility="hidden";
	     document.getElementById('p2').style.visibility="visible";
         document.getElementById('onarm').style.visibility="hidden";
		 setTimeout(function()
		 {
		     myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:435px; top:446px; height: 30px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(90deg)";
             document.getElementById('tare2-1').onmouseover=function(){step13();} 
		 },800); 		 
    }
	
	
	
	
	
	function step13()
	{
		 myStopFunction();
		 document.getElementById('tare2-1').style.visibility="hidden";
         document.getElementById('tare2-2').style.visibility="visible";
		 document.getElementById('tare2-2').onclick=function(){step14();}               
    }
	
	function step14()
	{
         document.getElementById('v2-1').style.visibility="visible";
	     document.getElementById('tare2-3').style.visibility="visible";
		 document.getElementById('tare2-2').style.visibility="hidden";
         document.getElementById('onarm').style.visibility="hidden";
		 setTimeout(function()
		 {
			 document.getElementById('swc2').style.visibility="visible";

		     document.getElementById('hand').style.visibility="visible";
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
             document.getElementById('hand').onclick=function(){step15();} 
		 },1000);			 
    }
	
	function step15()
	{
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
             },1200);
             setTimeout(function()
			 {
				 
				 document.getElementById('hand').style.visibility="hidden";
			 },1500);
            document.getElementById('onarm').style.visibility="hidden";
		 setTimeout(function()
		 {
			 document.getElementById('nextButton').style.visibility="visible";
		 },2500);  
	}
	
	function step2()
	{
		 myStopFunction();
         document.getElementById('2-2').style.visibility="hidden";
		 // document.getElementById('2-3').style.visibility="visible";
		 // document.getElementById('2-3').style.visibility="hidden";
		 document.getElementById('2-1').style.visibility="hidden";
		 document.getElementById('2-4').style.visibility="visible";

		 setTimeout(function(){
         document.getElementById('rdr3-1').style.visibility="visible";
         document.getElementById('plate3-2').style.visibility="visible";
         },800);
		 setTimeout(function()
		 {
             myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 560px; top:230px; height: 40px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(360deg)";
		     refresh();
		     document.getElementById('plate3-2').onclick=function(){step21();}
            
		 },1000);
}
	function step21()
	{
		 myStopFunction();
         document.getElementById('plate3-2').style.transformOrigin = "100% 80%";
	     document.getElementById('plate3-2').style.animation = "valveturn-2 1.0s forwards ";
		 setTimeout(function()
		 {
	         document.getElementById('rs3-1').style.visibility="visible";
		 },800);
		 document.getElementById('rdr3-1').style.visibility="hidden";
		 setTimeout(function()
		 {
		     document.getElementById('plate3-2').style.visibility="hidden";
             document.getElementById('rs3-1').style.visibility="hidden";
         },1000); 

		 setTimeout(function()
		 {
		     document.getElementById('3-11').style.visibility="visible";
             document.getElementById('3-8').style.visibility="visible";
		     myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 394px; top:214px; height: 40px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(360deg)";
             document.getElementById('3-8').onclick=function(){step213();}
		 },1000);
    }
	
	function step213()
	{
		 myStopFunction();
		 document.getElementById('3-8').style.visibility="hidden";
		 document.getElementById('3-9').style.visibility="visible";
         setTimeout(function()
		 {
			 document.getElementById('nextButton').style.visibility="visible";
         },1000);
	}
	
	
	
	function step3()
	{
		 myStopFunction();
		 document.getElementById('10').style.visibility="hidden";
		 document.getElementById('12').style.visibility="visible";
		 document.getElementById('9').style.visibility="visible";
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:435px; top:180px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
         document.getElementById('9').onclick=function(){step31();}
	}
	 function step31()
	{
		 myStopFunction();
		 document.getElementById('9').style.visibility="hidden";
		 document.getElementById('9a').style.visibility="visible";
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute;left:192px; top:163px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
		 document.getElementById('15').onclick=function(){step32();}
    }
	function step32()
	{
		 myStopFunction();
		 document.getElementById('15').style.visibility="hidden";
		 document.getElementById('15b').style.visibility="visible";
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:377px; top:163.5px; height: 40px; z-index: 10;";
         document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(360deg)";
		 document.getElementById('15a').onclick=function(){step33();}
	}
	function step33()
	{
		 myStopFunction();
		 document.getElementById('15a').style.visibility="hidden";
		 document.getElementById('15c').style.visibility="visible";
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:222px; top:354px;	 height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(90deg)";
		 document.getElementById('11on').onclick=function(){step34();}
	}
	function step34()
	{
	     myStopFunction();
		 document.getElementById('11on').style.visibility="hidden";
		 document.getElementById('11bon').style.visibility="visible";

		 document.getElementById('12s').style.visibility="visible";
		 document.getElementById('11bon').style.visibility="visible";
         document.getElementById('12').style.visibility="hidden";
		 // document.getElementById('12').style.visibility="hidden";
		 // document.getElementById('9a').style.visibility="hidden";
		 // document.getElementById('15b').style.visibility="hidden";
		 // document.getElementById('15c').style.visibility="hidden";
		/*  setTimeout(function()
		 {
			 alert("Please HOVER on the SIEVE SET to shake it");
		 },100); */
		 
		 document.getElementById('stat1').style.visibility="visible";
		 setTimeout(function(){
			 		 document.getElementById('stat1').style.visibility="hidden";
		 },2500);
        
		 setTimeout(function(){
			 		 //document.getElementById('stat2').style.visibility="visible";
					 document.getElementById('12s').style.visibility="hidden";
					 document.getElementById('12').style.visibility="visible";

		 },5500);
		 
		 setTimeout(function(){
         document.getElementById('nextButton').style.visibility="visible";
		 },5600);
    }
	
	
	
    function step5()
    {
		 myStopFunction();
		 document.getElementById('5-6').style.visibility="hidden";
		 document.getElementById('5-8').style.visibility="visible";
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:194px; top:182px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
		 document.getElementById('5-5').onclick=function(){step51();}
    }
	function step51()
    {
		 myStopFunction();
		 document.getElementById('5-5').style.visibility="hidden";
		 document.getElementById('5-7').style.visibility="visible";
		 setTimeout(function(){
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute;left:280px; top:165px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(-90deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(-900deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(-90deg)";
		 document.getElementById('5-4').onclick=function(){step52();}
		 },500);
    }
	function step52()
    {
		 myStopFunction();
		 document.getElementById('5-4').style.visibility="hidden";
		 setTimeout(function(){
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:280px; top:150px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(-90deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(-90deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(-90deg)";
		 document.getElementById('5-2').onclick=function(){step53();}
		 },500);
    }
 
	function step53()
    {
		 myStopFunction();
		 document.getElementById('5-2').style.visibility="hidden";
		 document.getElementById('5-9').style.visibility="visible";
		 document.getElementById('5-10').style.visibility="visible";
		 document.getElementById('5-11').style.visibility="visible";
         document.getElementById('5-4').style.visibility="hidden";
		 document.getElementById('5-7').style.visibility="hidden";
		 document.getElementById('5-8').style.visibility="hidden";
		 document.getElementById('11on5').style.visibility="hidden";
		 document.getElementById('11off5').style.visibility="hidden";
		 
		 //setTimeout(function()
		 //{
		 //myStopFunction();
		 //document.getElementById('5-9').style.visibility="hidden";
	
		 document.getElementById('5-1').style.visibility="hidden";
		
		  // },1000);
		 
		 setTimeout(function()
		 {
             document.getElementById('zero5-1').style.visibility="visible";
             document.getElementById('on5-1').style.visibility="visible";
		     document.getElementById('off5-1').style.visibility="visible";
		     document.getElementById('mw5').style.visibility="visible";
		     document.getElementById('tare5-1').style.visibility="visible";
		     document.getElementById('ewm5').style.visibility="visible";
		     document.getElementById('p5').style.visibility="visible";
         },800);
		 
		 setTimeout(function()
		 {
		     myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:475px; top: 275px; height: 40px; z-index: 10;";
			 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(180deg)";
			 document.getElementById('5-9').onclick="";
			 document.getElementById('5-10').onclick="";
		     document.getElementById('5-11').onclick=function(){step54();}
         },1500);
	}
	
	function step54()
	{
		 myStopFunction();
		 document.getElementById('5-11').style.visibility="hidden";
		 document.getElementById('5-12').style.visibility="visible"; //cement
         myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:475px; top: 298px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
		 document.getElementById('5-9').onclick="";
		 document.getElementById('5-10').onclick=function(){step56();}
	}
	function step56()
	{
		 myStopFunction();
         document.getElementById('5-10').style.visibility="hidden";
		 document.getElementById('sp5-1').style.visibility="visible";
		 document.getElementById('5-18').style.visibility="visible";
         document.getElementById('5-12').style.visibility="hidden";
		 document.getElementById('5-13').style.visibility="visible";
         myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:333px; top:446px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(90deg)";
		 document.getElementById('sp5-1').onclick="";
         document.getElementById('tare5-1').onclick=function(){step56a();}
	}
	function step56a()
	{
         myStopFunction();
		 document.getElementById('v5-2').style.visibility="hidden";
         document.getElementById('v5-1').style.visibility="visible";
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute;left:540px; top: 185px; height: 40px; z-index: 10;";
			
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(360deg)";
		
		 document.getElementById('sp5-1').onclick=function(){step56b();}
	}
	
	function step56b()
	{
		
		 myStopFunction();
		 document.getElementById('sp5-1').onclick="";	
		 document.getElementById('5-18').style.visibility="hidden";
         document.getElementById('sp5-1').style.transformOrigin = "100% 80%";
	     document.getElementById('sp5-1').style.animation = "valveturn-2 1.0s forwards ";
		setTimeout(function()
		 {
			 document.getElementById('5-16').style.visibility="visible";
		 },500);
		 setTimeout(function()
		 {
			 document.getElementById('5-16').style.visibility="hidden";
		 },800);
			
		 setTimeout(function()
		 {
             document.getElementById('5-14').style.visibility="visible";
  
	    },1000);
        setTimeout(function()
		 {		 
        
			 document.getElementById('sp5-1').style.visibility="hidden";
			 document.getElementById('v5-1').style.visibility="hidden";
             document.getElementById('v5-2').innerHTML=values1[lnt][1] +" g";
			 document.getElementById('v5-2').style.visibility="visible";
         },1050);
		 setTimeout(function(){
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:475px; top:325px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
		 document.getElementById('5-9').onclick=function(){step57();}
		 },1060);
	}
	
	function step57()
	{
		 
		 myStopFunction();
		 document.getElementById('5-14').style.visibility="hidden";
         document.getElementById('5-9').style.visibility="hidden";
		 document.getElementById('sp5-2').style.visibility="visible";
		 document.getElementById('5-19').style.visibility="visible";
         document.getElementById('5-13').style.visibility="hidden";
         myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:333px; top:446px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(90deg)";
		 document.getElementById('sp5-2').onclick="";
         document.getElementById('tare5-1').onclick=function(){step57a();}
	}
	function step57a()
	{
		 refresh();
         myStopFunction();
		 document.getElementById('v5-2').style.visibility="hidden";
         document.getElementById('v5-1').style.visibility="visible";
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:540px; top: 185px; height: 40px; z-index: 10;";
			
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(360deg)";
		
		 document.getElementById('sp5-2').onclick=function(){step57b();}
	}
	
	function step57b()
	{
		
		myStopFunction();
		document.getElementById('sp5-2').onclick="";
		document.getElementById('5-19').style.visibility="hidden";
        document.getElementById('sp5-2').style.transformOrigin = "100% 80%";
	    document.getElementById('sp5-2').style.animation = "valveturn-2 1.0s forwards ";
		setTimeout(function()
		 {
			 document.getElementById('5-17').style.visibility="visible";
		 },500);
		 setTimeout(function()
		 {
			 document.getElementById('5-17').style.visibility="hidden";
		 },1000);
			setTimeout(function()
			{
			 
			 document.getElementById('5-15').style.visibility="visible";

			},1000);
		
			
        setTimeout(function()
		 {		
       
			 document.getElementById('sp5-2').style.visibility="hidden";
			 document.getElementById('v5-1').style.visibility="hidden";
             document.getElementById('v5-2').innerHTML=values1[lnt][2] +" g";
			 document.getElementById('v5-2').style.visibility="visible";
         },1050);
		 
		setTimeout(function()
		{		
	         document.getElementById('nextButton').style.visibility="visible";
		},900);
	}
	
	function refresh()
	{
		 document.getElementById('can5-1').innerHTML="";
		 document.getElementById('can5-2').innerHTML="";
		 document.getElementById('can5-3').innerHTML="";
		 document.getElementById('can5-4').innerHTML="";
		 document.getElementById('i1').value=" ";
         document.getElementById('2-1').onclick="";      
		 document.getElementById('2-2').onclick=""; 
		 document.getElementById('hand').style.transformOrigin = "";
		 document.getElementById('plate3-2').style.transformOrigin = "";
		 document.getElementById('sp5-2').style.transformOrigin = "";
		 document.getElementById('sp5-1').style.transformOrigin = "";
         document.getElementById("sp5-2").style.animation = "";
		 document.getElementById("sp5-1").style.animation = "";
		 document.getElementById("hand").style.animation = "";
		 document.getElementById("plate3-2").style.animation = "";
         document.getElementById("arrow1").style.animation = "";

		
	}
	