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


// Validate

    // let checkText = $('.group input');
    // if(checkText.val() == false);

    // let checkEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    // let getInputEmail = $('#inputEmail');
    // getInputEmail.change(function() {
    //     if(checkEmail.test(getInputEmail.val())) {
    //         console.log('Dung');
            
    //     }
    //     else {
    //         console.log('Sai');
            // getInputEmail.css({
            //     'color': '#e92828'
            // })
            
            // let getGroupEmail = $('.wrong-email');
            // getGroupEmail.css({
            //     'display': 'block'
            // })
            // setTimeout(function(){
            //     getGroupEmail.css({
            //         'display': 'none'
            //     })
            // }, 5000)
                
    //     }
    // })

// Modal QR code
    const payBtn = $('.payment-total-btn');
    const payModal = $('.js-pay-modal');
    const payContainerModal = $('.js-pay-modal-container');
    const payClose = $('.pay-total-close'); 

    let inputPayment = $('.payment-method-bank-input');
    let inputBank = $('.payment-method-bank-detail');
    let inputCard = $('.card input[type="text"]');
    let paymentInfo = $('.payment-info input');


    // $('.payment-total-btn').click(function(){
    //     let findInput = $(this).find('.payment-info-form-input');
        
    //     if(findInput.val() == '') {
    //         $(this).addClass('warning');
    //     } else {
    //         $(this).removeClass('warning');
    //     }
    // });
    
    var idInput = [
            "#cardname",
            "#cardid",
            "#cardcvv",
            "#paymentname",
            "#paymentphone",
            "#paymentemail",
            "#paymentidentity",
            "#paymentnote"
        ]

    $('.payment-total-btn').click(function() {
        var regexName =  /^[A-ZÀ|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ|È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ|Ì|Í|Ị|Ỉ|Ĩ|Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ|Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ|Ỳ|Ý|Ỵ|Ỷ|Ỹ|Đ][a-zà|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|ì|í|ị|ỉ|ĩ|ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|ỳ|ý|ỵ|ỷ|ỹ]*(?:[ ][A-ZÀ|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ|È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ|Ì|Í|Ị|Ỉ|Ĩ|Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ|Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ|Ỳ|Ý|Ỵ|Ỷ|Ỹ|Đ][a-zà|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|ì|í|ị|ỉ|ĩ|ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|ỳ|ý|ỵ|ỷ|ỹ]*?)+$/;
        var regexEmail =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var regexPhone =  /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
        var regexCardId = /([0-9]{10,12})\b/g;
        var regexCardCVV = /([0-9]{3})\b/g;
        
        var valueName = $('#paymentname');
        var valueEmail = $('#paymentemail');
        var valuePhone = $('#paymentphone');
        var valueCardName = $('#cardname');
        var valueCardId = $('#cardid');
        var valueCardCVV = $('#cardcvv');

        // Customer Information
        if(regexName.test(valueName.val())) {
            valueName.parent().removeClass('warning');
        }
        else {
            valueName.parent().addClass('warning');
        }

        if(regexEmail.test(valueEmail.val())) {
            valueEmail.parent().removeClass('warning');
        }
        else {
            valueEmail.parent().addClass('warning');
        }

        if(regexPhone.test(valuePhone.val())) {
            valuePhone.parent().removeClass('warning');
        }
        else {
            valuePhone.parent().addClass('warning');
        }

        // Bank credit
        if(regexName.test(valueCardName.val())) {
            valueCardName.removeClass('warning');
        }
        else {
            valueCardName.addClass('warning');
        }
        
        if(regexCardId.test(valueCardId.val())) {
            valueCardId.removeClass('warning');
        }
        else {
            valueCardId.addClass('warning');
        }

        if(regexCardCVV.test(valueCardCVV.val())) {
            valueCardCVV.removeClass('warning');
        }
        else {
            valueCardCVV.addClass('warning');
        }

        if(!$('[id^="card"]:checked').val()) {
            alert('Mời bạn chọn ngân hàng thanh toán');
        }



        // for(let i=0; i<idInput.length; i++) {
        //     if($(idInput[i]).val() == '')
        //     {
        //         if($(idInput[i] == "#paymentname")) {
        //             if(isName($(idInput[i]))) {
        //                 $(idInput[i]).parent().removeClass('warning');
        //             }
        //             else {
        //                 $(idInput[i]).parent().addClass('warning');
        //             }
        //         }
        //         if($(idInput[i] == "#paymentphone")) {
        //             if(isPhone($(idInput[i]))) {
        //                 $(idInput[i]).parent().removeClass('warning');
        //             }
        //             else {
        //                 $(idInput[i]).parent().addClass('warning');
        //             }
        //         }
        //         if($(idInput[i] == "#paymentemail")) {
        //             if(isEmail($(idInput[i]))) {
        //                 $(idInput[i]).parent().removeClass('warning');
        //             }
        //             else {
        //                 $(idInput[i]).parent().addClass('warning');
        //             }
        //         }
        //         if($(idInput[i] == "#paymentidentity")) {
        //             if(isIdentity($(idInput[i]))) {
        //                 $(idInput[i]).parent().removeClass('warning');
        //             }
        //             else {
        //                 $(idInput[i]).parent().addClass('warning');
        //             }
        //         }

        //     }
        //     else
        //     {
        //         $(idInput[i]).parent().removeClass('warning');
        //     } 
        // }
        
        // if(inputPayment.val() != '' && inputBank.val() != '' && inputCard.val() != '' && paymentInfo.val() != '') {
        // }
        // openModal(payBtn,payModal,payClose,payContainerModal,false);  

    });

