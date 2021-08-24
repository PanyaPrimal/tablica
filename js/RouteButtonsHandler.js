let myActivityBtn = document.querySelector('.myActivity__btn');
myActivityBtn.addEventListener('click', function() {
    window.parent.location = 'index.html';
});

let addActivityBtn = document.querySelector('.addActivity__btn');
addActivityBtn.addEventListener('click', function() {
    window.parent.location = 'add-activity.html';
});