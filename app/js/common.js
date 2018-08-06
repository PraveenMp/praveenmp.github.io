
document.getElementById('draw').style.display = "block";
document.getElementById('imageupload').style.display = "none";
document.getElementById('takesnapshot').style.display = "none";
document.getElementById('videorecord').style.display = "none";
document.getElementById('audio').style.display = "none";
function enableSection(value) {
    clearSections();
    switch (value) {
        case 1: document.getElementById('draw').style.display = "block";
            break;
        case 2: document.getElementById('imageupload').style.display = "block";
            break;
        case 3: document.getElementById('takesnapshot').style.display = "block";
            loadJS('js/takesnapshot.js', 'loadjs1');
            break;
        case 4: document.getElementById('videorecord').style.display = "block";
            loadJS('js/videorecord.js', 'loadjs2');
            break;
        case 5: document.getElementById('audio').style.display = "block";
            break;
    }
}
function clearSections() {
    document.getElementById('draw').style.display = "none";
    document.getElementById('imageupload').style.display = "none";
    document.getElementById('takesnapshot').style.display = "none";
    document.getElementById('videorecord').style.display = "none";
    document.getElementById('audio').style.display = "none";
}

function removeJS(value) {
    if (document.getElementById(value)) {
        document.getElementById(value).outerHTML = "";
    }
}

function loadJS(file, value) {
    // DOM: Create the script element
    var jsElm = document.createElement("script");
    // set the type attribute
    jsElm.id = value;
    jsElm.type = "application/javascript";
    // make the script element load file
    jsElm.src = file;
    // finally insert the element to the body element in order to load the script
    document.body.appendChild(jsElm);
}

function trace(arg) {
    const now = (window.performance.now() / 1000).toFixed(3)
    console.log(`${now}: `, arg);
}
