
function addFormEventListeners(id) {
    let field = document.getElementById(id);
    field.onfocus = function () {
        if (this.value == this.defaultValue) {
            this.value = '';
        }
    };
    field.onblur = function () {
        if (this.value == '') {
            this.value = this.defaultValue;
        } 
    };
}
addFormEventListeners('form-section__textarea');

