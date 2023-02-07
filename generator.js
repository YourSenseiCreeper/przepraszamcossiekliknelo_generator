// const source = document.getElementById('source');
// const result = document.getElementById('result');

// const inputHandler = function(e) {
//   result.innerHTML = e.target.value;
// }

// source.addEventListener('input', inputHandler);
// source.addEventListener('propertychange', inputHandler); // for IE8
class Person {
    constructor(side, nameAndSurname, imgUrl, declinedNameAndSurname) {
        this.side = side;
        this.nameAndSurname = nameAndSurname;
        this.imgUrl = imgUrl;
        this.declinedNameAndSurname = !!declinedNameAndSurname ? nameAndSurname : declinedNameAndSurname;
    }
}

var people = [
    new Person("left", null, "Anonka Kowalska"),
    new Person("right", null, "Anon Pawłowski"),
].forEach(person => {
    document.getElementById("people-list").innerHTML += `<p>${person.nameAndSurname}</p>`
});

function myFunction() {
    var x = document.getElementById("source").value;
    document.getElementById("result").innerHTML = x;
}

function loadImage(side) {
//     let person = this.people.filter(p => p.side == side)[0];
//     person.imgUrl = URL.createObjectURL(document.getElementById(`${side}PersonImageInput`).files[0]);
    let url = URL.createObjectURL(document.getElementById(`${side}PersonImageInput`).files[0]);
    document.getElementById(`${side}SidePhoto`).src = url;
    document.getElementById(`${side}SideCommentPhoto`).src = url;

    // var leftSidePhotoElement = document.getElementById("leftPersonImageInput").files[0];
    // var reader = new FileReader();
    // reader.onload = function(e) {
    //     const blobImage = new Blob([reader.result]);
    //     const url = URL.createObjectURL(blob, {type: "image/png"});
    //     document.getElementById("leftSidePhoto").src = url;
    // }
    // reader.readAsArrayBuffer(image);
    // reader.readAsDataURL(image);
}

function toImage() {
    htmltoimage.toPng(document.getElementById('generator'), {'bgcolor':'white'})
        .then(function (dataUrl) {
            var link = document.createElement('a');
            link.download = 'receipt.png';
            link.href = dataUrl;
            link.click();
        });
}