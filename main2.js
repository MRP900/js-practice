

// Single element
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('.container'));
// console.log(document.getElementsByClassName('.item'));
// Multiple element
// const items = document.querySelectorAll('.item');

// items.forEach((item) => console.log(item));

const ul = document.querySelector('.items');

// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'hello';
ul.children[1].innerText = 'brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
btn.style.background = 'red';
