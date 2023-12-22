const searchBar=document.getElementById('searchBar1');
const searchIcon=document.querySelector('.search-icon');
const exitSearch=document.querySelector('.exit-search');

function DisplayBar(){
    searchBar.addEventListener('click',function(){
        var currentHeight = searchIcon.clientHeight;
        var newHeight = (currentHeight === 0) ? searchIcon.scrollHeight + 'px' : 0;
        searchIcon.style.maxHeight = newHeight;
        searchIcon.classList.remove('d-none');
    })
}

exitSearch.addEventListener('click',function(){
    searchIcon.classList.add('d-none');
})

