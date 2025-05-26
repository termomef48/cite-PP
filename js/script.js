// script.js

$(document).ready(function () {
  $("nav a").on("click", function () {
    $("nav a").removeClass("active");
    $(this).addClass("active");
  });

  // Демонстраційний ефект
  $(".anime-title").on("mouseenter", function () {
    $(this).css("color", "red");
  }).on("mouseleave", function () {
    $(this).css("color", "");
  });

});

$(document).ready(function () {
  $('.zoomable').on('click', function () {
    const src = $(this).attr('src');
    $('#fullscreen-overlay img').attr('src', src);
    $('#fullscreen-overlay').fadeIn();
  });

  $('#fullscreen-overlay').on('click', function () {
    $(this).fadeOut();
  });
});

$(document).ready(function () {
  $('.character-image').on('click', function () {
    const src = $(this).attr('src');
    $('#modalImg').attr('src', src);
    $('#imageModal').fadeIn();
  });

  $('.modal-close, #imageModal').on('click', function () {
    $('#imageModal').fadeOut();
  });

  // Не закривати при кліку на саме зображення
  $('#modalImg').on('click', function (e) {
    e.stopPropagation();
  });
});


$(document).ready(function () {
  // Інші скрипти...

  $('#secret-text').on('click', function () {
    $(this).text('тему сайту мені надала дівчина');
    $(this).css('color', 'white');
  });
});

$(document).ready(function () {
  $('.spoiler-label').on('click', function () {
    $(this).next('.spoiler-text').slideToggle();
    $(this).hide();
  });
});


$(document).ready(function () {
  // Показати пункти при наведенні на заголовок
  $(".hover-reveal").mouseenter(function () {
    $(".features-list li").each(function (index) {
      $(this).delay(index * 200).fadeIn(400);
    });
  });

  // При кліку — розкриття деталей
  $(".features-list li").click(function () {
    $(this).find(".details").slideDown();
  });

  // Подвійний клік — згортання деталей
  $(".features-list li").dblclick(function () {
    $(this).find(".details").slideUp();
  });

  // Початково ховаємо всі li
  $(".features-list li").hide();
});
