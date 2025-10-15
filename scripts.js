const todoList = [];

function createTodoItem(input) {
  if (typeof input !== "string") {
    console.error("Inntak verður að vera strengur.");
    return todoList.length;
  }

  const text = input.trim();

  if (text.length === 0) {
    console.error("Texti verkefnis má ekki vera tómur.");
    return todoList.length;
  }

  const item = {
    text,
    finished: false,
  };

  todoList.push(item);
  console.log(`Bætti við verkefni: "${text}".`);

  return todoList.length;
}

function list() {
  if (todoList.length === 0) {
    console.log("Engin verkefni í listanum.");
    return;
  }

  console.log("Verkefnalisti:");
  for (let i = 0; i < todoList.length; i++) {
    const item = todoList[i];
    const status = item.finished ? "Klárað" : "Óklárað";
    console.log(`${i}. ${item.text} [${status}]`);
  }
}

function toggleFinished(index) {
  if (typeof index !== "number" || index < 0 || index >= todoList.length) {
    console.error("Ógilt númer verkefnis.");
    return false;
  }

  const item = todoList[index];
  item.finished = !item.finished;

  const status = item.finished ? "klárað" : "óklárað";
  console.log(`Verkefni "${item.text}" er nú ${status}.`);

  return true;
}

function stats() {
  const finished = todoList.filter((t) => t.finished).length;
  const unfinished = todoList.length - finished;

  console.log("Tölfræði:");
  console.log(`Kláruð verkefni: ${finished}`);
  console.log(`Ókláruð verkefni: ${unfinished}`);
}

function clear() {
  if (todoList.length === 0) {
    console.log("Engin verkefni í listanum.");
    return;
  }

  const confirmed = confirm("Viltu eyða öllum kláruðum verkefnum?");
  if (!confirmed) {
    console.log("Hætt við hreinsun.");
    return;
  }

  let count = 0;
  for (let i = todoList.length - 1; i >= 0; i--) {
    if (todoList[i].finished) {
      todoList.splice(i, 1);
      count++;
    }
  }

  if (count === 0) {
    console.log("Engin kláruð verkefni til að eyða.");
  } else {
    console.log(`Eyddi ${count} kláruðum verkefnum.`);
  }
}

function start() {
  console.log("Byrja að bæta við verkefnum. Ýttu á 'Cancel' til að hætta.");

  while (true) {
    const input = prompt("Sláðu inn texta fyrir nýtt verkefni:");

    if (input === null) {
      console.log("Hætt við að bæta við verkefnum.");
      break;
    }

    const text = input.trim();
    if (text.length === 0) {
      alert("Verkefni má ekki vera tómt!");
      continue;
    }

    createTodoItem(text);
  }

  list();
  stats();
}
