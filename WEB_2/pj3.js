function gugudan(n) {
    var m = parseInt(n);
    if (isNaN(m) || m < 1 || m > 9) {
      alert("잘못입력하셨습니다.");
      return;
    }
  
    var fontSize = 16;
    var sum = 0;
    for (var i = 1; i <= 9; i++) {
      var result = m + "x" + i + "=" + m * i + "<br>";
      var spanElement = document.createElement("span");
      spanElement.className = "gugudan";
      spanElement.innerHTML = result;
      spanElement.style.fontSize = fontSize + "px";
      document.body.appendChild(spanElement);
      fontSize += 2;
      sum += m * i;
    }
    var hrElement = document.createElement("hr");
    hrElement.classList.add("horizontal-line");
    document.body.appendChild(hrElement);
    var sumElement = document.createElement("span");
    sumElement.innerHTML = "각 구간별 총합: " + sum;
    sumElement.className = "sum-element";
    document.body.appendChild(sumElement);
}
    
  var n = prompt("구구단 몇 단을 원하세요?", "");
  gugudan(n);
  
  