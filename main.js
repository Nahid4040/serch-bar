// porfoliofilter

// const filterContainer = document.querySelector(".portfolio-filter"),
//       filterBtns = filterContainer.children,
//       totalFilterBtn = filterBtns.length,
//       portfolioItems = document.querySelectorAll(".porfolio-item"),
//       portfolioItemsTotal = portfolioItems.length;
      
      
      
//       for(let i=0;i<totalFilterBtn;i++){
//         filterBtns[i].addEventListener("click",function(){
//             filterContainer.querySelector(".active").classList.remove("active");
//             this.classList.add("active");
           

//             const filterValue = this.getAttribute("data-filter");
           
//            for(let k=0;k<portfolioItemsTotal;k++){
//             if(filterValue === portfolioItems[k].getAttribute("data-category")){
//                 portfolioItems[k].classList.remove("hide");
//                 portfolioItems[k].classList.add("show");
//             }else{
//                 portfolioItems[k].classList.remove("show");
//                 portfolioItems[k].classList.add("hide");
//             }
//             if(filterValue==="all")
//               { portfolioItems[k].classList.remove("hide");
//             portfolioItems[k].classList.add("show");}
//            }
//         })
//       }
      

//       //portfolio lightbox

//       const lightbox = document.querySelector(".lightbox"),
//         lightboxImag = lightbox.querySelector(".lightbox-img"),
//         lightboxClose = lightbox.querySelector(".lightbox-close"),
//         lightboxText = lightbox.querySelector(".lightbox-text"),
//         lightboxCounter = lightbox.querySelector(".lightbox-count");
      
//     let itemIndex=0;

  

//     for(let i=0;i<portfolioItemsTotal;i++){
//         portfolioItems[i].addEventListener("click", ()=>{
//             itemIndex=(i);

//             imgLocation();
//             toggleLightbox();
//         })
//     }


//     function nextItem(){
//         if(itemIndex === portfolioItemsTotal-1){
//             itemIndex=0;
//         }else{
//             itemIndex++;
//         }imgLocation();
//     }


//     function prevItem(){
//         if(itemIndex === 0){
//             itemIndex=portfolioItemsTotal-1;
//         }else{
//             itemIndex--;
//         }imgLocation();
//     }







//     function toggleLightbox(){
//         lightbox.classList.toggle("open");
//     }

//     function imgLocation(){
//         imgSrc = portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
//         lightboxImag.src=imgSrc;
//         lightboxCounter.innerHTML = (itemIndex+1 ) + " of " + portfolioItemsTotal;
//         lightboxText.innerHTML = portfolioItems[itemIndex].querySelector("h4").innerHTML;
//         console.log(imgSrc);
       
//     }


//     lightbox.addEventListener("click",function(event){
//        if(event.target === lightbox  || event.target === lightboxClose){
//         toggleLightbox();
//        }
//     })

    // prectice........................................................
      
      const portfolioFilter = document.querySelector(".portfolio-filter"),
            portfolioBtn = portfolioFilter.children,
            totalPortfolio = portfolioBtn.length,
            portfolioItem = document.querySelector(".porfolio-all"),
            portfolioTotalItem = portfolioItem.children,
            totolaLength = portfolioTotalItem.length;
            




            for(let i=0;i<totalPortfolio;i++) {
                
                portfolioBtn[i].addEventListener("click", function(){
                    const portfolioValue = this.getAttribute("data-filter")
                    portfolioFilter.querySelector(".active").classList.remove("active");
                    this.classList.add("active");
                   


                    
            for(let k=0;k<totolaLength;k++) {
              if (portfolioValue ===  portfolioTotalItem[k].getAttribute("data-category") ) {
                portfolioTotalItem[k].classList.remove("hide");
                portfolioTotalItem[k].classList.add("show");
              }else{
                portfolioTotalItem[k].classList.add("hide");
                portfolioTotalItem[k].classList.remove("show");
              }
              if(portfolioValue === "all"){
                portfolioTotalItem[k].classList.remove("hide");
                portfolioTotalItem[k].classList.add("show");
              }
                
            }
       })
               
 }

//    lightbox.....................

   const lightbox = document.querySelector(".lightbox"),
         lightboxImg = lightbox.querySelector(".lightbox-img"),
         lightboxClose = lightbox.querySelector(".lightbox-close"),
         lightboxCounter = lightbox.querySelector(".lightbox-count"),
         lightboxText = lightbox.querySelector(".lightbox-text");
          
         let itemIndex = 0;
          

         for(let t=0; t<totolaLength; t++) {
            portfolioTotalItem[t].addEventListener("click", function(){
               itemIndex = (t);

                imglocation();
                toggoleLightbox();
            })
         }
