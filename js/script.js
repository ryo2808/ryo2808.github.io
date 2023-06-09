//drawerの開け閉め=================================================
jQuery(".drawer-icon").on("click", function (e) {
  e.preventDefault();

  jQuery(".drawer-icon").toggleClass("is-active");
  jQuery(".drawer-content").toggleClass("is-active");
  jQuery(".drawer-background").toggleClass("is-active");

  return false;
});

//ページスクロール→※headerに id="js-header"を追記しないといけない！！
// #から始まるURLがクリックされた時
$('a[href^="#"]').click(function () {
  // 移動速度を指定（ミリ秒）
  let speed = 300;
  // hrefで指定されたidを取得
  let id = jQuery(this).attr("href");
  // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
  let target = jQuery("#" == id ? "html" : id);
  // ページのトップを基準にターゲットの位置を取得
  let position = jQuery(target).offset().top;
  // ターゲットの位置までspeedの速度で移動
  jQuery("html, body").animate(
    {
      scrollTop: position - $("#js-header").outerHeight(),
    },
    speed
  );
  return false;
});

new WOW().init();

//お問い合わせフォーム
let $form = $("#js-form");
$form.submit(function (e) {
  $.ajax({
    url: $form.attr("action"),
    data: $form.serialize(),
    type: "POST",
    dataType: "xml",
    statusCode: {
      0: function () {
        //送信に成功したときの処理
        $form.slideUp();
        $("#js-success").slideDown();
      },
      200: function () {
        //送信に失敗したときの処理
        $form.slideUp();
        $("#js-error").slideDown();
      },
    },
  });
  return false;
});

//formが入力されている時、されていない時の挙動
let $submit = $("#js-submit");
$("#js-form input, #js-form textarea").on("change", function () {
  if (
    $('#js-form input[type="text"]').val() !== "" &&
    // $('#js-form input[type="email"]').val() !== "" &&
    $('#js-form input[name="entry.1920937190"]').prop("checked") === true
  ) {
    //全て入力された時
    $submit.prop("disabled", false);
    $submit.addClass("-active");
  } else {
    //入力されていない時
    $submit.prop("disabled", true);
    $submit.removeClass("-active");
  }
});

//スライダー
$(function () {
  $(".slider").slick({
    autoplay: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // 横幅がバラバラなスライドにするか [初期値:false]
    variableWidth: true,
    // スライドをループさせるか [初期値:true]
    infinite: true,
  });
});

//アコーディオン
jQuery(".qa-box-q").on("click", function () {
  jQuery(this).next().slideToggle();
  jQuery(this).children(".qa-box-icon").toggleClass("is-open");
});

//to-top
jQuery(window).on("scroll", function () {
  if (100 < jQuery(this).scrollTop()) {
    jQuery(".to-top").addClass("is-show");
  } else {
    jQuery(".to-top").removeClass("is-show");
  }
});
