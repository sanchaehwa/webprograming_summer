function checkFilled() {
    var inputElement = document.getElementById("myInput");
    var phoneNumber = inputElement.value;

    for (var i = 0; i < phoneNumber.length; i++) {
        if (isNaN(phoneNumber[i])) {
            alert("숫자만 입력해야 합니다.");
            return;
        }
    }
}