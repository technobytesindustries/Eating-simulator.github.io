// For saving and loading
// Has error, do not work it yet

function loadOrSave() {
    if (localStorage.getItem('data')) {
        data = JSON.parse(localStorage.getItem('data'));
    } else {
        save()
    }
}
function save() {
    localStorage.setItem("data", JSON.stringify(data));
}
/*
* if data in local storage is not null then load the data into data variable
* else save in local storage
*/
loadOrSave();
