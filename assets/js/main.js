

let draw = Chart.controllers.line.prototype.draw;
		Chart.controllers.line = Chart.controllers.line.extend({
		draw: function() {
		draw.apply(this, arguments);
		let ctx = this.chart.chart.ctx;
		let _stroke = ctx.stroke;
		ctx.stroke = function() {
		ctx.save();
		ctx.shadowColor = '#fdcb6e';
		ctx.shadowBlur = 20;
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = 1;
		_stroke.apply(this, arguments)
		ctx.restore();
		}
		}
		});
		let ctx = document.getElementById("sportChart").getContext('2d');
		Chart.defaults.global.defaultFontColor = "#979BA0";
		let myChart = new Chart(ctx, {
		type: 'line',
		data: {
		labels: ["Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь", "Январь"],
		datasets: [{
		label: "Новые партнёры за последние 6 месяцев",
		data: [65, 59, 80, 81, 56, 93],
		dynamicDisplay: true,
		borderColor: '#fdcb6e',
		pointBackgroundColor: "#fff",
		pointBorderColor: "#fff",
		pointHoverBackgroundColor: "#fd846e",
		pointHoverBorderColor: "#fd846e",
		pointRadius: 6,
		pointHoverRadius: 8,
		fill: false
		}]
		}
		});

jQuery(window).scroll(function(){
		var $sections = $('section');
		$sections.each(function(i,el){
		var top  = $(el).offset().top-100;
		var bottom = top +$(el).height();
		var scroll = $(window).scrollTop();
		var id = $(el).attr('id');
		if( scroll > top && scroll < bottom){
		$('a.active').removeClass('active');
			$('a[href="#'+id+'"]').addClass('active');
		}
		})
		});
		$("main").on("click",".nav-dote a", function (event) {
		// исключаем стандартную реакцию браузера
		event.preventDefault();
		
		// получем идентификатор блока из атрибута href
		var id  = $(this).attr('href'),
		
		// находим высоту, на которой расположен блок
		top = $(id).offset().top;
		
		// анимируем переход к блоку, время: 1000 мс
		$('body,html').animate({scrollTop: top}, 1000);
		});
		$('.center').slick({
		centerMode: true,
		centerPadding: '0px',
		slidesToShow: 3,
		responsive: [
		{
		breakpoint: 768,
		settings: {
		arrows: false,
		centerMode: true,
		centerPadding: '0px',
		slidesToShow: 1
		}
		},
		{
		breakpoint: 480,
		settings: {
		arrows: false,
		centerMode: true,
		centerPadding: '0px',
		slidesToShow: 1
		}
		}
		]
		});