$(document).ready(function () {
  $(".signin").click(function () {
    $(".background-signup").css("display", "flex");
    $(".register2").css("animation", "");
    $(".signupp").css("animation", "");
    $(".register").css("animation", "");
  });
  $(".background-signup-content").click(function (event) {
    event.stopPropagation();
  });
  $(".background-signup").click(function () {
    $(".background-signup").css("display", "none");
  });
  //   $(".background-signup-content")
  $(".register-btn").click(function () {
    if ($(".register-btn").text() == "SIGN UP") {
      $(".register").css("display", "none");
      $(".signupp label h1").text("Welcome back!");
      $(".register-btn").text("SIGN IN");
      $(".register2").css("display", "flex");
      $(".register2").css("animation", "LtR ease 0.7s");
      $(".signupp").css("animation", "RtoL ease 0.7s");
    } else {
      $(".register").css("display", "flex");
      $(".signupp label h1").text("Hello friend!");
      $(".register-btn").text("SIGN UP");
      $(".register2").css("display", "none");
      $(".register").css("animation", "RtL ease 0.7s");
      $(".signupp").css("animation", "LtoR  ease 0.7s");
    }
  });
});
