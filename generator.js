class Person {
    constructor(side, nameAndSurname, imgUrl, declinedNameAndSurname) {
        this.side = side;
        this.nameAndSurname = nameAndSurname;
        this.imgUrl = imgUrl;
        this.declinedNameAndSurname = !!declinedNameAndSurname ? nameAndSurname : declinedNameAndSurname;
    }
}

document.getElementById(`leftPersonNameInput`).value = "Bartek Anon";
document.getElementById(`rightPersonNameInput`).value = "Michał Anon";
changeName("left");
changeName("right");

// var people = [
//     new Person("left", null, "Anonka Kowalska"),
//     new Person("right", null, "Anon Pawłowski"),
// ].forEach(person => {
//     document.getElementById("people-list").innerHTML += `<p>${person.nameAndSurname}</p>`
// });

function changeName(side) {
    let value = document.getElementById(`${side}PersonNameInput`).value;
    document.getElementById(`${side}PersonCommentName`).innerText = value;

    if (side == "right") {
        document.getElementById(`inRelationWith`).innerHTML = `W związku z ${value}`;
    }
}

function loadImage(side) {
    let url = URL.createObjectURL(document.getElementById(`${side}PersonImageInput`).files[0]);
    document.getElementById(`${side}SidePhoto`).src = url;
    document.getElementById(`${side}SideCommentPhoto`).attributes.getNamedItem("xlink:href").value = url;
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