
function addFormEventListeners(id) {
    let field = document.getElementById(id);
    field.onfocus = function () {
        if (this.value == this.placeholder) {
            this.value = '';
        }
    };
    field.onblur = function () {
        if (this.value == '') {
            this.value = this.placeholder;
        }
    };
}
addFormEventListeners('form-section__textarea');
