window.addEventListener('DOMContentLoaded',()=>{
    const $ = (node) => document.querySelector(node);

    //dialog modal function
    const emailInput = $('input[type="email"]');
    const modalOpenBtn = $('#modal-open-btn');
    const modalCloseBtn = $('#modal-close-btn');
    const modalPop = $('.modal-submit');

    modalOpenBtn.addEventListener('click',()=>{
        if(emailInput.value == '') {
            alert('이메일 주소를 입력하세요');
        } else {
            modalPop.showModal();
        }
    })

    modalCloseBtn.addEventListener('click',()=>{
        modalPop.close();
    })

    //side menu function - 모달 팝업과 같은 기능을 합니다
    function ModalFnc (modalPop) {
        const modalHas = modalPop.classList.contains('on');
        if(modalHas) {
            modalPop.classList.remove('on')
        } else {
            modalPop.classList.add('on')
        }
    }
    const HamburgerOpen = $('#hamburger-open-btn');
    const HamburgerClose = $('#hamburger-close-btn')
    HamburgerOpen.addEventListener('click',()=>{
        const modalPop = $('#hamburger-menu');
        ModalFnc(modalPop);
    })
    HamburgerClose.addEventListener('click',()=>{
        const modalPop = $('#hamburger-menu');
        ModalFnc(modalPop);
    })

    //scroll top
    const ScrollTop = $('#scroll-top');
    ScrollTop.addEventListener('click',()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
    //scroll event
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;

        const scrollBottom = scrollHeight - (scrollTop + clientHeight);

        const scrollBtn = document.getElementById('scroll-top');

        if (scrollTop > 100) {
            scrollBtn.style.visibility = 'visible';
        } else {
            scrollBtn.style.visibility = 'hidden'
        }
        if (scrollBottom <= 10) {
            scrollBtn.style.bottom = '200px';
        } else {
            scrollBtn.style.bottom = '24px';
        }
    });
})