const btn = document.getElementById('menu-button');
const srch = document.getElementById('search-icon');
const navList = document.getElementById('mobile-menu-container');
const srchList = document.getElementById('nav-bar-search');
const header = document.getElementById('header')
const mnM = document.getElementById('mobile-nav-main')
const mobM = document.getElementById('mobile-menu')
const mobN = document.getElementById('mobile-nav')
const bannerImg = document.getElementById('hmbannerImg')
const rIcons = document.getElementById('r-icons')
const mHead = document.getElementById('header-m')
const megaM = document.getElementById('mega-menu')
const shop = document.getElementById('mega-toggle')
const navL = document.getElementById('nav-bar-right-links')
const mSrch = document.getElementById('mSearchI')
const closeAnn = document.getElementById('closeAnn')
const annBar = document.getElementById('annBar')

closeAnn.addEventListener('click', close)

function close(){
    annBar.style.display = "none"
}

window.addEventListener('scroll', function(){
            if(bannerImg.getBoundingClientRect().bottom <= 50){
            mobM.classList.add('scrolled')
            mobN.classList.add('scrolled')
            mnM.classList.add('scrolled')
            rIcons.classList.add('scrolled')
        } else if(bannerImg.getBoundingClientRect().bottom >= 50) {
            mobM.classList.remove('scrolled')
            mobN.classList.remove('scrolled')
            mnM.classList.remove('scrolled')
            rIcons.classList.remove('scrolled')
        }
})

window.addEventListener('scroll', function(){
    if(bannerImg.getBoundingClientRect().bottom <= 50){
        mHead.classList.add('scrolled')
        navL.classList.add('scrolled')
} else if(bannerImg.getBoundingClientRect().bottom >= 50) {
    mHead.classList.remove('scrolled')
    navL.classList.remove('scrolled')

}
})
   

btn.addEventListener('click', function(){
    if( navList.classList == "untoggled"){
        mobM.classList.add('scrolled')
        mobN.classList.add('mscrolled')
        mnM.classList.add('scrolled')
        rIcons.classList.add('scrolled')
        navList.classList = "toggled";
    } else if(navList.classList == "toggled"){
         navList.classList = "untoggled"
         mobM.classList.remove('scrolled')
         mobN.classList.remove('scrolled')
         mnM.classList.remove('scrolled')
         rIcons.classList.remove('scrolled')
    }

})

srch.addEventListener('click', function(){
    if( srchList.classList == "untoggled"){
        mobM.classList.add('scrolled')
        mobN.classList.add('mscrolled')
        mnM.classList.add('scrolled')
        rIcons.classList.add('scrolled')
        srchList.classList = "toggled";
    } else if(srchList.classList == "toggled"){
         srchList.classList = "untoggled"
         mobM.classList.remove('scrolled')
         mobN.classList.remove('scrolled')
         mnM.classList.remove('scrolled')
         rIcons.classList.remove('scrolled')
    }

})

mSrch.addEventListener('click', function(){
    if( srchList.classList == "untoggled"){
        srchList.classList = "toggled";
        mHead.classList.add('scrolled')
    } else if (srchList.classList == "toggled"){
       srchList.classList = "untoggled"
        mHead.classList.remove('scrolled')
    }
})

shop.addEventListener("mouseenter", startHover);
shop.addEventListener("click", function(){
    if(megaM.style.display == "none"){
        mHead.classList.add('scrolled')
        megaM.style.display ="block"
    } else if (megaM.style.display == "block"){
        megaM.style.display = "none"
        mHead.classList.remove('scrolled')
    }
})


function startHover(){
    megaM.style.display = "block";
    mHead.classList.add('scrolled')
}

function stopHover(){
    setTimeout(() => {
    megaM.style.display = "none";
    mHead.classList.remove('scrolled')
}, 1000);
}

