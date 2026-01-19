const students = {
  0: { name: "Appollonia" },
  1: { name: "Amulya" },
  2: { name: "Leslie" },
  3: { name: "Aidan" },
  4: { name: "Emily" },
  5: { name: "Emigdio" },
  6: { name: "Yuhan" },
  7: { name: "Sofia" },
  8: { name: "Emma" },
  9: { name: "Laney" },
  10: { name: "Felicia" },
  11: { name: "Ruoxi" },
  12: { name: "Annie" },
  13: { name: "Binbing" },
  14: { name: "Divya" },
  15: { name: ":)" }


};

let container = document.querySelector(".right-side");


for (let key in students) {
  console.log(students[key].name)
  let clock = document.createElement("div");
  clock.innerHTML = `<div class="clock">
                <div class="hand hour"></div>
                <div class="hand minute"></div>
                <div class="name">${students[key].name}</div>
                </div>`
  container.append(clock);




}