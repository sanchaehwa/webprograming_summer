var rows = prompt("행 수를 입력하세요");
var cols = prompt("열 수를 입력하세요");
var emoji = prompt("출력할 이모지를 입력하세요");

for (var i = 0; i < rows; i++) {
  for (var j = 0; j < cols; j++) {
    if (i === 0 || i === rows - 1 || j === 0 || j === cols - 1) {
      document.write(emoji);
    } else {
      document.write("&nbsp;");
    }
  }
  document.write("<br>");
}
