(function($) {
  var app = function() {};

  app.replaceWithPartial = function(selector, partialPageUrl) {
  	var $elem = $(selector);
  	$.get({
  	  url: partialPageUrl,
  	  cache: false
	}).done(function(html) {
      $elem.replaceWith(html);
    });
  };

  $(document).ready(function() {
    app.replaceWithPartial('#mainContent', 'home.html');

    $('#contactLink').click(function() {
      app.replaceWithPartial('#mainContent', 'contact.html');
    });

    $('#homeLink').click(function() {
      app.replaceWithPartial('#mainContent', 'home.html');
    });
  });
	
})(jQuery);
