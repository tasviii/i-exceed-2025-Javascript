const timezones = [
  "UTC",
  "Europe/London",
  "Europe/Paris",
  "Asia/Tokyo",
  "America/New_York",
  "America/Los_Angeles",
  "Australia/Sydney",
  "Asia/Kolkata",
  "Africa/Cairo",
  "America/Sao_Paulo",
  "Pacific/Auckland"
];

function displayTimes() {
  console.clear(); // clear the console on each update
  for (let i = 0; i < timezones.length; i++) {
    let tz = timezones[i];
    let time = new Date().toLocaleString("en-US", { timeZone: tz });
    console.log(`${tz}: ${time}`);
  }
}

// update every second
setInterval(displayTimes, 1000);

// initial call immediately
displayTimes();
