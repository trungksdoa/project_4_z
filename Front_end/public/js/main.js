/* -------------------------------------
		CUSTOM FUNCTION WRITE HERE
-------------------------------------- */
jQuery(document).on('ready', function() {
	"use strict";
	jQuery('.tg-themetabnav > li > a').hover(function() {
		jQuery(this).tab('show');
	});
	/*--------------------------------------
			SCROLL TO TOP					
	--------------------------------------*/
	var _tg_btnscrolltop = jQuery("#tg-btnbacktotop");
	_tg_btnscrolltop.on('click', function(){
		var _scrollUp = jQuery('html, body');
		_scrollUp.animate({ scrollTop: 0 }, 'slow');
	})
	/* -------------------------------------
			COLLAPSE MENU SMALL DEVICES
	-------------------------------------- */
	// function collapseMenu(){
	// 	jQuery('.menu-item-has-children, .menu-item-has-mega-menu').prepend('<span class="tg-dropdowarrow"><i class="fa  fa-angle-right"></i></span>');
	// 	jQuery('.menu-item-has-children span, .menu-item-has-mega-menu span').on('click', function() {
	// 		jQuery(this).next().next().slideToggle(500);
	// 		jQuery(this).parent('.menu-item-has-children, .menu-item-has-mega-menu').toggleClass('tg-open');
	// 	});
	// }
	// collapseMenu();
	/* -------------------------------------
			COLLECTION COUNTER
	-------------------------------------- */
	try {
		var _tg_collectioncounters = jQuery('#tg-collectioncounters');
		_tg_collectioncounters.appear(function () {
			
			var _tg_collectioncounter = jQuery('.tg-collectioncounter h3');
			_tg_collectioncounter.countTo({
				formatter: function (value, options) {
					return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
				}
			});
		});
	} catch (err) {}

	/* -------------------------------------
			Google Map
	-------------------------------------- */
	jQuery("#tg-locationmap").gmap3({
		marker: {
			address: "1600 Elizabeth St, Melbourne, Victoria, Australia",
			options: {
				title: "Books Library",
			}
		},
		map: {
			options: {
				zoom: 16,
				scrollwheel: false,
				disableDoubleClickZoom: true,
			}
		}
	});
	// /*------------------------------------------
	// 		PRODUCT INCREASE
	// ------------------------------------------*/
	// jQuery('em.minus').on('click', function () {
	// 	jQuery('#quantity1').val(parseInt(jQuery('#quantity1').val(), 10) - 1);
	// });
	// jQuery('em.plus').on('click', function () {
	// 	jQuery('#quantity1').val(parseInt(jQuery('#quantity1').val(), 10) + 1);
	// });
});