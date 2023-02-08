


    $(document).ready(function(){
        $(window).scroll(function(){
    var p = $(document).scrollTop();
        console.log(p)
        if (p > 130){
            $(".nav-3").addClass("white")
        }
    else{
        $(".nav-3").removeClass("white")
    
    }
        })
    })
// animation start
    $(window).scroll(function () {
        var positiontop = $(document).scrollTop();
        console.log(positiontop);
        if ((positiontop > 100) && (positiontop < 300)) {
            $(".latest .container").addClass(" animate__animated animate__fadeInUp");
        }

        if ((positiontop > 322) && (positiontop < 560)) {
            $(".about .container .one").addClass(" animate__animated animate__fadeInLeft");

            $(".about .container .two").addClass(" animate__animated animate__fadeInUp");

            $(".about .container .three").addClass(" animate__animated animate__fadeInDown");

            $(".about .container .four").addClass(" animate__animated animate__fadeInRight");
        }
    
    });

// scroll section start
    // $(window).scroll(function(){
    //     var b = $(document).scrollTop() 
    //     console.log(b)
    
    // if(b > 200){
    //     $(".fa-arrow-up").show();
    // }else{
    //     $(".fa-arrow-up").hide();
    // }
    
    // $(".top-scroll").click(function(){
    //     $("html").animate({scrollTop:0},1000)
        
    //         })   
        
    //     })

// scrolla and


console.log("hello");
let bars = document.querySelector("#bars i.fa-bars");
let ul = document.querySelector(".nav-3");


bars.addEventListener("click", () => {
bars.classList.toggle("fa-times");
ul.classList.toggle("active");
})
 
// header scroll start
    let header = document.querySelector(".header");
let top_scroll = document.querySelector(".fa-arrow-up");
const fun = () => {
    header.scrollIntoView({behavior:"smooth"});
}

top_scroll.addEventListener("click", fun);

// header scroll start


// all window close

window.addEventListener("load", () => {
    bars.classList.remove("fa-times");
    ul.classList.remove("active");   
})

    
   


function search(){
    let filter = document.getElementById("input").value.toUpperCase();
    let mytable = document.getElementById("table");
   
   let tr = mytable.getElementsByTagName("tr");
   for(var i = 0; i<tr.length; i++){
       let td = tr[i].getElementsByTagName("td")[0];
       if(td){
        let value = td.textContent || td.innerHTML;  
        if (value.toUpperCase().indexOf(filter) > -1){
            tr[i].style.display=""; 
        }else{
            tr[i].style.display="none";
  
        }
       }
   }
}

 let b = search()
 console.log(b)






