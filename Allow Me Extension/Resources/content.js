// content.js
function() {
    'use strict';
    
    document.addEventListener('contextmenu', function(event) {
        event.stopPropagation();
    }, true);
    
    document.addEventListener('mousedown', function(event) {
        event.stopPropagation();
    }, true);
    
    document.addEventListener('selectstart', function(event) {
        event.stopPropagation();
    }, true);
    
    if (document.body) {
        document.body.oncontextmenu = null;
        document.body.ondragstart = null;
        document.body.onselectstart = null;
    }
}();
