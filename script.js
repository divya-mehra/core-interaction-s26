const rightSide = document.querySelector(".right-side");
const leftSide = document.querySelector(".left-side");
const root = document.documentElement;

const students = {
  0: { name: "Appollonia", color: "#719656" },
  1: { name: "Amulya", color: "#163813" },
  2: { name: "Leslie", color: "#543A2C" },
  3: { name: "Aidan", color: "#19d1a9" },
  4: { name: "Emily", color: "#799c58" },
  5: { name: "Emigdio", color: "#89CFF0", textColor: "#000"  },
  6: { name: "Cori", color: "#00ffe4", textColor: "#000" },
  7: { name: "Sofia", color: "#550000" },
  8: { name: "Emma", color: "#5E011C" },
  9: { name: "Laney", color: "#d60458" },
  10: { name: "Ruoxi", color: "#4c6a11" }, // update via email
  11: { name: "Annie", color: "#ADD8E6", textColor: "#000"  },
  12: { name: "Candice", color: "#87CEEB" },
  13: { name: "Neev", color: "#F2F0EF", textColor: "#000", secondaryColor: "#e2d9be"  },
  14: { name: "Divya", color: "#4c6a11" },
  15: { name: ":)", color: "#4c6a11" }
};

for (let key in students) {
  let clock = document.createElement("div");
  clock.innerHTML = `<div class="clock">
                <div class="hand hour"></div>
                <div class="hand minute"></div>
                <div class="name">${students[key].name}</div>
                </div>`
  // clock.style.color
  clock.addEventListener('mouseenter', () => {
    console.log(students[key].color)
    root.style.setProperty('--primary-color', students[key].color)

    if (students[key].textColor) {
      root.style.setProperty('--text-color', students[key].textColor)
    } else {
      root.style.setProperty('--text-color', "#efe8d8")

    }

    if (students[key].secondaryColor) {
      root.style.setProperty('--secondary-color', students[key].secondaryColor)
    } else {
      root.style.setProperty('--secondary-color', "#efe8d8")

    }
  })

  rightSide.append(clock);

}

leftSide.addEventListener('mouseenter', () => {
  root.style.setProperty('--primary-color', "#4c6a11")
})
