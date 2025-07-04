var titleStatus = 0;

$(document).ready(function(){
  $('.sidenav').sidenav();
  $('.collapsible').collapsible();
  $('.materialboxed').materialbox();
  $('.slider').slider();
  setInterval(function(){
    $('.slider').slider('next');
  }, 5000)
  $('.modal').modal();
  $('.parallax').parallax();
  $('.pushpin').pushpin();

  // Initialize all collapsibles
  const collapsibles = document.querySelectorAll('.collapsible');
  M.Collapsible.init(collapsibles);

  // Check if there's a hash in the URL
  const hash = window.location.hash;
  if (hash) {
    const target = document.querySelector(hash); // Find the element with the matching ID
    if (target) {
      // Find the parent collapsible item
      const collapsibleItem = target.closest('li');
      if (collapsibleItem) {
        // Open the collapsible item
        const collapsibleInstance = M.Collapsible.getInstance(collapsibles[0]);
        const index = Array.from(collapsibleItem.parentNode.children).indexOf(collapsibleItem);
        collapsibleInstance.open(index);
      }
    }
  }
});

const animateCSS = (element, animation, prefix = 'animate__') =>
// We create a Promise and return it
new Promise((resolve, reject) => {
  const animationName = `${prefix}${animation}`;
  const node = document.querySelector(element);

  node.classList.add(`${prefix}animated`, animationName);

  // When the animation ends, we clean the classes and resolve the Promise
  function handleAnimationEnd(event) {
    event.stopPropagation();
    node.classList.remove(`${prefix}animated`, animationName);
    resolve('Animation ended');
  }

  node.addEventListener('animationend', handleAnimationEnd, {once: true});
});

// $("#listSlimeSlayer").click(function(){
//   $("#listImg").attr("src","media/slime_slayer_shotgun.png");
// }); 
// $("#listPortal").click(function(){
//   $("#listImg").attr("src","media/unreal_portal.png");
// }); 
// $("#listGalacticEmu").click(function(){
//   $("#listImg").attr("src","media/galactic_emu_bossfight.png");
// });

/* Easter egg title */
$(".easter_egg_title").click(function(){
  if(titleStatus==0) {
    $(".easter_egg_title").text('Attention, je suis fragile ! (`ー´)');
    animateCSS('.easter_egg_title', 'jello').then((message) => 
    {
      //after the animation
      titleStatus++;
    });
  }
  if(titleStatus==1) {
    $(".easter_egg_title").text('Arrête, je vais tomber !!(＃`Д´) ');
    animateCSS('.easter_egg_title', 'swing').then((message) => 
    {
      //after the animation
      titleStatus++;
    });
  }
  if(titleStatus==2) {
    $(".easter_egg_title").text('NAN MAIS SERIEUX‽');
    animateCSS('.easter_egg_title', 'wobble').then((message) => 
    {
      //after the animation
      titleStatus++;
    });
  }
  if(titleStatus==3) {
    // document.getElementById("death").play();
    $(".easter_egg_title").text('AAAAAAAAAAHHH!!!');
    animateCSS('.easter_egg_title', 'hinge').then((message) => 
    {
      //after the animation
      $(".easter_egg_title").hide();
      titleStatus++;
    });
  }
});

/* Easter egg cursor */
// $(".bepis").click(function(){
//   $('body').css('cursor', 'url("../img/bepis.png"), auto')
//   alert('bepis mmh');
// });

/*Easter egg fan art*/
// $('.sus').hover(function(){
//   document.getElementById("boom").play();
//   $(this).attr('src','img/the_rock.jpg');
// });

/* Easter egg tea*/
// $(".tea").click(function(){
//   document.getElementById("slurp").play();
//   console.log('teatime');
// });