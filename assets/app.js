'use strict';

const $btn = document.getElementById('btn');
const $resalts = document.getElementById('resalts');

$btn.addEventListener('click', () => {
    const num = Math.random();

    if (num < .2) {
        $resalts.textContent = 'ラッキー';
    } else if (num < .5) {
        $resalts.textContent = 'そこそこ';
    } else if (num < .8) {
        $resalts.textContent = '要注意';
    } else {
        $resalts.textContent = '大凶';
    }
});