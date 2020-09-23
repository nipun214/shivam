var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

function togglemenu() {

    if ( $(".header .menu").css("right") == "0px" ) { // opened => closed

        $(".header .mobile-menu span:nth-child(2)").css("visibility", "visible");
        $(".header .mobile-menu span:nth-child(2)").css("height", "2px");
        $(".header .mobile-menu span:nth-child(2)").css("margin-bottom", "8px");
        $(".header .menu").css("right", "-100%");
        $(".header .menu").css("box-shadow", "none");

        $(".header .mobile-menu span:nth-child(1)").css("width", "35px");
        $(".header .mobile-menu span:nth-child(3)").css("width", "25px");

        $(".header .mobile-menu span:nth-child(1)").css("margin-left", "0");
        $(".header .mobile-menu span:nth-child(3)").css("margin-left", "10px");

        $(".header .mobile-menu span:nth-child(1)").css("transform", "rotate(0deg)");
        $(".header .mobile-menu span:nth-child(3)").css("transform", "rotate(0deg)");

        $(".header .mobile-menu span:nth-child(1)").css("margin-bottom", "8px");
        $(".header .mobile-menu span:nth-child(3)").css("margin-bottom", "8px");

        $(".header .mobile-menu span:nth-child(1)").css("margin-top", "0");
        $(".header .mobile-menu span:nth-child(3)").css("margin-top", "0");

    } else { // closed => opened

        $(".header .mobile-menu span:nth-child(2)").css("visibility", "hidden");
        $(".header .mobile-menu span:nth-child(2)").css("height", "0");
        $(".header .mobile-menu span:nth-child(2)").css("margin-bottom", "0");
        $(".header .menu").css("right", "0");
        $(".header .menu").css("box-shadow", "-20px 0px 20px 20px rgb(0 0 0 / 70%), 0 6px 20px 0 rgb(0 0 0 / 53%)");

        $(".header .mobile-menu span:nth-child(1)").css("width", "30px");
        $(".header .mobile-menu span:nth-child(3)").css("width", "30px");

        $(".header .mobile-menu span:nth-child(1)").css("margin-left", "0");
        $(".header .mobile-menu span:nth-child(3)").css("margin-left", "0");

        $(".header .mobile-menu span:nth-child(1)").css("transform", "rotate(45deg)");
        $(".header .mobile-menu span:nth-child(3)").css("transform", "rotate(-45deg)");

        $(".header .mobile-menu span:nth-child(1)").css("margin-bottom", "0");
        $(".header .mobile-menu span:nth-child(3)").css("margin-bottom", "0");

        $(".header .mobile-menu span:nth-child(1)").css("margin-top", "10px");
        $(".header .mobile-menu span:nth-child(3)").css("margin-top", "-2px");

    }


}