// change img...............
    function nextItem() {
        if(itemIndex === totolaLength-1){
            itemIndex=0;
        }else{
            itemIndex++;
        }imglocation();
    }




   function prevItem(){
       if(itemIndex === 0){
           itemIndex =totolaLength-1;
       }else{
           itemIndex--;
       }imglocation();
   }


// lightbox open.................


     function  toggoleLightbox(){
             lightbox.classList.toggle("open");
         }     
         
    function imglocation() {
        imgsrc = portfolioTotalItem[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
        lightboxImg.src = imgsrc;
        lightboxCounter.innerHTML = (itemIndex+ 1 )+ " of " +     totolaLength;
        lightboxText.innerHTML = portfolioTotalItem[itemIndex].querySelector("h4").innerHTML;
        
    }


    // lightbox close.....

    lightboxClose.addEventListener("click" , function(){
        if(lightboxClose){
            lightbox.classList.remove("open");
        }
    })

    // backTotop btn


    const backToTop = document.getElementById("backToTop");


    window.addEventListener("scroll", function(){
      

     if(window.pageYOffset > 2000) { 
        if(!backToTop.classList.contains("btnEnter")){
            backToTop.classList.remove("btnExit");
            backToTop.classList.add("btnEnter");
            backToTop.style.display = "block"; //show btn
           }
      
     }else{ 
        if(backToTop.classList.contains("btnEnter")){
            backToTop.classList.remove("btnEnter");
            backToTop.classList.add("btnExit");
            setTimeout(function(){
                backToTop.style.display = "none";//hide btn
            },333);
           
        }
       
     }
    })

    backToTop.addEventListener("click", function(){
        window.scrollTo(0,0);
    })


    // // const drk = document.getElementById("drk");

    // // drk.addEventListener("click", function(){
    // //    if(drk){
    // //        body.classList.add("drk")
    // //    }
    // // })

    // var body = document.body;

    // body.classList.add("drk");









    // ........style.........
const links = document.querySelectorAll(".alter-native"),
      totalLinks = links.length;
      

   function setActiveStyle(color){
      for(let i=0; i<totalLinks;i++){
          if(color === links[i].getAttribute("title") ){
              links[i].removeAttribute("disabled");
          }
          else{
            links[i].setAttribute("disabled", true)
          }
      }
   }


   document.querySelector(".toggle-style-switch").addEventListener("click", function(){
        document.querySelector(".style-switch").classList.toggle("open");
       
   })


   const bodySkin = document.querySelectorAll(".bodyClor"),
         totalBodySkin = bodySkin.length;
        

         for(let i=0;i<totalBodySkin;i++) {
            bodySkin[i].addEventListener("change" , function(){
                if(this.value === "dark" ) {
                    document.body.classList.add("dark");
                }
                else{
                    document.body.classList.remove("dark")
                }
            })
         }


// .....nav...


const nav = document.querySelector(".nav"),
      navLinks = nav.querySelectorAll("li"),
      totalNavLinks = navLinks.length,
      allSection = document.querySelectorAll(".section"),
      totalsection = allSection.length;



      for(let i=0; i<totalNavLinks;i++){
    const a = navLinks[i].querySelector("a");

        a.addEventListener("click",function(){

            for(let k=0;k<totalNavLinks;k++){
                if(navLinks[k].querySelector("a").classList.contains("active")){
                    allSection[k].classList.add("back-section");
                 
                }
                navLinks[k].querySelector("a").classList.remove("active");
            }
            this.classList.add("active");
            showitem(this);
            if(window.innerWidth < 1200){
                asidefor();
            }
        })
        //  a = navLinks[i].querySelector("a").getAttribute("href");
      }
    //   console.log(a)
     

   function showitem(element){
       for(let i=0;i<totalsection;i++){
       allSection[i].classList.remove("active")
       }
       const href = element.getAttribute("href").split("#")[1];
       document.querySelector("#"+href).classList.add("active")
      
   }



   const navToggleBtn = document.querySelector(".nav-toggole"),
         aside = document.querySelector(".aside");

         navToggleBtn.addEventListener("click", asidefor);
            
         
         
         function asidefor(){      
         aside.classList.toggle("open");
             navToggleBtn.classList.toggle("open");
             for(let i=0;i<totalsection;i++){
                allSection[i].classList.toggle("open");
                }
        
            }