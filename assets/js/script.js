const companyBtn = document.getElementById("companyBtn")
const featuresBtn = document.getElementById("featuresBtn")
const featuresMenu = document.querySelector(".features__dropdown")
const companyMenu = document.querySelector(".company__dropdown")
const burgerBtn = document.querySelector(".header__burger")
const mobileMenu = document.querySelector(".mobile__menu")
const overlay = document.querySelector(".overlay")
const mobileCompanyBtn = document.querySelector(".mobile-company-dropdown")
const mobileFeaturesBtn = document.querySelector(".mobile-features-dropdown")
mobileCompanyBtn.addEventListener("click",function(){
    document.querySelector(".mobile__menu__content__company__dropdown").classList.toggle("open")
})
mobileFeaturesBtn.addEventListener("click",function(){
    document.querySelector(".mobile__menu__content__features__dropdown").classList.toggle("open")
})
companyBtn.addEventListener("click", function () {
    companyMenu.classList.toggle("open")    
})
featuresBtn.addEventListener("click", function () {
    featuresMenu.classList.toggle("open")
})

document.addEventListener("click",function(e){
    if(!companyBtn.contains(e.target) && !companyMenu.contains(e.target)){
        companyMenu.classList.remove("open")
    }
    if(!featuresBtn.contains(e.target) && !featuresMenu.contains(e.target)){
        featuresMenu.classList.remove("open")
    }
})

burgerBtn.addEventListener("click",function() {
    this.classList.toggle("expanded")
    mobileMenu.classList.toggle("openedMobileMenu")
    overlay.classList.toggle("overlayVisible")
})