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
    
    // let getInputEmail = $('.group-email');
    // let getInputEmail = $('#inputEmail');
    // getInputEmail.change(function() {
    //     if(checkEmail.test(getInputEmail.val())) {
    //         console.log('Dung');
            
    //     }
    //     else {
    //         console.log('Sai');
    //         getInputEmail.css({
    //             'color': '#e92828'
    //         })
            // getInputEmail.css({
            //     'color': '#e92828'
            // })
            
    //         let getGroupEmail = $('.wrong-email');
    //         getGroupEmail.css({
    //             'display': 'block'
    //         })
    //         setTimeout(function(){
    //             getGroupEmail.css({
    //                 'display': 'none'
    //             })
    //         }, 5000)
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

    // openModal(payBtn,payModal,payClose,payContainerModal,false);  
    let inputPayment = $('.payment-method-bank-input');
    let inputBank = $('.payment-method-bank-detail');
    let inputCard = $('.card input[type="text"]');
    let paymentInfo = $('.payment-info input');
    
    $('.radio').click(function() { 
        $("#bank-error").text(""); 
    })

    $('.payment-total-btn').click(function() { 
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
        
        let error = "";
        
        if (nameInput.val() != false) {
            error = "";
        } else {
            error = "Vui lòng không để chống tên"; 
        }

        nameError.text(error);

        if (regexEmail.test(emailInput.val())) {
            error = "";
        } else {
            error = "Vui lòng nhập một email hợp lệ";
        }

        emailError.text(error);


        if (regexPhone.test(phoneInput.val())) {
            error = "";
        } else {
            error = "Vui lòng nhập một số điện thoại hợp lệ";
        }

        phoneError.text(error); 
        
        // if(bankInput.click) {
        //     error = "";
        // } else {
        //     error = "Vui lòng chọn 1 phương thức thanh toán";
        // }
        if(bankInput.is(':checked')) {
            error = "";
            openModal(payBtn,payModal,payClose,payContainerModal,false);
        }
        else  {
            error = "Vui lòng chọn 1 phương thức thanh toán";
        }

        bankError.text(error);

        return false;

    });
});
 

function isEmail(email) {
    var regexEmail =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexEmail.test(email.val());
}
function isName(name) {
    var regexName =  /^[A-ZÀ|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ|È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ|Ì|Í|Ị|Ỉ|Ĩ|Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ|Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ|Ỳ|Ý|Ỵ|Ỷ|Ỹ|Đ][a-zà|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|ì|í|ị|ỉ|ĩ|ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|ỳ|ý|ỵ|ỷ|ỹ]*(?:[ ][A-ZÀ|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ|È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ|Ì|Í|Ị|Ỉ|Ĩ|Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ|Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ|Ỳ|Ý|Ỵ|Ỷ|Ỹ|Đ][a-zà|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|ì|í|ị|ỉ|ĩ|ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|ỳ|ý|ỵ|ỷ|ỹ]*?)+$/;
    return regexName.test(name);
}
function isPhone(phone) {
    var regexPhone =  /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    return regexPhone.test(phone);
}