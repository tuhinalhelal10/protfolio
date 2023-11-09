






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
}