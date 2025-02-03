
let shareBtn = document.getElementById('share-btn');
let shareBtnIcon = document.getElementById('share-icon');
let shareContent = document.getElementById('share');
let authorContent = document.getElementById('author');
let footer = document.getElementById('footer');
let mobileBreakpoint = window.matchMedia('(max-width: 899px)');
let isActive = false;

function toggleShare() {
    shareContent.classList.toggle('visible');
    shareBtn.classList.toggle('active');
    shareBtnIcon.classList.toggle('dark-icon');
    isActive = !isActive;

    if (mobileBreakpoint.matches){
        authorContent.classList.toggle('hidden');
        footer.classList.toggle('dark-footer');
    }

    console.log(isActive);
};

function adjustLayout(){
    if(mobileBreakpoint.matches && isActive && !authorContent.classList.contains('hidden')) {
        authorContent.classList.toggle('hidden');
        footer.classList.toggle('dark-footer');
    } else if (!mobileBreakpoint.matches && isActive && authorContent.classList.contains('hidden')) {
        authorContent.classList.toggle('hidden');
        footer.classList.toggle('dark-footer');
    }
}

shareBtn.addEventListener('click', toggleShare);
window.addEventListener('resize', adjustLayout);