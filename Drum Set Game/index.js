// target.addEventListener("event-type", listener
// more than one button EventTarget, so document.querySelector("button") will return the first button, not all

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        alert("checksuccess");
    });
}
