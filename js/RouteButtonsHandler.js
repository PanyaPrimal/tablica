
let myActivityBtn = document.querySelector('.my-activity__button');
myActivityBtn.addEventListener('click', function() {
    window.parent.location = 'index.html';
});

let addActivityBtn = document.querySelector('.add-activity__button');
addActivityBtn.addEventListener('click', function() {
    window.parent.location = 'add-activity.html';
});
