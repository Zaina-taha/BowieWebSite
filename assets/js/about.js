const searchBar=document.getElementById('searchBar2');
const searchIcon=document.querySelector('.search-icon');
const exitSearch=document.querySelector('.exit-search');

document.addEventListener('DOMContentLoaded', function() {
    function animateCount(element, target, duration) {
        let start = 0;
        const startTime = performance.now();

        function update() {
            const currentTime = performance.now();
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(1, elapsedTime / duration);
            const currentValue = Math.floor(progress * (target - start) + start);
            element.textContent = currentValue;

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        requestAnimationFrame(update);
    }

    const countElements = document.querySelectorAll('.countt');
    const targetValue = [94,750,520,860];
    const animationDuration = 2000;

    countElements.forEach((countElement, index) => {
        animateCount(countElement,targetValue[index], animationDuration);
    });
});

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
