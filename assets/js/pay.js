$(document).ready(function() {
    let filmNamePay = $('.transaction-name');
    filmNamePay.text(`${localStorage.filmNameLocal}`)


    let positionPay = $('.transaction-position');
    positionPay.text(`${parseInt(Math.random() * 14 + 1)}`);

    let checkText = $('.group input');
    if(checkText.val() == false);

    let checkEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    let getInputEmail = $('.group-email');
    getInputEmail.change(function() {
        getInputEmail.css({
                'color': 'white'
            
            })
        if(checkEmail.test(getInputEmail.val())) {
            console.log('Dung');
            
        }
        else {
            console.log('Sai');
            getInputEmail.css({
                'color': '#e92828'
            })
        }

    })
    
})

