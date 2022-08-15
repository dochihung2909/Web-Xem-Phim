$(document).ready(function() {
    let filmNamePay = $('.pay-movie-name');
    filmNamePay.text(`${localStorage.filmNameLocal}`)

    let timePay = $('.pay-movie-time');
    timePay.text(`
    ${localStorage.timeLocal} - ${localStorage.dayLocal}, ${localStorage.dateLocal}/${localStorage.monthLocal}
    `);

    let addressPay = $('.pay-movie-address');
    addressPay.text(`${localStorage.addressLocal}`);
    
    let positionPay = $('.pay-movie-position');
    positionPay.text(`${parseInt(Math.random() * 14 + 1)}`);

    let seatsPay = $('.pay-movie-seats')
    seatsPay.text(`${localStorage.seatLocal}`);
    
    // total
    let priceTicketPay = $('.price-ticket');
    let intPriceTicketPay = parseInt(localStorage.totalLocal);
    priceTicketPay.text(`${localStorage.totalLocal}.000đ`);

    let priceOfferPay = $('.price-offer');
    let intPriceOfferPay = parseInt(intPriceTicketPay * 5 / 100);
    priceOfferPay.text(`${intPriceOfferPay}.000đ`);

    let priceTotalPay = $('.payment-total-last-price');
    let intPriceTotalPay = parseInt($('.payment-total-last-price').text());
    priceTotalPay.text(`${intPriceTicketPay - intPriceOfferPay}.000đ`);

    let checkText = $('.group input');
    if(checkText.val() == false);

    let checkEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    let getInputEmail = $('.group-email');
    getInputEmail.change(function() {
        if(checkEmail.test(getInputEmail.val())) {
            console.log('Dung');
            
        }
        else {
            console.log('Sai');
            getInputEmail.css({
                'color': '#e92828'
            })
            
            let getGroupEmail = $('.wrong-email');
            getGroupEmail.css({
                'display': 'block'
            })
            setTimeout(function(){
                getGroupEmail.css({
                    'display': 'none'
                })
            }, 5000)
                
        }
    })

    let payBtn = $('.payment-total-btn');
    let payModal = $('.js-pay-modal');
    let payContainerModal = $('.js-pay-modal-container');

    payBtn.click(function() {
        payModal.addClass('pay-modal-open');
    }) 

    payModal.click(function() {
        payModal.removeClass('pay-modal-open');
    })

    payContainerModal.click(function(event) { 
        event.stopPropagation();
    });

    let bankDomestic = $('.bank-domestic');
    let bankForeign = $('.bank-foreign');
    let showDomestic = $('.js-bank-domestic');
    let showForeign = $('.js-bank-foreign');

    bankDomestic.click(function() {
        showDomestic.addClass('bank-open');
        showForeign.removeClass('bank-open');
    });

    bankForeign.click(function() {
        showForeign.addClass('bank-open');
        showDomestic.removeClass('bank-open');
    });
})

