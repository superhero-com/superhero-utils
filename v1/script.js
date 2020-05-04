document.addEventListener("DOMContentLoaded", function(event) {
  var button = document.getElementById("superhero-tip-link");
  var isIframe = window.self !== window.top;
  var tipUrl = isIframe ? window.parent.location.href : window.location.href;

  button.addEventListener("click", function() {
    var url = new URL('https://wallet.superhero.com/tip');
    url.searchParams.set('url', encodeURIComponent(tipUrl));
    url.searchParams.set('x-success', window.location);
    url.searchParams.set('x-cancel', window.location);
    if (isIframe) {
      window.parent.location.href = url;
    } else {
      window.location.href = url
    }
  });
});