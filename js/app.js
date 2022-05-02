let inputSelect = document.querySelector('.form-select');
var cardColor = document.querySelector('#card-change-color');

inputSelect.addEventListener('change', () => {
    var color = document.querySelector('#color').value;
    changeColor(color);
});

function changeColor (color) {

    if(cardColor.classList.contains('bg-primary')){

        cardColor.classList.replace('bg-primary', `bg-${color}`);

    } else if(cardColor.classList.contains('bg-secondary')) {

        cardColor.classList.replace('bg-secondary', `bg-${color}`);

    } else if(cardColor.classList.contains('bg-success')) {

        cardColor.classList.replace('bg-success', `bg-${color}`);

    } else if(cardColor.classList.contains('bg-info')) {

        cardColor.classList.replace('bg-info', `bg-${color}`);

    } else if(cardColor.classList.contains('bg-warning')) {

        cardColor.classList.replace('bg-warning', `bg-${color}`);

    } else if(cardColor.classList.contains('bg-danger')) {

        cardColor.classList.replace('bg-danger', `bg-${color}`);

    } else if(cardColor.classList.contains('bg-light')) {

        cardColor.classList.replace('bg-light', `bg-${color}`);

    } else if(cardColor.classList.contains('bg-dark')) {

        cardColor.classList.replace('bg-dark', `bg-${color}`);
        
    }

}

