let pagination_list = document.getElementsByClassName('pagination__list-item'); //all numbers
let pagination_arrows = document.getElementsByClassName('pagination__arrow'); // arrows
let pagination_dots = document.getElementsByClassName('pagination__list-dots'); //dots

pagination_arrows[0].style.display = 'none';
pagination_dots[0].style.display = 'none';
for (var i = 4; i <= 13; i++) {
    pagination_list[i].style.display = 'none';
}

let selected = pagination_list[0];
selected.classList.add('pagination-selected'); //styles for first
let count = Number(selected.innerHTML);

const next = document.getElementById('pagination-next');
next.addEventListener('click', arrow_next);

/*function arrow_next(event) {
    selected = event.target;
    count = Number(selected.innerHTML);

    const parentPagination = selected.closest('.pagination');
    const itemsArr = parentPagination.querySelectorAll('.pagination__list-item');

    [...itemsArr].forEach((element) => {
        element.classList.remove('pagination-selected');
    });

    pagination_list[count - 1].classList.add('pagination-selected');
}*/

const pagination = document.querySelector('.pagination__list');
pagination.addEventListener('click', paginatorHandle);

function paginatorHandle(event) {
    selected = event.target;
    const parentPagination = selected.closest('.pagination');

    const itemsArr = parentPagination.querySelectorAll('.pagination__list-item');

    [...itemsArr].forEach((element) => {
        element.classList.remove('pagination-selected');
    });

    selected.closest('.pagination__list-item').classList.add('pagination-selected');

    count = Number(selected.innerHTML); //counter page number

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

    [...itemsArr].forEach((element) => {
        if (count >= 3 && count <= 14) {
            [...itemsArr].forEach((element) => {
                element.style.display = 'none';
            });
            for (var i = count - 2; i <= count; i++) {
                pagination_list[i].style.display = 'block';
            }
        } // block 2 around selected
        if (count == 15) {
            [...itemsArr].forEach((element) => {
                element.style.display = 'none';
            });
            for (var i = count; i >= count - 2; i--) {
                pagination_list[i - 1].style.display = 'block';
            }
        } //styles if selected 15
        if (count == 1) {
            [...itemsArr].forEach((element) => {
                element.style.display = 'none';
            });
            for (var i = count; i <= count + 3; i++) {
                pagination_list[i - 1].style.display = 'block';
            }
        } //styles if selected 1

        pagination_list[0].style.display = 'block'; //always show first
        pagination_list[14].style.display = 'block'; //always show last
    });
}
