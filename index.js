var $ = require('jquery');
module.exports = function adjust(elements, offset, min, max) {
    // initialize parameters
    offset = offset || 0;
    min = min || 0;
    max = max || Infinity;
    elements.each(function () {
        var element = $(this);
        // add element to measure pixel length of text
        var id = btoa(Math.floor(Math.random() * Math.pow(2, 64)));
        var tag = $('<span id="' + id + '">' + element.val() + '</span>').css({
            'display': 'none',
            'font-family': element.css('font-family'),
            'font-size': element.css('font-size'),
        }).appendTo('body');
        // adjust element width on keydown
        function update() {
            // give browser time to add current letter
            setTimeout(function () {
                // prevent whitespace from being collapsed
                tag.html(element.val().replace(/ /g, '&nbsp'));
                // clamp length and prevent text from scrolling
                var size = Math.max(min, Math.min(max, tag.width() + offset));
                if (size < max)
                    element.scrollLeft(0);
                // apply width to element
                element.width(size);
            }, 0);
        };
        update();
        element.keydown(update);
    });
};