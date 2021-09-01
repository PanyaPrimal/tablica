
function addFormEventListeners(id) {
    let field = document.getElementById(id);
    field.onfocus = function () {
        if (this.value == placeholder) {
            this.value = '';
        }
    };
    field.onblur = function () {
        if (this.value == '') {
            this.value = placeholder;
        } 
    };
}
addFormEventListeners('form-section__textarea');

