"use strict";


    let target = document.getElementById('output');

    function buttonClick(e) {
    target.value += e.value;
    }

    function allClear() {
    target.value = null;
    }

    function result() {
        target.value = new Function("return " + target.value)();
    }
    
    
