$(function() {

  /**
   * Contact form animations
   */

  $('body').on('input propertychange', '.floating-label-form-group', function(e) {
    $(this).toggleClass('floating-label-form-group-with-value', !!$(e.target).val());
  }).on('focus', '.floating-label-form-group', function() {
    $(this).addClass('floating-label-form-group-with-focus');
  }).on('blur', '.floating-label-form-group', function() {
    $(this).removeClass('floating-label-form-group-with-focus');
  });

  /**
   * Wordpress RSS Feed Loader
   */
  $('#rss-feeds').rss('https://sanjitd.medium.com/feed/', {
    limit: 3,
    host: 'www.sanjitdutta.com/feedr/',
    ssl: true,
    support: false,
    layoutTemplate: '<div class=\'feed-container\'>{entries}</div>',
    entryTemplate: '<div class=\'feed-post\'> \
      <h3><a href=\'{url}\' target=\'_blank\'>{title}</a></h3> \
      <h3 class=\'date\'>{date}</h3> \
      <div class=\'teaser\'>{teaserImage}</div> \
      <p>{mediumBodyPlain} <a href=\'{url}\' target=\'_blank\'>more</a></p> \
      <br class=\'clear\' /> \
    </div>',
    dateFormat: 'MMMM Do, YYYY',
    tokens: {
      mediumBodyPlain: function(entry) {
        // var plainText = $(entry.content).text();
        var plainText = $(entry.content).filter('p').text();
        return plainText.substring(0, 300) + '...';
      }
    },

  });

});
