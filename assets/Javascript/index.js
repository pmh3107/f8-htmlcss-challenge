// Khai báo biến index để lưu trữ chỉ số của comment hiện tại
var index = 1;
// Lấy tất cả các phần tử có class là run-comment
var comments = document.getElementsByClassName("run-comment");
function runCommentNext() {
  // Kiểm tra xem có còn comment nào để chạy hay không
  for (i = 0; i < comments.length; i++) {
    index < comments.length;
    var total = index * -100;
    comments[i].style.transform = "translateX(" + total + "%)";
  }
  index++;
  console.log(index);
}

function runCommentBack() {
  // Giảm biến index xuống 1
  index--;
  for (i = 0; i < comments.length; i++) {
    index < comments.length;
    var total = index * -100;
    comments[i].style.transform = "translateX(" + total + "%)";
  }
  console.log(index);
}
