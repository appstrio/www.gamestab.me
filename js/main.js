$(document).ready(function(){

    var installButtonClicked = function(e){
        console.log('installButtonClicked');
        e.stopPropagation();
        e.preventDefault();
//        ga('send', 'event', 'install-button', 'click');
        chrome.webstore.install("https://chrome.google.com/webstore/detail/amlhfkalaoikfbpoolhpdhignhjhlhko", function(){
//            ga('send', 'event', 'install-button', 'success');
        },function(){
//            ga('send', 'event', 'install-button', 'error');
        });
    };

    $('#install-button').click(installButtonClicked);


});


//(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
//    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
//    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
//})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
//
//ga('create', 'UA-40237562-1', 'onefeed.me');
//ga('send', 'pageview');

