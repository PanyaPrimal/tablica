
function textareaEvents(id) {
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
textareaEvents('form-section__textarea');

