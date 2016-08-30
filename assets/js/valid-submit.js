var statSend = false;
function checkSubmit() {
    if (!statSend) {
        statSend = true;
        return true;
    } else {
        alert("Tu selfie ya se esta enviando! :)");
        return false;
    }
}