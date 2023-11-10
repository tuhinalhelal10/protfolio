



// ================== Side bar =================================
const navMenu = document.getElementById('sidebar'),
      navToggle = document.getElementById('nav-toggle');
      navClose = document.getElementById('nav-close')


      if(navToggle){
        navToggle.addEventListener("click",() =>{
            navMenu.classList.add('show-sidebar')
        })
      }

      if(navClose){
        navClose.addEventListener("click",() =>{
            navMenu.classList.remove('show-sidebar')
        })
      }


// =========================== Skills tabs ===============
const tabs = document.querySelectorAll('[data-target]'),
      tabContent = document.querySelectorAll('[data-content]')

      tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = document.querySelector(tab.dataset.target)

            tabContent.forEach(tabContents =>{
                tabContents.classList.remove('skills_active')
            })

            target.classList.add('skills_active')

            tabs.forEach(tab => {
                tab.classList.remove('skills_active')
            })

            tab.classList.add('skills_active')
        })
      })

    //   ============================Mixiup filter portfolio=============

    var mixerPortfolio = mixitup('.work_container', {
        selectors: {
            target: '.work_card'
        },
        animation: {
            duration: 300
        }
    });

    // ================== link active work ==============================
    const linkWork = document.querySelectorAll('.work_item')

    linkWork.forEach(linkWorks =>{
        linkWorks.addEventListener('click', () =>{
            document.querySelector('.active_work')?.classList.remove('active_work');
            linkWorks.classList.add('active_work');
        })
    })
//   ================work popup======================================
document.addEventListener("click",(e) =>{
    if(e.target.classList.contains("work_button")){
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup() {
    document.querySelector(".portfolio_popup").classList.toggle("open");
}


document.querySelector(".protfolio_popup-close").addEventListener("click", togglePortfolioPopup)


function portfolioItemDetails(portfolioItem){
    document.querySelector(".pp_thumbnail img").src = portfolioItem.querySelector(".work_img").src;
    document.querySelector(".portfolio_popup-subtitle span").innerHTML = portfolioItem.querySelector(".work_title").innerHTML;
    document.querySelector(".portfolio_popup-body").innerHTML = portfolioItem.querySelector(".portfolio_item-details").innerHTML;
}

// ===================== Services modal =============================
const modalViews = document.querySelectorAll('.services_modal'),
      modelBtns = document.querySelectorAll('.services_button')
      modalcloses = document.querySelectorAll('.services_modal-close')


let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-model')
}

modelBtns.forEach((modelBtn, i) => {
    modelBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalcloses.forEach((n) => {
    n.addEventListener("click", () => {
        modalViews.forEach((e) => {
            e.classList.remove('active-model')
        })
    })
})

// =============== Swiper Silaid ================================
let swiper = new Swiper(".testimonals_container", {
    spaceBetween: 24,
    Loop:true,
    grabCursor:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
      },
  });


//   ============================= Input animiton ======================
const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");  
}

function blurFunc() {
    let parent = this.parentNode;
    if(this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) =>{
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
})


// ===================Scroll active ber ==========================
// get all all section that have an id defined
const sections = document.querySelectorAll("section[id");
// get all listener listening  for scroll
window.addEventListener("scroll",navHighlighter);

function navHighlighter()
{
    // get current scroll position
    let scrollY = window.pageYOffset;
    // Now we loop through section to get height, top and ID for each
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const seconTop = current.offsetTop - 50,
        sectionId = current.getAttribute("id");

        if(scrollY > seconTop && scrollY <= seconTop + sectionHeight)
        {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add("active_link")
        }
        else
        {
            document.querySelector('.nav_menu a[href*=' + sectionId +']').classList.remove("active_link")
        }
    }) 
}


    