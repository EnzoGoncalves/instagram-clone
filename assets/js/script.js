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