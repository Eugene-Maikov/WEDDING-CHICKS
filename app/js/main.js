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
    $(".webadress__btn-change").on("click", function () {
      $(".webadress").addClass("webadress-notActive");
      $(".domen").addClass("domen-active");
    }),
    $(".domen__btn-cancel").on("click", function () {
      $(".webadress").removeClass("webadress-notActive");
      $(".domen").removeClass("domen-active");
    }),

    //модальное окно "Вы действительно хотите удалить ЗАПИСЬ?"
    $(".box__delete-press").on("click", function () {
      event.preventDefault();
      $(".modal").addClass("show");
      $(".box__delete").addClass("box__delete-active");
      $(".box__delete").addClass("box__delete-active");
      $("body").addClass('no-scroll');
    }),
    $(".box__delete-close").on("click", function () {
      event.preventDefault();
      $(".modal").removeClass("show");
      $(".box__delete").removeClass("box__delete-active");
      $("body").removeClass('no-scroll');
    }),
    $(".button__delete-cloce").on("click", function () {
      event.preventDefault();
      $(".modal").removeClass("show");
      $(".box__delete").removeClass("box__delete-active");
      $("body").removeClass('no-scroll');
    }),

    // ================== Всплывающее окно (удаление фото) ==========================================
    $('.popup-open').click(function () {
      $('.popup-fade').fadeIn(100);
      // $('.popup-fade').slideUp(300);
      $("body").addClass('no-scroll');
      return false;
    });
  // Клик по ссылке "Закрыть".
  $('.popup-close, .popup-close-btn').click(function () {
    $(this).parents('.popup-fade').fadeOut(100);
    // $(this).parents('.popup-fade').slideDown("slow");
    $("body").removeClass('no-scroll');
    return false;
  });
  // Закрытие по клавише Esc.
  $(document).keydown(function (e) {
    if (e.keyCode === 27) {
      e.stopPropagation();
      $('.popup-fade').fadeOut(100);
      $("body").removeClass('no-scroll');
    }
  });
  // Клик по фону, но не по окну.
  $('.popup-fade').click(function (e) {
    if ($(e.target).closest('.popup').length == 0) {
      $(this).fadeOut(100);
      $("body").removeClass('no-scroll');
    }
  });
  // ============================================================

  $(".button__delete-edit").on("click", function () {
    event.preventDefault();
    $(".form__edit").addClass("form__edit-active");
    $(".placing__buttons").addClass("placing__buttons-notActive");
    $(".dn").addClass("dn-active");
    $(".button__save-edit").addClass("button__save-edit-active");
    $(".button__delete-edit").addClass("button__delete-edit-notActive");
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

    // ==================== Содержимое сохранено (popup) ===================================
    $('#inline-popups').magnificPopup({
      delegate: 'a',
      removalDelay: 500,
      callbacks: {
        beforeOpen: function () {
          this.st.mainClass = this.st.el.attr('data-effect');
        }
      },
      midClick: true
    });


  // Hinge effect popup
  $('a.hinge').magnificPopup({
    mainClass: 'mfp-with-fade',
    removalDelay: 1000,
    callbacks: {
      beforeClose: function () {
        this.content.addClass('hinge');
      },
      close: function () {
        this.content.removeClass('hinge');
      }
    },
    midClick: true
  });


  // ====================== Валидация обязательых форм =================================
  $('#story_form1').submit(function (e) {
    e.preventDefault();
    var story_form1 = $('#story_title').val();
    var story_form1 = $('#event_date').val();
    var story_form1 = $('#event_time').val();
    var story_form1 = $('#place_title').val();
    var story_form1 = $('#address').val();
    var story_form1 = $('#city').val();
    var story_form1 = $('#state').val();
    var story_form1 = $('#index').val();

    $(".error").remove();

    if (story_form1.length < 1) {
      $('#story_title').after('<span class="error">Имя события обязательно</span>').addClass('border-red');
    }
    if (story_form1.length < 1) {
      $('#event_date').after('<span class="error">Требуется дата события</span>').addClass('border-red');
    }
    if (story_form1.length < 1) {
      $('#event_time').after('<span class="error">Требуется время события</span>').addClass('border-red');
    }
    if (story_form1.length < 1) {
      $('#place_title').after('<span class="error">Название события обязательно</span>').addClass('border-red');
    }
    if (story_form1.length < 1) {
      $('#address').after('<span class="error">Требуется адрес</span>').addClass('border-red');
    }
    if (story_form1.length < 1) {
      $('#city').after('<span class="error">Требуется город</span>').addClass('border-red');
    }
    if (story_form1.length < 1) {
      $('#state').after('<span class="error">Требуется государство</span>').addClass('border-red');
    }
    if (story_form1.length < 1) {
      $('#index').after('<span class="error">Требуется индекс</span>').addClass('border-red');
    }
  });
  $('#RSVP_form').submit(function (e) {
    e.preventDefault();
    var RSVP_form = $('#event_title').val();
    var RSVP_form = $('#event_place').val();
    var RSVP_form = $('#event_date').val();
    var RSVP_form = $('#event_time').val();
    var RSVP_form = $('#event_end-time').val();
    var RSVP_form = $('#event_address').val();
    var RSVP_form = $('#event_city').val();
    var RSVP_form = $('#event_state').val();
    var RSVP_form = $('#event_index').val();

    $(".error").remove();

    if (RSVP_form.length < 1) {
      $('#event_title').addClass('border-red');
      $('#event_place').addClass('border-red');
      $('#event_date').addClass('border-red');
      $('#event_time').addClass('border-red');
      $('#event_end-time').addClass('border-red');
      $('#event_address').addClass('border-red');
      $('#event_city').addClass('border-red');
      $('#event_state').addClass('border-red');
      $('#event_index').addClass('border-red');
    }
  });
  $('#story_form2').submit(function (e) {
    e.preventDefault();
    var story_form2 = $('#story_title2').val();
    var story_form2 = $('#event_date2').val();
    var story_form2 = $('#event_time2').val();
    var story_form2 = $('#place_title2').val();
    var story_form2 = $('#address2').val();
    var story_form2 = $('#city2').val();
    var story_form2 = $('#state2').val();
    var story_form2 = $('#index2').val();

    $(".error").remove();

    if (story_form2.length < 1) {
      $('#story_title2').after('<span class="error">Имя события обязательно</span>').addClass('border-red');
    }
    if (story_form2.length < 1) {
      $('#event_date2').after('<span class="error">Требуется дата события</span>').addClass('border-red');
    }
    if (story_form2.length < 1) {
      $('#event_time2').after('<span class="error">Требуется время события</span>').addClass('border-red');
    }
    if (story_form2.length < 1) {
      $('#place_title2').after('<span class="error">Название события обязательно</span>').addClass('border-red');
    }
    if (story_form2.length < 1) {
      $('#address2').after('<span class="error">Требуется адрес</span>').addClass('border-red');
    }
    if (story_form2.length < 1) {
      $('#city2').after('<span class="error">Требуется город</span>').addClass('border-red');
    }
    if (story_form2.length < 1) {
      $('#state2').after('<span class="error">Требуется государство</span>').addClass('border-red');
    }
    if (story_form2.length < 1) {
      $('#index2').after('<span class="error">Требуется индекс</span>').addClass('border-red');
    }
  });
  $('#placing_form2').submit(function (e) {
    e.preventDefault();
    var placing_form2 = $('#placing_type2').val();
    var placing_form2 = $('#placing_title2').val();
    var placing_form2 = $('#placing_address2').val();
    var placing_form2 = $('#placing_city2').val();
    var placing_form2 = $('#placing_state2').val();
    var placing_form2 = $('#placing_index2').val();
    var placing_form2 = $('#placing_phone2').val();

    $(".error").remove();

    if (placing_form2.length < 1) {
      $('#placing_type2').after('<span class="error">Требуется тип размещения</span>').addClass('border-red');
      $('#placing_title2').after('<span class="error">Имя обязательно</span>').addClass('border-red');
      $('#placing_address2').after('<span class="error">Требуется адрес</span>').addClass('border-red');
      $('#placing_city2').after('<span class="error">Требуется город</span>').addClass('border-red');
      $('#placing_state2').after('<span class="error">Требуется состояние</span>').addClass('border-red');
      $('#placing_index2').after('<span class="error">Требуется индекс</span>').addClass('border-red');
      $('#placing_phone2').after('<span class="error">Требуется номер телефона</span>').addClass('border-red');
    }
  });
  $('#placing_form').submit(function (e) {
    e.preventDefault();
    var placing_form = $('#placing_type').val();
    var placing_form = $('#placing_title').val();
    var placing_form = $('#placing_address').val();
    var placing_form = $('#placing_city').val();
    var placing_form = $('#placing_state').val();
    var placing_form = $('#placing_index').val();
    var placing_form = $('#placing_phone').val();

    $(".error").remove();

    if (placing_form.length < 1) {
      $('#placing_type').after('<span class="error">Требуется тип размещения</span>').addClass('border-red');
      $('#placing_title').after('<span class="error">Имя обязательно</span>').addClass('border-red');
      $('#placing_address').after('<span class="error">Требуется адрес</span>').addClass('border-red');
      $('#placing_city').after('<span class="error">Требуется город</span>').addClass('border-red');
      $('#placing_state').after('<span class="error">Требуется состояние</span>').addClass('border-red');
      $('#placing_index').after('<span class="error">Требуется индекс</span>').addClass('border-red');
      $('#placing_phone').after('<span class="error">Требуется номер телефона</span>').addClass('border-red');
    }
  });
  $('#registry_form').submit(function (e) {
    e.preventDefault();
    var registry_form = $('#registry_title').val();
    var registry_form = $('#registry_link').val();

    $(".error").remove();

    if (registry_form.length < 1) {
      $('#registry_title').after('<span class="error">Имя реестра обязательно</span>').addClass('border-red');
      $('#registry_link').after('<span class="error">Ссылка на реестр требуется</span>').addClass('border-red');
    }
  });



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
    $(".question-iconMap1").hover(function () { // задаем функцию при наведении курсора на элемент и при его отведении	
      $(".box-map1 ").toggleClass("box-map1--active") // добавляем, или убираем класс у текущего элемента div
    });
  });
  $(document).ready(function () {
    $(".question-iconMap2").hover(function () { // задаем функцию при наведении курсора на элемент и при его отведении	
      $(".box-map2 ").toggleClass("box-map2--active") // добавляем, или убираем класс у текущего элемента div
    });
  });
  $(document).ready(function () {
    $(".question-iconMap3").hover(function () { // задаем функцию при наведении курсора на элемент и при его отведении	
      $(".box-map3 ").toggleClass("box-map3--active") // добавляем, или убираем класс у текущего элемента div
    });
  });
  $(document).ready(function () {
    $(".question-iconMap4").hover(function () { // задаем функцию при наведении курсора на элемент и при его отведении	
      $(".box-map4 ").toggleClass("box-map4--active") // добавляем, или убираем класс у текущего элемента div
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