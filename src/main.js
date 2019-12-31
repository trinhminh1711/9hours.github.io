import Vue from '../node_modules/vue/dist/vue.js';
import app from './app.vue';


new Vue(
    {
        el: '#app',

        render: h => h(app),

    }
)




var app4 = new Vue({
    el: '#search-header',
    data: {
      message: 'Hello Vue!'
    },
    methods:
    {
        testapi: function()
                {

        var text = document.getElementById("search-input").value;
        var c = text.toLowerCase();
        var d = ["vườn" , "làm" ,"garden", "ruộng" , "fammer"];
        var test = d.some(el => c.includes(el));

        if(test==true)
        {
        document.getElementById('main-backgrond').style.display = 'none';
        document.getElementById('menu-tholamvuon').style.display = 'block';
        document.getElementById('end-footer').style.display = 'block';


        }
            if(window.innerWidth<700)
        {

        overlay.display = 'block';
        document.getElementById('overlay-search').setAttribute ("class","style10");

                if(test==true)
            {
            search2();

            }


        }
                }
    }

  })


window.search = search
var slideIndex = 1;
function numberpage()
{
if((slideIndex==5||slideIndex==10||slideIndex==15) && slideIndex <= 8 )

{
dots[0].innerHTML = slideIndex; 

dots[1].innerHTML = slideIndex+1; 
dots[2].innerHTML = slideIndex+2; 
dots[3].innerHTML = slideIndex+3; 
dots[4].innerHTML = slideIndex+4; 


}
}
function numberpage2()
{
if((slideIndex==5||slideIndex==10||slideIndex==15) && slideIndex <= 8)

{
dots[0].innerHTML = slideIndex-4; 

dots[1].innerHTML = slideIndex-3; 
dots[2].innerHTML = slideIndex-2;  
dots[3].innerHTML = slideIndex-1; 
dots[4].innerHTML = slideIndex; 



}

}

showSlides(slideIndex);

function plusSlides() {
if(slideIndex >= 8)
{
  slideIndex = 8;
}

showSlides(slideIndex += 1);


numberpage();

}
function prevSlides() 
{

showSlides(slideIndex -= 1);
numberpage2();

} 

function currentSlide(event) 
{
var k =(event.target.id);
var n =  parseInt(document.getElementById(k).innerHTML);
showSlides(slideIndex = n);
numberpage();


}
var dots = document.getElementsByClassName("dot");
function showSlides(n) 
{

var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");

if (n<1)
{
  slideIndex = 1;
}
for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
   
}



for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
  if(slideIndex<=slides.length)
{
slides[slideIndex-1].style.display = "block";  
  if(slideIndex>=5)
  {
    dots[slideIndex-5].className += " active";
  }
  else
{
dots[slideIndex-1].className += " active";
}
}
else
{
slides[(slides.length-1)].style.display = "block";  
dots[4].className += " active";
}


}

var x1 =   document.getElementById('menu1');
var y =   document.getElementById('body');
var k =   document.getElementById('product');
var m =   document.getElementById('button-new');


m.addEventListener("mouseover", function(){
document.getElementById('menu1').style.display = 'block';
});

x1.addEventListener("mouseout" ,function(){
document.getElementById('menu1').style.display = 'none';

});
x1.addEventListener("mouseover",function(){
document.getElementById('menu1').style.display = 'block';
});

document.getElementById('header-login').addEventListener("mouseover",function()
{


    document.getElementById('menu1').style.display = 'none';
    document.getElementById('product').style.display = 'none';

}
)


document.getElementById('button-new2').addEventListener("mouseover", function(){
document.getElementById('product').style.display = 'block';
document.getElementById('menu1').style.display = 'none';
});


document.getElementById('product').addEventListener("mouseover", function(){
document.getElementById('product').style.display = 'block';
});


document.getElementById('product').addEventListener("mouseout" ,function(){
document.getElementById('product').style.display = 'none';
});


var x =document.getElementById("living-room-change").innerHTML;
var y =document.getElementById("living-room2-change").innerHTML;
var livingroom3 = document.getElementById("living-room").innerHTML;
var kitchenroom3 = document.getElementById("living-room2").innerHTML;
function kitchenroom()
{

document.getElementById("living-room").innerHTML =x;
document.getElementById("living-room2").innerHTML =y;

}
function livingroom()
{
document.getElementById("living-room").innerHTML = livingroom3;
document.getElementById("living-room2").innerHTML = kitchenroom3 ;
}
var menu_222 = document.getElementById('menu-tholamvuon').style;



