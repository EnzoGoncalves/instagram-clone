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

// Função de colocar os botões de scroll dos stories no lugar dos stories
window.onload = function() {
    const storiesHeight = document.querySelector('#stories').offsetHeight;
    const storiesButtonDiv = document.querySelector('.stories-buttons-div');
    
    storiesButtonDiv.style.height = storiesHeight + 'px';
}


const postHeartIcon = document.querySelectorAll('#posts .interaction div .fa-heart');
const savePostIcon = document.querySelectorAll('#posts .interaction .fa-bookmark');

for(const heartIcon of postHeartIcon) {
    heartIcon.addEventListener('click', function() {
        heartIcon.classList.toggle('far');
        heartIcon.classList.toggle('fas');
    });
}


for(const saveIcon of savePostIcon) {
    saveIcon.addEventListener('click', function() {
        saveIcon.classList.toggle('far');
        saveIcon.classList.toggle('fas');
    });
}


maxLetters();
storiesScroll();