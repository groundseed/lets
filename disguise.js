/* Disguises webpages on the fly.
Eta, written in 2022 (https://github.com/milcerye) */
window.document.title = prompt("Set document title")
if (confirm("Set a new favicon?")) {
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = prompt('What is the URL to the favicon?', 'http://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png')
}
alert('Done.')