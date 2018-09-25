$( document ).ready(function() {

initTabs();	

jQuery(".deletable + .material-icons").click(function(){
  $(this).prev().val('');
});

jQuery(".extender-header").click(function(){
	
  
	if($(this).parent().hasClass("accordion"))
	{
		var parentAcc = $(this).parent();
		$(parentAcc).children('.extender-header').each(function () {
			$(this).removeClass("extended");
			$(this).next().hide();			// "this" is the current element in the loop
});
	}
	$(this).next().toggle();
	if($(this).hasClass("extended"))
	{
		$(this).removeClass("extended");	
		$(this).find('i').html("keyboard_arrow_down");
	}
	else 
	{
		$(this).addClass("extended");
		$(this).find('i').html("keyboard_arrow_up");		
	}
	  
});

jQuery(".tab-link").click(function(){
	/*remove active class from all links*/
	var parentElem = this.closest(".tab-group");
	$(parentElem).find(".tab-link").removeClass("active");
	$(parentElem).find(".tab-content").removeClass("active");
	var index = $(".tab-link").index(this);
	var linkToActivate = ".tab-link:eq("+index+")";
	var tabToActivate = ".tab-content:eq("+index+")";
	$(tabToActivate).addClass("active");
	$(linkToActivate).addClass("active"); // gets the third td element
	
    });
	
jQuery("#menu").click(function(){
	$(".bigmenu").toggle();
  });
	
});


function openPopup(popupID,popupTitle)
{
	var popup=$(popupID);
	popup.show();
	$( "<div class='popup-overlay'></div>" ).insertBefore( popup );
	if(popup.children('.closePopup').length<=0){
		popup.prepend("<i class='material-icons md-30 closePopup white' onclick='closePopup(this)'>cancel</i>");
		}
	popup.prepend('<div class=\'popupTitle b\'>'+popupTitle+'</div>');
	 processAutoheight();
}
function closePopup(toClose)
{
var parent = $(toClose).closest('.popup');	
var title = parent.children('.popupTitle');	
console.log(parent);
title.remove();
parent.prev().remove();
parent.hide();

}

function processAutoheight()
{
    var maxHeight = 0;
    $(".autoheight > *").each(function(){

        height = $(this).outerHeight(true);
        if (height > maxHeight ) {
            maxHeight = height;
        }
    });
	
    $(".autoheight").height(maxHeight+100);
}

function initTabs()
{
	$(".tab-group").each(function(){
			$(this).find('.tab-link:first').addClass('active');
			$(this).find('.tab-content:first').addClass('active');
    });
	
}
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});