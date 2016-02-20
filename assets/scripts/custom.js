(function($) {
  var app = function() {};

  app.replaceWithPartial = function(selector, partialPageUrl) {
  	var $elem = $(selector);
  	$.get({ 
	  url: partialPageUrl,
	  done: function(html) {
        $elem.replaceWith(html);
      }
    });
  };

  $(document).ready(function() {
    $('#contactLink').click(function() {
  	  console.log('contact link clicked.');
      app.replaceWithPartial('#mainContent', 'contact.html');
    });

  });
	
})(jQuery);
