function areaRec() {
    let width;
    let height;
    let area;
    width=+document.getElementById('widthRec').value;
    height=+document.getElementById('heightRec').value;
    area=width * height;
    document.getElementById('result').innerHTML="Diện tích của hình chữ nhật là: " + area;
}