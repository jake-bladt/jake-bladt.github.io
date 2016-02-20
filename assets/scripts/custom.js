(function($) {
  var app = function() {};

  app.replaceWithPartial = function(selector, partialPageUrl) {
  	var $elem = $(selector);
  	$.get({ 
	  url: partialPageUrl,
	  done: function(html) {
        $elem.replaceWith(html);
    });
  };

  $('#contactLink').click(function() {
    app.replaceWithPartial('#mainContent', 'contact.html');
  });

	
})(jQuery);
