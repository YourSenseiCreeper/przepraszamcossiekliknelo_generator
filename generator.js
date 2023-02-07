// const source = document.getElementById('source');
// const result = document.getElementById('result');

// const inputHandler = function(e) {
//   result.innerHTML = e.target.value;
// }

// source.addEventListener('input', inputHandler);
// source.addEventListener('propertychange', inputHandler); // for IE8

function myFunction() {
    var x = document.getElementById("source").value;
    document.getElementById("result").innerHTML = x;
}

function toImage() {
    domtoimage.toPng(document.getElementById('meme-area'), {'bgcolor':'white'})
        .then(function (dataUrl) {
            var link = document.createElement('a');
            link.download = 'receipt.png';
            link.href = dataUrl;
            link.click();
        });
}