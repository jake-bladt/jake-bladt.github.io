(function($) {
  var app = function() {};

  app.replaceWithPartial = function(selector, partialPageUrl) {
  	var $elem = $(selector);
  	$.get({ 
	  url: partialPageUrl,
	  done: function(html) {
	    console.log('partial retrieved.');
        $elem.replaceWith(html);
      }
    });
  };

  $(document).ready(function() {
    $('#contactLink').click(function() {
      app.replaceWithPartial('#mainContent', 'contact.html');
    });

  });
	
})(jQuery);
