let pagination_list = document.getElementsByClassName('pagination__list-item'); //all numbers
let pagination_arrows = document.getElementsByClassName('pagination__arrow'); // arrows
let pagination_dots = document.getElementsByClassName('pagination__list-dots'); //dots

pagination_arrows[0].style.display = 'none';
pagination_dots[0].style.display = 'none';
for (var i = 3; i <= 13; i++) {
    pagination_list[i].style.display = 'none';
} //start vision

const parentPagination = document.getElementsByClassName('pagination'); //container
parentPagination[0].addEventListener('click', check_if);

function check_if() {
    if (count > 3) {
        pagination_dots[0].style.display = 'block';
    } else {
        pagination_dots[0].style.display = 'none';
    } //show or hide dots
    if (count > 12) {
        pagination_dots[1].style.display = 'none';
    } else {
        pagination_dots[1].style.display = 'block';
    } //show or hide last dots
    if (count > 1) {
        pagination_arrows[0].style.display = 'block';
    } else {
        pagination_arrows[0].style.display = 'none';
    } //show or hide first arrow
    if (count == 15) {
        pagination_arrows[1].style.display = 'none';
    } else {
        pagination_arrows[1].style.display = 'block';
    } //show or hide last arrow
}

function around_block() {
    [...pagination_list].forEach((element) => {
        if (count >= 3 && count <= 14) {
            [...pagination_list].forEach((element) => {
                element.style.display = 'none';
            });
            for (var i = count - 2; i <= count; i++) {
                pagination_list[i].style.display = 'block';
            }
        } // block 2 around selected
        if (count == 15) {
            [...pagination_list].forEach((element) => {
                element.style.display = 'none';
            });
            for (var i = count; i >= count - 2; i--) {
                pagination_list[i - 1].style.display = 'block';
            }
        } //styles if selected 15
        if (count == 1) {
            [...pagination_list].forEach((element) => {
                element.style.display = 'none';
            });
            for (var i = count; i <= count + 2; i++) {
                pagination_list[i - 1].style.display = 'block';
            }
        } //styles if selected 1
    });
    pagination_list[0].style.display = 'block'; //always show first
    pagination_list[14].style.display = 'block'; //always show last
}

function clear_classes() {
    [...pagination_list].forEach((element) => {
        //clear all
        element.classList.remove('pagination-selected');
    });
}

let selected = pagination_list[0];
selected.classList.add('pagination-selected'); //styles for first
let count = parseInt(selected.innerHTML); //counter = 1

const pagination = document.querySelector('.pagination__list');
pagination.addEventListener('click', paginatorHandle);

function paginatorHandle(event) {
    selected = event.target;

    clear_classes();

    selected.closest('.pagination__list-item').classList.add('pagination-selected');

    count = parseInt(selected.innerHTML); //counter page number
    around_block();
}

const next = document.getElementById('pagination-next');
next.addEventListener('click', arrow_next);

function arrow_next(event) {
    //function for next arrow
    count = parseInt(selected.innerHTML) + 1;

    clear_classes();

    pagination_list[count - 1].classList.add('pagination-selected');
    selected = pagination_list[count - 1];

    around_block();
}

const prev = document.getElementById('pagination-prev');
prev.addEventListener('click', arrow_prev);

function arrow_prev(event) {
    //function for arrow back
    count = parseInt(selected.innerHTML) - 1;

    clear_classes();

    pagination_list[count - 1].classList.add('pagination-selected');
    selected = pagination_list[count - 1];

    around_block();
}
