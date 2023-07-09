<script>
function arrayCalc(arr) {
  var sum = 0;
  $.each(arr, function(index, value) {
    sum += value;
  } );
  var average = sum / arr.length;
  return average;
}


var arr = [10, 20.7, 30, 5.9, 7];
var result = arrayCalc(arr);
document.write("배열의 평균은 " + result + "<br>");
</script>
