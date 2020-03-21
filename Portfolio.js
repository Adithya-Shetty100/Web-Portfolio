$(function () {
    $(document).scroll(function () {
        var $nav = $("#header");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});

// var t= document.querySelector(".response");
var n=0,n1=0,n2=0,n3=0,n4=0;
var t= document.querySelector(".select");
var t1= document.querySelector(".select1");
var t2= document.querySelector(".select2");
var t3= document.querySelector(".select3");
var t4= document.querySelector(".select4");

var meg=document.querySelector(".top");


meg.addEventListener("mouseover",function(){
    meg.style.color="red";
    meg.style.fontSize= "1.75rem";
});

meg.addEventListener("mouseout",function(){
   meg.style.color="white";
    meg.style.fontSize= "1.25rem";
 });


//  if (screen.width < 1070 && screen.width > 713) {
    // to change properties within that width

    t.addEventListener("click",function(){
        n++;
        t.innerHTML= ' <i class="far fa-heart"></i> '+ n  ;   
    });  

    t1.addEventListener("click",function(){
        n1++;
        t1.innerHTML= ' <i class="far fa-heart"></i> '+ n1  ;   
    });  
    t2.addEventListener("click",function(){
        n2++;
        t2.innerHTML= ' <i class="far fa-heart"></i> '+ n2  ;   
    });  
    t3.addEventListener("click",function(){
        n3++;
        t3.innerHTML= ' <i class="far fa-heart"></i> '+ n3  ;   
    });  

    t4.addEventListener("click",function(){
        n4++;
        t4.innerHTML= ' <i class="far fa-heart"></i> '+ n4  ;   
    });  

    
    $(document).ready(function(){

        $(".float-left ").hover(
            //mouseover
            function(){
                $(this).animate({
                    marginTop: "-=1%",
                },200);
            },

            //mouise-out
            function(){
                $(this).animate({
                    marginTop: "0%",
                },200);

            }
        )
    })

    $(document).ready(function(){

        $("h2").hover(
            //mouseover
            function(){
                $(this).animate({
                    marginTop: "-=1%",
                },200);
            },

            //mouise-out
            function(){
                $(this).animate({
                    marginTop: "0%",
                },200);

            }
        )
    })

    $('body').scrollspy({ target: '#header' })
  