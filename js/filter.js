const filterBox = document.querySelectorAll('.card');

document.querySelector('.filters').addEventListener('click', event => {
    if (event.target.nodeName !== 'BUTTON') return false;

    let filterClass = event.target.dataset.filter;
    console.log(filterClass);

    filterBox.forEach(elem => {
        elem.classList.remove('hide')
        elem.classList.remove('anime')
        elem.classList.add('stat')
        if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
            elem.classList.add('hide')
            elem.classList.add('anime')
        }
        if (filterClass === 'all') {
            elem.classList.remove('stat')
        }
    })
});

// function filt() {
//     const buttons = document.querySelectorAll('.button-filters');
//     const cards = document.querySelectorAll('.card');

//     function filter(category, items) {
//         items.forEach((item) => {
//             const isItemFiltered = !item.classList.contains(category)
//             const isShowAll = category.toLowerCase() === 'all'
//             if (isItemFiltered && !isShowAll) {
//                 item.classList.add('anime')
//             } else {
//                 item.classList.remove('hide')
//                 item.classList.remove('anime')
//             }
//         })
//     }
//     buttons.forEach((button) => {
//         button.addEventListener('click', () => {
//             const currentCategory = button.dataset.filter
//             filter(currentCategory, cards)
//             console.log(button.dataset.filter)
//         })
//     })

//     cards.forEach((card) => {
//         card.ontransitionend = function () {
//             if (card.classList.contains('anime')) {
//                 card.classList.add('hide')
//             }
        
//         }
//     })
// }
// filt();