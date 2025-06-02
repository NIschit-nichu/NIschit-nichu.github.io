var tl = gsap.timeline()
tl.from("#nav",{
    opacity:0,
    y:-30,
    duration:2,
    delay:1,
   
})
tl.from("#part h4",{
    
    opacity:0,
    duration:2,
    y:-30,
    stagger:0.3,
  
})
tl.from("h1",{
    opacity:0,
    duration:2,
    delay:0.5,
    y:-30,

})
gsap.from("#page1 #pop",{
    x:-750,
    scale:0,
    duration:2,
    scrollTrigger:{
        trigger:"#page1 #pop",
        scroller:"body",
        start:"top 70%",
        end:"top 50%",
        scrub:2,
       

    }
})
gsap.to("#page2 h2",{
    transform:"translateX(-150%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true,

    }
})
var initialPath=`M 10 100 Q 540 100 1360 100`
var finalPath=`M 10 100 Q 540 100 1360 100`
var string=document.querySelector("#sp3")
string.addEventListener("mousemove",function(dets){
    path=`M 10 100 Q ${dets.x} ${dets.y} 1360 100`
    gsap.to("svg path",{
        attr:{ d : path},
        ease:"power3.out",
        duration:0.3,
    })
})
string.addEventListener("mouseleave",function(){

gsap.to("svg path",{
    attr:{ d : finalPath},
    duration:1.5,
    ease:"elastic.out(1,0.2)"
})
})
var main=document.querySelector("#main")
var cursor=document.querySelector("#cursor")
 main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.3,
    })
    
 })

