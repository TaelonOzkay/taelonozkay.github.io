// get the name from the name input document.getElementById myEl.value
// get the form itself formEl
// get the message element messageEl
// let name = "testname"

function submitClicked() {
    // formEl.hidden = true;
    document.getElementById("message").hidden = false
    document.getElementById("message").textContent = "Thank You " + name
}
