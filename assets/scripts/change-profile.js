var icon = document.querySelector('.character-register');

var icons = ['../assets/img/icons-player-profile/ryu-icon-1.jpg', '../assets/img/icons-player-profile/ryu-icon-2.jpg',
            '../assets/img/icons-player-profile/ken-icon-1.jpg', '../assets/img/icons-player-profile/ken-icon-2.jpg',
            '../assets/img/icons-player-profile/chun-li-icon-1.jpg', '../assets/img/icons-player-profile/chun-li-icon-2.jpg',
            '../assets/img/icons-player-profile/zangief-icon-1.jpg', '../assets/img/icons-player-profile/zangief-icon-2.jpg',
            '../assets/img/icons-player-profile/akuma-icon-1.jpg', '../assets/img/icons-player-profile/akuma-icon-2.jpg'
];

var current = 0;

function changeIconForward() {
    if (current < icons.length - 1) {
        current++;
        icon.style.backgroundImage = `url(${icons[current]})`;
    } else {
        current = 0;
        icon.style.backgroundImage = `url(${icons[current]})`;
    }
}

function changeIconBack() {
    if (current == 0) {
        current = 9;
        icon.style.backgroundImage = `url(${icons[current]})`;
    } else {
        current--;
        icon.style.backgroundImage = `url(${icons[current]})`;
    }
}