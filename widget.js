var buttonUrl = "http://localhost:5000/v1/"; // Replace with real one
document.addEventListener("DOMContentLoaded", function(event) {
  var buttons = document.getElementsByClassName("superhero-tip-button");
  var iframes = [];
  for (var i = 0; i < buttons.length; i++) {
    var size = buttons[i].getAttribute("data-size") ? buttons[i].getAttribute("data-size") : "icon";
    var href = buttons[i].getAttribute("data-href") ? buttons[i].getAttribute("data-href") : window.location.href;
    var address = buttons[i].getAttribute("data-address");

    var iframe = document.createElement('iframe');
    iframe.src = buttonUrl + size + "?url=" + href;
    iframe.setAttribute('style','max-width:210px;max-height:120px;overflow:hidden;');
    iframe.setAttribute("scrolling", "no");
    iframe.setAttribute("frameborder", "0");
    if (address) iframe.setAttribute("data-address", address);
    iframes[i] = iframe;
  }

  for(var f in iframes) {
    document.getElementsByClassName("superhero-tip-button")[0].replaceWith(iframes[f]);
  }
});