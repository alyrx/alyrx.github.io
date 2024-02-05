function openDropdown() {
    document.getElementById('headerDropdown').classList.toggle("hidden")
}
  
function calculateContentHeight() {
    var headerHeight = document.getElementById("header").offsetHeight;
    var footerHeight = document.getElementById("footer").offsetHeight;
    const windowHeight = window.innerHeight;

    var contentHeight = ((windowHeight - (headerHeight + footerHeight)) / windowHeight) * 100;
    
    // alert(document.getElementById('content').classList[1]);
    if (window.onload) {
        document.getElementById('content').classList.add('flex');
        document.getElementById('content').classList.add(`h-[${contentHeight}vh]`);
    }

    var pastContentHeight = document.getElementById('content').classList[1];
    document.getElementById('content').classList.remove(pastContentHeight);
    document.getElementById('content').classList.add(`h-[${contentHeight}vh]`);
}
  
window.onload = function () {
    if (window.innerWidth <= 767) {
        document.getElementById('content').classList.add('h-dvh');
    } else {
        calculateContentHeight();
    }
}

window.onresize = function () {
    if (window.innerWidth <= 767) {
        var pastContentHeight = document.getElementById('content').classList[1];
        document.getElementById('content').classList.remove(pastContentHeight);
        
        document.getElementById('content').classList.add('h-dvh');
    } else {
        calculateContentHeight();
    }
}