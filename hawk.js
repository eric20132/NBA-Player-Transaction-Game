var x;
var point;
var point_1;
var point_2;
var point_3;
var point_4;
var point_5;
var temp;

function mouseOver( e )
{  
   if ( e.target.getAttribute( "id" ) == "1" )
   {
      x = document.getElementById("1");
      e.target.setAttribute( "src", "picture/player/" + x.getAttribute( "name" ) );
   }

   if ( e.target.getAttribute( "id" ) == "2" )
   {
      x = document.getElementById("2");
      e.target.setAttribute( "src", "picture/player/" + x.getAttribute( "name" ) );
      x.setAttribute( "style", "width: 460px" );
   }

   if ( e.target.getAttribute( "id" ) == "3" )
   {
      x = document.getElementById("3");
      e.target.setAttribute( "src", "picture/player/" + x.getAttribute( "name" ) );
      x.setAttribute( "style", "width: 460px" );
   }

   if ( e.target.getAttribute( "id" ) == "4" )
   {
      x = document.getElementById("4");
      e.target.setAttribute( "src", "picture/player/" + x.getAttribute( "name" ) );
      x.setAttribute( "style", "width: 460px;top:130px");
   }

   if ( e.target.getAttribute( "id" ) == "5" )
   {
      x = document.getElementById("5");
      e.target.setAttribute( "src", "picture/player/" + x.getAttribute( "name" ) );
      x.setAttribute( "style", "width: 460px;top:320px;left:730px" );
   }
} 

function mouseOut( e )
{

   if ( e.target.getAttribute( "id" ) == "1" )
   {
      e.target.setAttribute( "src", "picture/Ball.png" );
   } 

   if ( e.target.getAttribute( "id" ) == "2" )
   {
      e.target.setAttribute( "src", "picture/ball_2.png" );
      e.target.setAttribute("style", "width:630px");
   }

   if ( e.target.getAttribute( "id" ) == "3" )
   {
      e.target.setAttribute( "src", "picture/ball_3.png" );
      e.target.setAttribute("style", "width:600px");
   } 

   if ( e.target.getAttribute( "id" ) == "4" )
   {
      e.target.setAttribute( "src", "picture/ball_4.png" );
      e.target.setAttribute("style", "width:290px");

   } 

   if ( e.target.getAttribute( "id" ) == "5" )
   {
      e.target.setAttribute( "src", "picture/ball_5.png" );
      e.target.setAttribute("style", "width: 300px");
   } 
} 
document.addEventListener( "mouseover", mouseOver, false );
document.addEventListener( "mouseout", mouseOut, false );

function start()
{
      point_1 = 78;
      point_2 = 78;
      point_3 = 78;
      point_4 = 82;
      point_5 = 76;
      point = point_1 + point_2 + point_3 + point_4 + point_5;
      temp = point;
      document.getElementById( "total" ).innerHTML = point/5;
      //refresh_point();
      document.getElementById("summit_PG").addEventListener("click", replace_PG, false);
      document.getElementById("summit_SG").addEventListener("click", replace_SG, false);
      document.getElementById("summit_SF").addEventListener("click", replace_SF, false);
      document.getElementById("summit_PF").addEventListener("click", replace_PF, false);
      document.getElementById("summit_C").addEventListener("click", replace_C, false);
}

function replace_PG()
{
   var keyword=document.getElementById("PG").value;
   document.getElementById("1").setAttribute( "name", keyword);

   if(keyword == "curry.PNG"){point_1 = 95;}
   if(keyword == "irving.PNG"){point_1 = 93;}
   if(keyword == "lin.jpg"){point_1 = 78;}
   if(keyword == "walker.PNG"){point_1 = 86;}
   refresh_point();
}

function replace_SG()
{
   var keyword=document.getElementById("SG").value;
   document.getElementById("2").setAttribute( "name", keyword);

   if(keyword == "CJ.PNG"){point_2 = 87;}
   if(keyword == "butler.PNG"){point_2 = 89;}
   if(keyword == "young.PNG"){point_2 = 78;}
   if(keyword == "harden.PNG"){point_2 = 94;}
   refresh_point();
}


function replace_SF()
{
   var keyword=document.getElementById("SF").value;
   document.getElementById("3").setAttribute( "name", keyword);

   if(keyword == "lebron.PNG"){point_3 = 98;}
   if(keyword == "durant.PNG"){point_3 = 97;}
   if(keyword == "leonard.PNG"){point_3 = 94;}
   if(keyword == "carter.PNG"){point_3 = 78;}
   refresh_point();
}

function replace_PF()
{
   var keyword=document.getElementById("PF").value;
   document.getElementById("4").setAttribute( "name", keyword);

   if(keyword == "davis.PNG"){point_4 = 95;}
   if(keyword == "LOVE.PNG"){point_4 = 86;}
   if(keyword == "collins2.PNG"){point_4 = 82;}
   if(keyword == "green.PNG"){point_4 = 86;}
   refresh_point();
}

function replace_C()
{
   var keyword=document.getElementById("C").value;
   document.getElementById("5").setAttribute( "name", keyword);

   if(keyword == "drummond.PNG"){point_5 = 88;}
   if(keyword == "horford.PNG"){point_5 = 85;}
   if(keyword == "adams.PNG"){point_5 = 85;}
   if(keyword == "dedmon.PNG"){point_5 = 76;}
   refresh_point();
}

function refresh_point()
{
   point = point_1 + point_2 + point_3 + point_4 + point_5;
   if(temp > point)
   {alert("真可惜 ! 你離冠軍越來越遠了 : (");}
   else if(temp < point)
   {alert("恭喜你 ! 冠軍就在眼前了 : D");}
   document.getElementById( "total" ).innerHTML = point/5;
   temp = point;
}

window.addEventListener("load", start, false);