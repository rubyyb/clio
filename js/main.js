$(function(){
    //고객센터와 top버튼 나타나기
    $(window).scroll(function(){
        if ($(this).scrollTop() > 500){
            $('.top_btn').fadeIn(500);
        } else{
            $('.top_btn').fadeOut(500);
        }
    });

    //스크롤시 header 스타일변경
    let header = document.querySelector('.header');

    //header_menu
    let openBtn = document.getElementsByClassName('open_btn')[0];
    let menu = document.getElementsByClassName('pc_gnb')[0];
    let menuAfter = document.getElementsByClassName('header_menu')[0];

    // 얘는 스크롤할 때마다 실행되는 이벤트 리스너야
    window.addEventListener('scroll', () => {
        let scrollBar = window.scrollY;
        if(menuAfter.classList.contains('on')) return;
        if(scrollBar > 0) {
            header.classList.add('on')
        } else {
            header.classList.remove('on')
        }
    })

    openBtn.addEventListener('click', () => {
        // alert();
        if(getComputedStyle(menuAfter).display === 'none') {
            menuAfter.style.display = 'block';
            menuAfter.classList.add('on'); 
            if(header.classList.contains('on')) {
                header.classList.remove('on');
            }
        } else {
            menuAfter.style.display = 'none';
            menuAfter.classList.remove('on');
            if(window.scrollY > 0) {
                header.classList.add('on');
            }
        }
    })/* openBtn end */

    //search_box
    let searchBox = document.querySelector('.search_box');
    let searchBtn = document.querySelector('.user .seacrh');

    searchBtn.addEventListener('click', () => {
        // alert();
        if(getComputedStyle(searchBox).display === 'none') {
            searchBox.style.display = 'block';
        } else {
            searchBox.style.display = 'none';
        }
    })

    //new_item_hover
    let leftImg = document.querySelector('.left_item img');
    let rightImg = document.querySelectorAll('.right_item .swiper-slide figure');
    let rightImgBox = document.querySelectorAll('.right_item .swiper-slide .main_img');

    for(let i = 0; i < rightImg.length; i++){
        rightImg[i].addEventListener('mouseenter', () => {
            leftImg.src = rightImgBox[i].src
        })
    }

    //category_tab_menu
    let categoryList = document.querySelector('.category_list');
    let categoryMenu = document.querySelectorAll('.category_list li');
    let categoryItem =document.querySelectorAll('.category_item .item');

    for(let i = 0; i < categoryMenu.length; i++) {
        categoryMenu[i].addEventListener('click', () => {
            // alert();
            categoryMenu.forEach((menu) => {
                menu.classList.remove('on');
            })

            categoryItem.forEach((item) => {
                item.classList.remove('on');
            })

            categoryMenu[i].classList.add('on');
            categoryItem[i].classList.add('on');
        })
    }

    //메인비주얼 슬라이드
        var swiper = new Swiper(".main_visual_slide", {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });

        //best_item_slide
        var swiper = new Swiper(".best_item_slide", {
            slidesPerView: 3,
            spaceBetween: 24,
            pagination: {
                el: ".swiper-pagination",
                type: "progressbar",
            },
        });


        //new_right_slide
        var swiper = new Swiper(".mySwiper", {
            direction: "vertical",
            slidesPerView: "auto",
            freeMode: true,
            scrollbar: {
                el: ".swiper-scrollbar",
            },
            mousewheel: true,
        });

        //인스타그램 슬라이드
        var swiper = new Swiper(".instargram_item_slide", {
            slidesPerView: 5.5,
            spaceBetween: 24,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
})/* script end */