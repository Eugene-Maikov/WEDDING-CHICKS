$(function () {
    //============= Меню ==============
    $("#nav_toggle").on("click", function (event) {
        event.preventDefault();
        $(this).toggleClass("active");
        $(".aside").toggleClass("aside-active");
        $(".modal").toggleClass("show");
        $(".menu").toggleClass("menu-transform");
    }),

    // Выбор доменного имени
    $(".webadress__btn-change").on("click", function(){
        $(".webadress").addClass("webadress-notActive");
        $(".domen").addClass("domen-active");
    }),
    $(".domen__btn-cancel").on("click", function(){
        $(".webadress").removeClass("webadress-notActive");
        $(".domen").removeClass("domen-active");
    }),

        //модальное окно "Вы действительно хотите удалить запись?"
        $(".box__delete-press").on("click", function () {
            $(".modal").addClass("show");
            $(".box__delete").addClass("box__delete-active");
            $(".box__delete").addClass("box__delete-active");
            $("body").addClass('no-scroll');
        }),
        $(".box__delete-close").on("click", function () {
            $(".modal").removeClass("show");
            $(".box__delete").removeClass("box__delete-active");
            $("body").removeClass('no-scroll');
        }),
        $(".button__delete-cloce").on("click", function () {
            $(".modal").removeClass("show");
            $(".box__delete").removeClass("box__delete-active");
            $("body").removeClass('no-scroll');
        }),
        $(".modal").on("click", function () {
            $(".modal").removeClass("show");
            $(".box__delete").removeClass("box__delete-active");
            $("body").removeClass('no-scroll');
        }),

        $(".button__delete-edit").on("click", function () {
            $(".form__edit").addClass("form__edit-active");
        }),

        //Модальное окно "Добавить событие"
        $(".btn-big").on("click", function () {
            $(".modal").addClass("show");
            $(".modal__information").addClass("modal__information-active");
            $("body").addClass('no-scroll');
        }),
        $(".btn-elementsAdd").on("click", function () {
            event.preventDefault();
            $(".modal").addClass("show");
            $(".modal__information").addClass("modal__information-active");
            $("body").addClass('no-scroll');
        }),
        $(".modal__information-close").on("click", function () {
            event.preventDefault();
            $(".modal__information").removeClass("modal__information-active");
            $("body").removeClass('no-scroll');
            $(".modal").removeClass("show");
        }),
        $(".modal__information-BTNclose").on("click", function () {
            event.preventDefault();
            $(".modal__information").removeClass("modal__information-active");
            $("body").removeClass('no-scroll');
            $(".modal").removeClass("show");
        }),
        $(".modal").on("click", function () {
            $(".modal__information").removeClass("modal__information-active");
            $("body").removeClass('no-scroll');
            $(".modal").removeClass("show");
        }),
        
        // $(".modal").on("click", function () {
        //     $(this).toggleClass("active");
        //     $(".modal").toggleClass("show");
        //     $(".aside").toggleClass("aside-active");
        //     $(".menu").toggleClass("menu-transform");
        // }),

        //Изменение размера цветных кружочков 
        $(".color1").on("click", function () {
            $(".color1").toggleClass("color1-active");
            $(".color2").removeClass("color2-active");
            $(".color3").removeClass("color3-active");
        }),
        $(".color2").on("click", function () {
            $(".color2").toggleClass("color2-active");
            $(".color1").removeClass("color1-active");
            $(".color3").removeClass("color3-active");
        }),
        $(".color3").on("click", function () {
            $(".color3").toggleClass("color3-active");
            $(".color1").removeClass("color1-active");
            $(".color2").removeClass("color2-active");
        }),

        // Оранжевая рамка при выборе дизайна 
        $(".stylePage__image-1 ").on("click", function () {
            $(".stylePage__img-box-1 ").toggleClass("stylePage__border-active");
            $(".stylePage__img-box-2").removeClass("stylePage__border-active");
            $(".stylePage__img-box-3").removeClass("stylePage__border-active");
        }),
        $(".stylePage__image-2 ").on("click", function () {
            $(".stylePage__img-box-2 ").toggleClass("stylePage__border-active");
            $(".stylePage__img-box-1").removeClass("stylePage__border-active");
            $(".stylePage__img-box-3").removeClass("stylePage__border-active");
        }),
        $(".stylePage__image-3 ").on("click", function () {
            $(".stylePage__img-box-3 ").toggleClass("stylePage__border-active");
            $(".stylePage__img-box-2").removeClass("stylePage__border-active");
            $(".stylePage__img-box-1").removeClass("stylePage__border-active");
        }),

        // Оранжевая рамка при выборе кол-ва страниц 
        $(".stylePage__btn-1 ").on("click", function () {
            $(".stylePage__btn-1 ").toggleClass("stylePage__border-active");
            $(".stylePage__btn-2").removeClass("stylePage__border-active");
        }),
        $(".stylePage__btn-2 ").on("click", function () {
            $(".stylePage__btn-2 ").toggleClass("stylePage__border-active");
            $(".stylePage__btn-1").removeClass("stylePage__border-active");
        }),

        //Вкладки в модульном окне "Добавить событие"
        $('input[name="tab"]').click(function () {
            var target = $('#block-' + $(this).val());
            $('.block-text').not(target).hide(0);
            target.fadeIn(100);
        }),
        //Радио-кнопки в модульном окне "Выбрать ответ"
        $('input[name="ack"]').click(function () {
            var target = $('#block__ask-' + $(this).val());
            $('.block-form').not(target).hide(0);
            target.fadeIn(100);
        }),
    
        //Клонирование input
        $(".info__ack1-add").on('click', function () {
            event.preventDefault();
            var ele = $(this).closest('.copy-input').clone(true);
            $(this).closest('.copy-input').after(ele);
        }),
        
            
    // Чекбокс "Сделать ваш сайт приватным"
    $('#privacy-switch').click(function () {
        if ($(this).is(':checked')) {
            $(".privacy__form").addClass("privacy__form-active");
        } else {
            $(".privacy__form").removeClass("privacy__form-active");
        }
    });
    

    //всплываюзие черные подсказки
    $(document).ready(function () {
        $(".question-icon").hover(function () { // задаем функцию при наведении курсора на элемент и при его отведении	
            $(".box__map ").toggleClass("box__map--active") // добавляем, или убираем класс у текущего элемента div
        });
    });
    $(document).ready(function () {
        $(".question-icon1").hover(function () { // задаем функцию при наведении курсора на элемент и при его отведении	
            $(".box__info1 ").toggleClass("box__info1--active") // добавляем, или убираем класс у текущего элемента div
        });
    });
    $(document).ready(function () {
        $(".question-icon2").hover(function () { // задаем функцию при наведении курсора на элемент и при его отведении	
            $(".box__info2 ").toggleClass("box__info2--active") // добавляем, или убираем класс у текущего элемента div
        });
    });

})