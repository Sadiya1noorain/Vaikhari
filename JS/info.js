document.getElementById('range-picker').addEventListener('click', function (e) {
    var sizeList = document.getElementById('range-picker').children;
    for (var i = 0; i <= sizeList.length - 1; i++) {
        console.log(sizeList[i].classList);
        if (sizeList[i].classList.contains('active')) {
            sizeList[i].classList.remove('active');
        }
    }
    e.target.classList.add('active');
})

$("#color-1").click(function () {
    $(".highlight-window").css('background-image', 'url("https://images.unsplash.com/photo-1622445275463-afa2ab738c34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80")');
});
$("#color-2").click(function () {
    $(".highlight-window").css('background-image', 'url(./Pics/black.png)');
});
$("#color-3").click(function () {
    $(".highlight-window").css('background-image', 'url(./Pics/red.png)');
});
$("#color-4").click(function () {
    $(".highlight-window").css('background-image', 'url(./Pics/blue.png)');
});
$("#color-5").click(function () {
    $(".highlight-window").css('background-image', 'url(./Pics/yellow.png)');
});
$("#color-6").click(function () {
    $(".highlight-window").css('background-image', 'url(./Pics/maroon.png)');
});