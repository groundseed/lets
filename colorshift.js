function r(key) {
    if (key == "KeyW") {
        x = prompt("Enter degree to shift hue")
        document.body.style.filter = "hue-rotate(" + x + "deg) ";
    };
};
document.addEventListener('keydown', (event) => {
    var code = event.code;
    r(code);
  }, false);