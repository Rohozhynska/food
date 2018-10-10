// function openRecept(evt, cityName) {
//     var i, recepts, tablinks;
//     recepts = document.getElementsByClassName("recepts");
//     for (i = 0; i < recepts.length; i++) {
//         recepts[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
//     document.getElementById(cityName).style.display = "block";
//     evt.currentTarget.className += " active";
// }