function search()
{
  var text = document.getElementById("search-input").value;
  var c = text.toLowerCase();
  var d = ["vườn" , "làm" ,"garden", "ruộng" , "fammer"];
  var test = d.some(el => c.includes(el));

if(test==true)
{
document.getElementById('main-backgrond').style.display = 'none';
document.getElementById('menu-tholamvuon').style.display = 'block';
document.getElementById('end-footer').style.display = 'block';


}
    if(window.innerWidth<700)
{

   overlay.display = 'block';
   document.getElementById('overlay-search').setAttribute ("class","style10");

         if(test==true)
    {
      search2();

    }

}
}

function gohome(){
  document.getElementById('main-backgrond').style.display = 'block';
document.getElementById('menu-tholamvuon').style.display = 'none';
document.getElementById('end-footer').style.display = 'block';

}


function search2()
{
 var buttonoutlin = document.getElementsByClassName("btn-outline");

 var text = document.getElementById("search-input2").value;
  var c = text.toLowerCase();
  var d = ["vườn" , "làm" ,"garden", "ruộng" , "fammer"];
  var test = d.some(el => c.includes(el));
       document.getElementById('main-backgrond').style.display = 'none';
      document.getElementById('menu-tholamvuon').style.display = 'block';
      for(var i=3;i<buttonoutlin.length;i++)
      {
        buttonoutlin[i].style.display = 'none';


      }

      document.getElementById('end-footer').style.display = 'block';
      document.getElementById('menu-footer').style.display = 'block';


}

var user1= document.getElementById('user-1').innerHTML;
var user2= document.getElementById('user-2').innerHTML;
var tg = document.getElementById('user-2').innerHTML;

function login()
{   
document.getElementById('login-content').style.display = 'block';
document.getElementById('login-sceen').setAttribute("class", "style1");
}
function logout()
{   
document.getElementById("user-2").innerHTML = tg;
}

function login2()
{
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if(username == "admin" && password == "123456")
{ 
  document.getElementById('user-2').innerHTML = document.getElementById('user-1').innerHTML;
    document.getElementById('login-content').style.display = 'none';
  document.getElementById('login-sceen').setAttribute("class", "style2");

}
else
{
  alert("sai username hoặc password");
  document.getElementById("username").innerHTML='';
  document.getElementById("password").innerHTML='';
}
}


var check = 0;


window.addEventListener('click', function(e)
{
if(document.getElementById('menu-dropdown').contains(e.target))
{
     document.getElementById('dropdown-screen').setAttribute("class", "style5");
     check ++;
       overlay.display='block';
}
else
{
  if(check>0)
  {
 document.getElementById('dropdown-screen').setAttribute("class", "style6");

  }
}
    
}
)

var menu_dropdown =document.getElementsByClassName('menu-1');
var ab =document.getElementsByClassName('ab');
var overlay = document.getElementById('overlay').style;



document.getElementById('ab1').addEventListener("click", function()
{
if(menu_dropdown[0].style.display == 'block')
{

menu_dropdown[0].style.display = 'none';

document.getElementById('ab1').setAttribute("class", "style9");

}
else
{
      for(i=0;i<menu_dropdown.length;i++)
  {
    menu_dropdown[i].style.display=null;
    document.getElementById('ab2').setAttribute("class","style9");

  }

  menu_dropdown[0].style.display = 'block';
document.getElementById('ab1').setAttribute("class", "style8");

}

});
document.getElementById('ab2').addEventListener("click", function()
{
if(menu_dropdown[1].style.display == 'block')
{

menu_dropdown[1].style.display = 'none';

 document.getElementById('ab2').setAttribute("class", "style9");

}
else
{
  for(i=0;i<menu_dropdown.length;i++)
  {
    menu_dropdown[i].style.display=null;
     document.getElementById('ab1').setAttribute("class","style9");

  }

  menu_dropdown[1].style.display = 'block';
  document.getElementById('ab2').setAttribute("class", "style8");

}

});


var overlay_search2 = document.getElementById('overlay-search').style;
function off() 
{

overlay.display='none';

document.getElementById('overlay-search').setAttribute("class", "style2");

}



const scriptURL = 'https://script.google.com/macros/s/AKfycby7LfanZe_BjrD2W9LUND_06Q0hWJNtZxEiWcissrq41VmwWA5W/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>alert('Success!', response))
    .catch(error => console.error('Error!', error.message))
    document.getElementById('username').value='';
       document.getElementById('password').value='';
          document.getElementById('c').value='';
})





     















