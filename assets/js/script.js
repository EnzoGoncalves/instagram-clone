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

maxLetters();

const postHeartIcon = document.querySelector('#posts .interaction div').childNodes[1];
const savePostIcon = document.querySelector('#posts .interaction .fa-bookmark');

postHeartIcon.addEventListener('click', function(e) {
    postHeartIcon.classList.toggle('far');
    postHeartIcon.classList.toggle('fas');
});

savePostIcon.addEventListener('click', function(e) {
    savePostIcon.classList.toggle('far');
    savePostIcon.classList.toggle('fas');
});



const storiesWidth = document.querySelector('#stories').offsetWidth;

let i = 1;
document.querySelector('.stories-btn-right').addEventListener('click', function(){
    document.querySelector('#stories').scrollTo((i * storiesWidth) - 85, 0);
    i += 1;
})