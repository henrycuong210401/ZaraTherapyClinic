// login box
$(document).ready(function () {
    $(".background-signup").html(`
    <div class="background-signup-content d-flex overflow-hidden">
      <div class="w-50 register flex-column justify-content-center align-items-center">
        <label for="" class="d-block mb-4">
          <h1 class="s-40">Sign in</h1>
        </label>
        <input type="email" class="form-control w-75 email d-inline-block" placeholder="Email" id="exampleInputEmail1">
        <input type="password" class="form-control w-75 password d-inline-block mt-3" placeholder="Password"
          id="exampleInputPassword1">
        <p class="s-16 mt-3 mb-3">Forgot your password?</p>
        <button type="button" class="btn btn-primary login-btn bth-signin">SIGN IN</button>
      </div>

      <div class="w-50 signupp d-flex flex-column justify-content-center align-items-center">
        <label for="" class="d-block mb-4 text-white">
          <h1 class="s-40">Hello, Friend!</h1>
        </label>
        <button type="button" class="btn btn-primary register-btn">SIGN UP</button>
      </div>

      <div class="register2 w-50 flex-column justify-content-center align-items-center">
        <label for="" class="d-block mb-4">
          <h1 class="s-40">Create Account</h1>
        </label>
        <input type="text" class="form-control name w-75 d-inline-block" placeholder="Name" id="">
        <input type="email" class="form-control user w-75 d-inline-block mt-3 mb-3" placeholder="Email"
          id="exampleInputEmail1">
        <input type="password" class="form-control pass w-75 d-inline-block" placeholder="Password"
          id="exampleInputPassword1">
        <button type="button" class="btn btn-primary login-btn bth-signup mt-3">SIGN UP</button>
      </div>
    </div>
    `)
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
//   animation login box
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

  $(".bth-signup").click(function(){
      var user = $(".user").val();
      var pass = $(".pass").val();
      if(!user || !pass){
        alert("Write somthing!!");
      }else{
          var newguest = new guest(user,pass);
          localStorage.setItem("guest",JSON.stringify(newguest));
          alert("Successful account creation, login please");
          $(".user").val("");
          $(".pass").val("");
          $(".name").val("");
      }
    })
    $(".bth-signin").click(function(){
        var guest2 = JSON.parse(localStorage.getItem("guest"));
        if(!$(".email").val() || !$(".password")){
            alert("Write somthing!!");
        }else{
            if(($(".email").val()!=guest2.user) || ($(".password").val()!=guest2.pass)){
                alert("Username or Password incorrect")
            }else{
                alert("Login successfully");
                $(".email").val("");
                $(".password").val("");
                $(".background-signup").css("display", "none");

            }
        }
    })

});
function guest(user,pass){
    this.user = user;
    this.pass = pass;
}