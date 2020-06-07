
const cb1 = document.getElementById('like1');
const span1 = document.getElementById('span-like1');
if (cb1 != null) {
  cb1.onclick = function () {
    let count = span1.innerHTML;

    if (cb1.checked) {
      count++;
      span1.innerHTML = count;
    } else {
      count--;
      span1.innerHTML = count;
    }
  }
}


const cb2 = document.getElementById('like2');
const span2 = document.getElementById('span-like2');

if (cb2 != null) {
  cb2.onclick = function () {
    let count = span2.innerHTML;

    if (cb2.checked) {
      count++;
      span2.innerHTML = count;
    } else {
      count--;
      span2.innerHTML = count;
    }
  }
}
