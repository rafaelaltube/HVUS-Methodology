$(document).ready(function(){
  // CONGRATULATIONS ANIMATE
// Click "Congratulations!" to play animation

$(function() {
  var numberOfStars = 20;

  for (var i = 0; i < numberOfStars; i++) {
    $('.congrats').append('<div class="blob fa fa-star ' + i + '"></div>');
  }

  animateText();

  /*animateBlobs();*/
});

$('.congrats').click(function() {
  //console.log('congrats click function');
  reset();

  animateText();

  /*animateBlobs();*/
});

function reset() {
  console.log('reset');
  $.each($('.blob'), function(i) {
    TweenMax.set($(this), {
      x: 0,
      y: 0,
      opacity: 1
    });
  });

  TweenMax.set($('h1'), {
    scale: 1,
    opacity: 1,
    rotation: 0
  });
}

function animateText() {
  //console.log('animate text');
  TweenMax.from($('h5'), 0.8, {
    scale: 0.4,
    opacity: 0,
    rotation: 15,
    ease: Back.easeOut.config(4),
  });
}

function animateBlobs() {

  var xSeed = _.random(350, 380);
  var ySeed = _.random(120, 170);

  $.each($('.blob'), function(i) {
    var $blob = $(this);
    var speed = _.random(1, 5);
    var rotation = _.random(5, 100);
    var scale = _.random(0.8, 1.5);
    var x = _.random(-xSeed, xSeed);
    var y = _.random(-ySeed, ySeed);

    TweenMax.to($blob, speed, {
      x: x,
      y: y,
      ease: Power1.easeOut,
      opacity: 0,
      rotation: rotation,
      scale: scale,
      onStartParams: [$blob],
      onStart: function($element) {
        $element.css('display', 'block');
      },
      onCompleteParams: [$blob],
      onComplete: function($element) {
        $element.css('display', 'none');
      }
    });
  });
}




  var holder=[];
  var arrRandoms=[];
  $("p").hide();
  /*randomize();
    sliceNum();
    turnTheSlot();
    reset();*/
  $("#button-sorteo").click(function(){
    var num = $("#button-sorteo").attr("num");
    var button = $("#bigholder")

    randomize(num);
    sliceNum();
    turnTheSlot(num);
    if(num == 3){
        $("#button-sorteo").attr("num","6");
    }else if(num == 6){
        $("#button-sorteo").attr("num","9");
    }else if(num == 9){
        $("#button-sorteo").prop("disabled", true);
        $("#button-sorteo").css("display", "none");
        $("#congrats").css("display", "block");
        $("#congrats").click();
        $(".to-bottom").css("display", "block");
        $(".sorteo-especial").css("display", "block");
    }
    reset();
  });

 function randomize(num){
   var randomm=Math.floor(Math.random()*999); /*  *999999 */
   var random;
   
   /*if(randomm===0 ){random="000000"}
   else if(randomm<10  ){random="00000"+randomm;}
   else if(randomm<100 ){random="0000"+randomm;}
   else if(randomm<1000){random="000"+randomm;}
   else if(randomm<10000){random="00"+randomm;}
   else if(randomm<10000){random="0"+randomm;}
   else{random=randomm}*/
    
    var val3 = $("#bigholder3").attr("val");
    var val2 = $("#bigholder2").attr("val");
    var val1 = $("#bigholder1").attr("val");

    /*if(num == 3){

      random = 100;
      console.log('Entra en 100... val: '+val3+'...... random: '+random);
    }else{*/
      random=randomm;
    /*}*/

    //random=randomm;
    if(random>=240 || random == 0){
      //console.log('numero >=240 or 0... '+random);
      randomize(num);
    }else if(random == val1 || random == val2 ||random == val3){
      console.log('numero repetido... '+random);
      randomize(num);
    }else{
        
      if(randomm<100){random="0"+randomm;}
      if(randomm<10){random="00"+randomm;}


      $("p").text(random);
      if(num == 3){
          $("#bigholder3").attr("val",random);
      }else if(num == 6){
          $("#bigholder2").attr("val",random);
      }else if(num == 9){
          $("#bigholder1").attr("val",random);
      }
      console.log('generate number... '+ random );
    }
   
 }//function randomize

  function sliceNum(){
    var theNUM=$("p").text();
    for(var i=0;i<6;i++){
      var valu=theNUM.slice(i,i+1);
      holder.push(valu);
    }
  }//function slice it

  function reset(){
    holder.length=0;
  }

 function turnTheSlot(num){
    if(num == 3){
      var x=0;
    }else{
      var x = num-3;
    }

    for(var i=x;i<num;i++){
      if(num==3){
        var theValue=holder[i];
      }else if(num==6){
        var theValue=holder[i-3];
      }else if(num==9){
        var theValue=holder[i-6];
      }
      
      var margin=100*theValue;
      /*if(holder[0] == 0 && holder[i] == 0){
        $("#"+i+"").css("margin-top","100px");
      }else{
        $("#"+i+"").css("margin-top","-"+margin+"px");
      }*/
      $("#"+i+"").css("margin-top","-"+margin+"px");
   }
 }
});
// https://codepen.io/nourikarita/pen/RRJXQx
// Another type: https://codepen.io/anon/pen/QGENyM+

/* =======================================
===       ARROW TO BOTTOM ON/OFF      ====
========================================== */
//arrow on/off with scroll
$(window).scroll(function(){

    /*if ($(this).scrollTop() == 1){
      var offset = 20; //Offset of 20px
        $('html, body').animate({
            scrollTop: $("#bg-dilmot").offset().top + offset
        }, 2000);
    }*/

    if ($(this).scrollTop() > 1){ 
        $('.to-bottom').addClass('hidden');
    }
    else{
        $('.to-bottom').removeClass('hidden');
    }
});

$('.to-bottom').click(function(){

  //alert('click');
  var offset = 120; //Offset of 20px
  $('html, body').animate({
      scrollTop: $("#sorteo-especial").offset().top + offset
  }, 2000);

});