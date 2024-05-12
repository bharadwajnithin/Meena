window.addEventListener('scroll', function() {
    var scrollableText = document.getElementById('scrollableText');
    var windowHeight = window.innerHeight;
    var scrollY = window.scrollY || window.pageYOffset;

    // Calculate the distance from the top of the window to the top of the scrollable text
    var textTop = scrollableText.getBoundingClientRect().top + scrollY;

    // Calculate the distance from the bottom of the window to the top of the scrollable text
    var textBottom = scrollableText.getBoundingClientRect().bottom + scrollY;

    // If the top of the scrollable text is within the window height
    if (textTop < windowHeight && textBottom > 0) {
        // Add more text to the scrollable description
        scrollableText.innerHTML += "<p>This is additional text added dynamically as you scroll down.</p>";
    }
});
