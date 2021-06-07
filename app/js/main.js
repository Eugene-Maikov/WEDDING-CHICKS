$(function () {
    // Menu nav toggle
    $("#nav_toggle").on("click", function (event) {
            event.preventDefault();
            $(this).toggleClass("active");
            $(".aside").toggleClass("aside-active");
            $(".modal").toggleClass("show");
            $(".menu").toggleClass("menu-transform");
        }),
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
        // $(".modal").on("click", function () {
        //     $(this).toggleClass("active");
        //     $(".modal").toggleClass("show");
        //     $(".aside").toggleClass("aside-active");
        //     $(".menu").toggleClass("menu-transform");
        // }),

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

        $(".stylePage__btn-1 ").on("click", function () {
            $(".stylePage__btn-1 ").toggleClass("stylePage__border-active");
            $(".stylePage__btn-2").removeClass("stylePage__border-active");
        }),
        $(".stylePage__btn-2 ").on("click", function () {
            $(".stylePage__btn-2 ").toggleClass("stylePage__border-active");
            $(".stylePage__btn-1").removeClass("stylePage__border-active");
        }),

        $('#privacy-switch').click(function () {
            if ($(this).is(':checked')) {
                $(".privacy__form").addClass("privacy__form-active");
            } else {
                $(".privacy__form").removeClass("privacy__form-active");
            }
        });
    $(document).ready(function () {
        $(".question-icon").hover(function () { // задаем функцию при наведении курсора на элемент и при его отведении	
            $(".box-map ").toggleClass("box-map--active") // добавляем, или убираем класс у текущего элемента div
        });
    });


})