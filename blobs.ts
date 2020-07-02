let myBlobParts = ["<html><h2>Hello world</h2></html>"];
let myBlob = new Blob(myBlobParts, {
    type: "text/html",
    ending: "transparent",
});

console.log(myBlob.size + " bytes size");
console.log(myBlob.type + " is the type");

myBlob.text().then(res => {
    console.log('text', res);
})
