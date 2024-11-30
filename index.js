
document.querySelector(".go").addEventListener('click', () => {
    var firstname = document.querySelector(".firstname");
    var surname = document.querySelector(".surname");
    var image = document.querySelector(".image");
    var pesel = document.querySelector(".pesel");
    var birthdate = document.querySelector(".birthdate");

    var params = new URLSearchParams();
    params.set("firstname", firstname.value);
    params.set("surname", surname.value);
    params.set("image", image.value);
    params.set("pesel", pesel.value);
    params.set("birthdate", birthdate.value);
    location.href = "/yObywatel/id?" + params;
});