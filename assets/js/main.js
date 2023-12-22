const scrollToUpBtn=document.querySelector(".scroll-to-up");
const headerSection=document.querySelector(".js");
const closeButton = document.querySelector(".exit");
const popup = document.getElementById("snow-conrainer");
const exitButton = document.querySelector('.exit-bar');
const siteAnnouncement = document.getElementById('siteAnnouncement');
const searchBar=document.getElementById('searchBar');
const searchIcon=document.querySelector('.search-icon');
const exitSearch=document.querySelector('.exit-search');

window.addEventListener('scroll',function(){
    if(window.scrollY>headerSection.offsetTop){
        scrollToUpBtn.classList.remove('opacity-0' , 'invisible');
    }
    else{
        scrollToUpBtn.classList.add('opacity-0' , 'invisible');
    }
})

scrollToUpBtn.addEventListener('click',function(){
    window.scroll({
        top:0,
        behavior:"smooth"
    })
})

function displayPopup() {

    popup.style.display = "block";
    document.body.style.overflow = "hidden";
}
closeButton.addEventListener("click", function() {
    var popup = document.getElementById("snow-conrainer");
    popup.style.display = "none";

    document.body.style.overflow = "auto";
});
displayPopup();


exitButton.addEventListener('click', function() {
    siteAnnouncement.style.display = 'none';
});


function DisplayBar(){
    searchBar.addEventListener('click',function(){
        var currentHeight = searchIcon.clientHeight;
        var newHeight = (currentHeight === 0) ? searchIcon.scrollHeight + 'px' : 0;
        searchIcon.style.maxHeight = newHeight;
        siteAnnouncement.classList.add('d-none');
        searchIcon.classList.remove('d-none');
    })
}

exitSearch.addEventListener('click',function(){
    searchIcon.classList.add('d-none');
})





