
function previewFile() {
    var preview = document.getElementById('uploadprev'); //selects the query named img
    var file = document.getElementById('uploadfile').files[0]; //sames as here
    var reader = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file); //reads the data as a URL
    } else {
        preview.src = "";
    }
}