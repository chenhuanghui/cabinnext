// // intercom setup
// window.intercomSettings = {
//   app_id: "nucsdvyk"
// };

// // We pre-filled your app ID in the widget URL: 'https://widget.intercom.io/widget/qhnzh7qq'
// (function () {
//   var w = window;
//   var ic = w.Intercom;
//   if (typeof ic === "function") {
//     ic("reattach_activator");
//     ic("update", w.intercomSettings);
//   } else {
//     var d = document;
//     var i = function () {
//       i.c(arguments);
//     };
//     i.q = [];
//     i.c = function (args) {
//       i.q.push(args);
//     };
//     w.Intercom = i;
//     var l = function () {
//       var s = d.createElement("script");
//       s.type = "text/javascript";
//       s.async = true;
//       s.src = "https://widget.intercom.io/widget/nucsdvyk";
//       var x = d.getElementsByTagName("script")[0];
//       x.parentNode.insertBefore(s, x);
//     };
//     if (w.attachEvent) {
//       w.attachEvent("onload", l);
//     } else {
//       w.addEventListener("load", l, false);
//     }
//   }
// })();

// window.Intercom('boot', {
//   app_id: 'nucsdvyk'
// });

// fb app setup
window.fbAsyncInit = function() {
  FB.init({
    appId      : '765509297592229',
    cookie     : true,
    xfbml      : true,
    version    : 'v7.0'
  });
    
  FB.AppEvents.logPageView();   
    
};

// facebook pixel
(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '638676226745406');
fbq('track', 'PageView');


// google analytics
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-168839658-1');
