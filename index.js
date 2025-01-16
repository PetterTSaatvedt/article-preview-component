
let shareBtn = document.getElementById('share-btn');
let shareBtnIcon = document.getElementById('share-icon');
let shareContent = document.getElementById('share');
let authorContent = document.getElementById('author');
let footer = document.getElementById('footer');
let mobileBreakpoint = window.matchMedia('(max-width: 899px)');

function toggleShare() {
    shareContent.style.display = shareContent.style.display == 'none' ? 'flex' : 'none';
    shareBtn.style.backgroundColor = shareBtn.style.backgroundColor == 'var(--light-grayish-blue)' ? 'var(--desaturated-dark-blue)' : 'var(--light-grayish-blue)';
    shareBtnIcon.style.filter = shareBtnIcon.style.filter == 'none' ? 'brightness(0) invert(1)' : 'none';

    if (mobileBreakpoint.matches){
        authorContent.style.display = authorContent.style.display == 'flex' ? 'none' : 'flex';
        footer.style.backgroundColor = footer.style.backgroundColor == 'white' ? 'var(--very-dark-grayish-blue)' : 'white';
        footer.style.padding = footer.style.padding == '0.75rem 2rem 1.25rem' ? '1rem 2rem 1rem' : '0.75rem 2rem 1.25rem';
    }
};

shareBtn.addEventListener('click', toggleShare);