function checkFilled() {
    var inputElement = document.getElementById("myInput");
    var inputValue = inputElement.value;
    var count = inputValue.length;
    if (count < 6 || count > 8) {
        alert("6문자와 8문자 사이로 입력해주세요");
    }
}
