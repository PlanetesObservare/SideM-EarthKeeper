(function($) {
  $(function() {
    //Set Variables
    var $page = $('html, body')
    var $navbarItems = $('#main-nav a')
    var $topLink = $('.top-link')

    //Navigation
    $navbarItems.on('click', function (e) {
      e.preventDefault()

      var target = $(this).data('target')

      if (target != null && target != '') {
        $page.animate({
          scrollTop: $(target).offset().top - $navbarItems.outerHeight(true)
        }, 1000)
      }
    })

    $topLink.on('click', function (e) {
      e.preventDefault()

      $page.animate({
        scrollTop: $page.offset().top - $navbarItems.outerHeight(true)
      }, 1000)
    })
  })
})(jQuery)