// Set rank

const ranks = document.querySelectorAll('.film__item-rank');
for (let i = 0;i < ranks.length;i++) {
    ranks[i].innerText = i+1;
}