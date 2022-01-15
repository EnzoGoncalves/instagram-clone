// Bloquear o número de caractéres do nome do usuário dos stories
function maxLetters() {
    const storieUsersName = document.querySelectorAll('#stories .user p');

    for(const storieUserName of storieUsersName) {
        const userTextName = storieUserName.innerHTML;

        if (userTextName.length > 10) {
            const firstLetters = userTextName.slice(0, 10);
            var userName = firstLetters + '...';
            storieUserName.innerHTML = userName;
        }

    }
}

// Função de scroll para os lados nos stories
function storiesScroll() {
    const stories = document.querySelector('#stories');

    const storiesWidth = stories.offsetWidth;

    const storiesScrollWidth = stories.scrollWidth;

    let storiesCurrentXScroll = stories.scrollLeft;

    const storiesBtnRight = document.querySelector('.stories-btn-right');
    const storiesBtnLeft = document.querySelector('.stories-btn-left');
    
    stories.addEventListener('scroll', function() {
        if(storiesCurrentXScroll + storiesWidth >= storiesScrollWidth) {
            storiesBtnRight.classList.add('stories-btn-disappear');
        } else {
            storiesBtnRight.classList.remove('stories-btn-disappear');
        }
    
        if(storiesCurrentXScroll <= 0) {
            storiesBtnLeft.classList.add('stories-btn-disappear'); 
        } else {
            storiesBtnLeft.classList.remove('stories-btn-disappear');
        }
    });
    
    storiesBtnRight.addEventListener('click', function() {
        stories.scrollTo(storiesCurrentXScroll + 350, 0);
    
        storiesCurrentXScroll += 350;
    
        if(storiesCurrentXScroll + storiesWidth >= storiesScrollWidth) {
            stories.scrollTo(storiesScrollWidth - storiesWidth, 0)
            storiesCurrentXScroll = storiesScrollWidth - storiesWidth;
        }
    });
    
    storiesBtnLeft.addEventListener('click', function() {
        stories.scrollTo(storiesCurrentXScroll - 350, 0);
    
        storiesCurrentXScroll -= 350;
    
        if(storiesCurrentXScroll <= 0) {
            stories.scrollTo(0 , 0)
            storiesCurrentXScroll = 0;
        }
    });
}


function likeAndSave() {
    const postHeartIcon = document.querySelectorAll('#posts .interaction div .icon-heart-o');
    const savePostIcon = document.querySelectorAll('#posts .interaction .icon-bookmark-o');
    
    for(const heartIcon of postHeartIcon) {
        heartIcon.addEventListener('click', function() {
            heartIcon.classList.toggle('icon-heart');
        });
    }
    
    for(const saveIcon of savePostIcon) {
        saveIcon.addEventListener('click', function() {
            saveIcon.classList.toggle('icon-bookmark');
        });
    }
}

function postOptions() {
    const buttonsOpenOptions = document.querySelectorAll('.icon-more-horizontal');
    const options = document.querySelectorAll('.option');
    const htmlTag = document.querySelector('html');
    const optionsBox = document.querySelector('#post-options');

    for(const btnOpenOptions of buttonsOpenOptions) {
        btnOpenOptions.addEventListener('click', function() {
            optionsBox.style.display = 'flex';
            optionsBox.style.top = htmlTag.scrollTop + 'px';
            htmlTag.style.overflow = 'hidden';
            htmlTag.style.marginRight = '19px';
        });
    }

    for(const option of options) {
        option.addEventListener('click', function() {
            htmlTag.style.overflow = 'unset';
            optionsBox.style.display = 'none';
            htmlTag.style.marginRight = '0px';
        });
    }
}

maxLetters();
storiesScroll();
postOptions();
likeAndSave()