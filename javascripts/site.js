$(document).ready(function() {
    $('.player img').wrap(function () {
        return '<span class="image-wrap ' + $(this).attr('class') +
               '" style="position:relative; display:inline-block; background:url(' + $(this).attr('src') +
               ') no-repeat center center;" />';
    });
    $('.player img').css("opacity", "0");
  
  var ExchangeRouter = Backbone.Router.extend({
      routes: {
          ":page": "toggle"
      },
      toggle: function(page) {
        // Default to the app library
        var destinationId = "#om-library";
        // Go to the SDKs if that is what's asked for
        if (page === "sdks") {
            destinationId = "#git-repos";
        }

        // Update the page
        var duration = 0; // default to no animation
        if (this.animate) {
            // Animate slowly
            duration = 'slow';
        }
        // Show the correct content
        var slideUp = $(destinationId).data('slideup');
        $(slideUp).slideUp(duration, function(){
          var slideDown = $(destinationId).data('slidedown');
          $(slideDown).slideDown(duration);
        });

        // Update the "buttons"
        $('#toggler').find('span').removeClass("current");
        $(destinationId).addClass("current");
      },
      animate: false
  });

  // Initialize backbone routing
  var router = new ExchangeRouter();
  Backbone.history.start({pushState: false}); 

  // Handle click events on the toggler
  $('#toggler').delegate("span", "click", function(e) {
      router.animate = true;
      var destinationHash = "applib";
      if (e.currentTarget.id == "git-repos") {
          destinationHash = "sdks";
      }
      router.navigate(destinationHash, {trigger: true});
  });
}); 
