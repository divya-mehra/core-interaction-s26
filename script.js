const rightSide = document.querySelector(".right-side");
const leftSide = document.querySelector(".left-side");
const root = document.documentElement;


// LIST OF STUDENTS 

const students = {
  0: { name: "Appollonia", color: "#719656", timeZone: "America/New_York" },
  1: { name: "Amulya", color: "#163813", timeZone: "Asia/Singapore" },
  2: { name: "Leslie", color: "#543A2C", timeZone: "America/Guayaquil" },
  3: { name: "Aidan", color: "#19d1a9", timeZone: "America/New_York" },
  4: { name: "Emily", color: "#799c58", timeZone: "America/New_York" },
  5: { name: "Emigdio", color: "#89CFF0", textColor: "#000", timeZone: "America/New_York"  },
  6: { name: "Cori", color: "#00ffe4", textColor: "#000", timeZone: "Asia/Shanghai" },
  7: { name: "Sofia", color: "#550000", timeZone: "Europe/Zurich" },
  8: { name: "Emma", color: "#5E011C", timeZone: "America/New_York"},
  9: { name: "Laney", color: "#d60458", timeZone: "America/Chicago" },
  10: { name: "Ruoxi", color: "#4c6a11" }, // update via email
  11: { name: "Annie", color: "#ADD8E6", textColor: "#000", timeZone: "Asia/Shanghai"  },
  12: { name: "Candice", color: "#87CEEB", timeZone: "Asia/Shanghai" },
  13: { name: "Neev", color: "#F2F0EF", textColor: "#000", secondaryColor: "#e2d9be", timeZone: "Asia/Kolkata"  },
  14: { name: "Divya", color: "#4c6a11", timeZone: "Asia/Kolkata" },
  15: { name: ":)", color: "#4c6a11" }
};

// GET THE TIME

let addTime = (clock, student) => {
    const parts = new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      hour12: true,
      minute: '2-digit',
      timeZone: student.timeZone
    }).formatToParts(new Date());

    const hour = parts.find(p => p.type === 'hour').value;
    const min = parts.find(p => p.type === 'minute').value;

    // console.log(hour); 

    const hourHand = clock.querySelector('.hand.hour');
    const minHand = clock.querySelector('.hand.minute');

    //for hours

    let hourHandPos = ((360/12)*hour) + ((min/60)*30)
    hourHand.style.rotate= `${hourHandPos}deg`

    // for minutes

    let minHandPos = (360/60)*min;
    minHand.style.rotate= `${minHandPos}deg`


}

// MAKE THE CLOCK

for (let key in students) {
  let clock = document.createElement("div");

    // CLOCK CONTENT


  clock.innerHTML = `<div class="clock">
                <div class="center"></div>
                <div class="hand hour"></div>
                <div class="hand minute"></div>
                <div class="name">${students[key].name}</div>
                </div>`

  // CLOCK COLOR
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

  addTime(clock, students[key])

  rightSide.append(clock);

}

leftSide.addEventListener('mouseenter', () => {
  root.style.setProperty('--primary-color', "#4c6a11")
})
