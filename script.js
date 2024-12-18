const button = document.querySelector("button");
button.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Введите новое имя");
  const paragraph = document.querySelector("p.red");
  paragraph.textContent = `Меня зовут ${name}. Я преподаю в компьютерной академии TOP.`;

  // добавлено для выполнения домашнего задания
  const width = prompt("Введите новую ширину картинки");
  const img = document.querySelector("img");
  img.width = width;
}