// Bank select
    let bankDomestic = $('.bank-domestic');
    let bankForeign = $('.bank-foreign');
    let showDomestic = $('.js-bank-domestic');
    let showForeign = $('.js-bank-foreign');

    bankDomestic.click(function() {
        $('[id^="card"]').prop("checked", false);
        $('.card input').val('');
        showDomestic.addClass('bank-open');
        showForeign.removeClass('bank-open');
    });

    bankForeign.click(function() {
        $('[id^="card"]').prop("checked", false);
        $('.card input').val('');
        showForeign.addClass('bank-open');
        showDomestic.removeClass('bank-open');
    });

    let creditCard = $('.card');
    $('[id^="card"]').click(function() {
        creditCard.addClass('open-card');
    })
    bankDomestic.click(function() {
        creditCard.removeClass('open-card');
    });
    bankForeign.click(function() {
        creditCard.removeClass('open-card');
    });
})

// function validateEmail (inputText) {
//     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     if(inputText.value.match(mailformat))
//     {
//       alert("Valid email address!");
//       document.form.validateemail.focus();
//       return true;
//     }
//     else
//     {
//       alert("You have entered an invalid email address!");
//       document.form.validateemail.focus();
//       return false;
//     }
// }
function isEmail(email) {
    var regexEmail =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexEmail.test(email);
}
function isName(name) {
    var regexName =  /^[A-ZÀ|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ|È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ|Ì|Í|Ị|Ỉ|Ĩ|Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ|Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ|Ỳ|Ý|Ỵ|Ỷ|Ỹ|Đ][a-zà|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|ì|í|ị|ỉ|ĩ|ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|ỳ|ý|ỵ|ỷ|ỹ]*(?:[ ][A-ZÀ|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ|È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ|Ì|Í|Ị|Ỉ|Ĩ|Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ|Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ|Ỳ|Ý|Ỵ|Ỷ|Ỹ|Đ][a-zà|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|ì|í|ị|ỉ|ĩ|ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|ỳ|ý|ỵ|ỷ|ỹ]*?)+$/;
    return regexName.test(name);
}
function isPhone(phone) {
    var regexPhone =  /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    return regexPhone.test(phone);
}
function isIdentity(identity) {
    var regexIdentity =  /([0-9]{12})\b/g;
    return regexIdentity.test(identity);
}
