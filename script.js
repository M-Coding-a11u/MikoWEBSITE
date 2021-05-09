var convertBtn = document.querySelector(".convert-button");
var URLinput = document.querySelector(".URL-input")

convertBtn.addEventListener("click", function() {
    console.log(`URL : ${URLinput.value}`);
    sendUrl(URLinput.value);
})

function sendUrl(URL) {
    window.location.href = `http://localhost:4000/download?URL=${URL}`;
}