$(document).ready(function () {


	$(window).scroll(function (){
		scroll = $(window).scrollTop();
		if (scroll > 100) {
			var menu = $("#menu");
			menu.css({ position: "fixed" });
			menu.css({ width: "84%" });
			menu.css({ top: "0" });
			menu.css({ left: "110px" });
			menu.css("margin-rigth","10px");
			$("menu a").css({ color: "#fff" });
      $(".logo").css({ color: "#fff" });
      menu.css({ "z-index": "1" });
			
		}else{
			$("#menu").css({ position: "relative" });
			$("#menu").css({ width: "100%" });
			$("#menu").css({ left: "0px" });
			$("#menu").css("margin-bottom","20px");
				
		}

		//MenuOracion

		if (scroll > 50) {
			var menuOracion = $(".menu-oracion");
			menuOracion.css({ position: "fixed" });
			menuOracion.css({ width: "91%" });
			menuOracion.css({ top: "0" });
			menuOracion.css({ left: "0px" });
			menuOracion.css("margin-rigth","10px");
			$(".menuOracion").css({ color: "#fff" });
      $(".logo").css({ color: "#fff" });
      menu.css({ "z-index": "1" });
			
		}else{
			$(".menuOracion").css({ position: "relative" });
			$(".menuOracion").css({ width: "100%" });
			$(".menuOracion").css({ left: "0px" });
			$(".menuOracion").css("margin-bottom","20px");
				
		}
	});


	//Slider
	$(".galeria").bxSlider({
		auto: true,
		autoControls: false,
		stopAutoOnClick: true,
		pager: false,
		speed: 3000,
		slideWidth: 1200,
	});

	//Eventos de Redes sociales del menu
	var youtube = $("#youtube");
	var facebook = $("#facebook");

	youtube.css("font-family", "websymbolsregular").css("font-size", "18px");
	facebook.css("font-family", "websymbolsregular");

	var youtube = $("#youtube");
	function CambiaRojo() {
		$(this).css("background", "red");
	}

	function CambiaAzul() {
		$(this).css("background", "#333");
	}

	youtube.hover(CambiaRojo, CambiaAzul);

	//Usando selector para cambiar CSS
	var menuOracion = $(".menu-oracion");

	menuOracion.css("padding-left", "60px").css("padding-right", "60px");


});
