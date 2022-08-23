$(document).ready(function() { 

// Lấy giá trị từ localStorage

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

    let seatsPay = $('.pay-movie-seats');
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

// Modal QR code
    const payBtn = $('.payment-total-btn');
    const payModal = $('.js-pay-modal');
    const payContainerModal = $('.js-pay-modal-container');
    const payClose = $('.pay-total-close');  
    
    $('.radio').click(function() { 
        $("#bank-error").text("");  
    }) 

    payBtn.click(function() { 
        const regexEmail =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const regexPhone =  /(84|0[3|5|7|8|9])+([0-9]{8})\b/g; 

        let nameInput = $('#paymentname');
        let phoneInput = $('#paymentphone');
        let emailInput = $('#paymentemail');
        let bankInput = $('.radio');

        let nameError = $('#name-error');
        let phoneError = $('#phone-error');
        let emailError = $('#email-error');
        let bankError = $('#bank-error');
        let stillError = false;
        let error = "";
        
        if (nameInput.val() != false) {
            error = "";
        } else {
            error = "Vui lòng không để chống tên"; 
            stillError=true;
        }

        nameError.text(error);

        if (regexEmail.test(emailInput.val())) {
            error = "";
        } else {
            error = "Vui lòng nhập một email hợp lệ";
            stillError=true;
        }

        emailError.text(error);


        if (regexPhone.test(phoneInput.val())) {
            error = "";
        } else {
            error = "Vui lòng nhập một số điện thoại hợp lệ";
            stillError=true; 
        }
        
        phoneError.text(error);  


        if(bankInput.is(':checked')) {
            error = ""; 
        } else  {
            error = "Vui lòng chọn 1 phương thức thanh toán";
            stillError=true; 
            bankError.text(error);   
        }  

        if (!stillError) {
            payModal.addClass('open');
            $('html').css('overflow-y','hidden'); 
            payClose.click(function(){
                payModal.removeClass('open');
                $('html').css('overflow-y',''); 
            })

            payModal.click(function() {
                payModal.removeClass('open');
                $('html').css('overflow-y','');  
            })
            
            payContainerModal.click(function(event) {
                event.stopPropagation();
            }) 
            return false; 
        }  
    });

// modal qr xuất hiện
    $('.modal-btn').click(function() {
        $('.modal-right').addClass('open-qrcode');
    });

    $('.pay-close').click(function(){
        $('.pay-modal').addClass('close-modal');
    });

}); 