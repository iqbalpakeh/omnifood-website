$(document).ready(function() {
  /**
   * Sticky navigation
   */
  $(".js--section-features").waypoint(
    function(direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "60px"
    }
  );

  /**
   * Scroll to plans
   */
  $(".js--scroll-to-plans").click(function() {
    $("html, body").animate(
      {
        scrollTop: $(".js--section-plans").offset().top
      },
      1000
    );
  });

  /**
   * Scroll to start
   */
  $(".js--scroll-to-start").click(function() {
    $("html, body").animate(
      {
        scrollTop: $(".js--section-features").offset().top
      },
      1000
    );
  });
});
