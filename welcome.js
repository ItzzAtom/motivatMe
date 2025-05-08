document.addEventListener('DOMContentLoaded', function () {
    const dropdownBtn = document.getElementById('dropdown-btn');
    const dropdownContent = document.getElementById('dropdown-content');

    dropdownBtn.addEventListener('click', () => {
        dropdownContent.classList.toggle('show');
    });

    const username = "Student"; // Replace with actual username retrieval logic
    const userImage = document.getElementById('user-image');
    const userNameElement = document.getElementById('user-name');
    const userImageSrc = localStorage.getItem('userImage') || 'default-image.png'; // Default image if not set
    userImage.src = userImageSrc;
    userNameElement.textContent = username;
    const welcomeTextContainer = document.getElementById('welcome-text-container');

    const message = `Welcome back ${username}`;
    const words = message.split(' ');
    let wordIndex = 0;

    function typeEffect() {
        if (wordIndex < words.length) {
            const wordSpan = document.createElement('span');
            wordSpan.textContent = words[wordIndex];
            wordSpan.style.opacity = '0';
            wordSpan.style.transition = 'opacity 0.5s ease-in';
            welcomeTextContainer.appendChild(wordSpan);

            wordSpan.style.marginRight = '5px';

            setTimeout(() => {
                wordSpan.style.opacity = '1';
            }, 100);

            wordIndex++;
            setTimeout(typeEffect, 600);
        }
    }

    setTimeout(typeEffect, 500);
});