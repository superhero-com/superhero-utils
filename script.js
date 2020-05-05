document.addEventListener("DOMContentLoaded", function(event) {
  var button = document.getElementById("superhero-tip-link");
  var isIframe = window.self !== window.top;
  var tipUrl = isIframe ? window.parent.location.href : window.location.href;

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', 'https://raendom-backend.z52da5wt.xyz/cache/stats', true);
  xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4) {
          if (xmlhttp.status == 200) {
              var res = JSON.parse(xmlhttp.responseText);
              var tips = 0;
              for (var i = 0; i < res.by_url.length; i++) { 
                if (res.by_url[i].url === tipUrl) { 
                  tips = res.by_url[i].total_amount;
                  break;
                } 
              }
              var tipsEl = document.getElementById("tips");
              if (tipsEl) tipsEl.text = tips;
          }
      }
  }
  xmlhttp.send(null);

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