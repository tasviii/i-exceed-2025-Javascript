// list of common IANA timezones (partial for brevity)
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

// function to get current time in a timezone
function getTimeInZone(tz) {
  return new Date().toLocaleString("en-US", { timeZone: tz });
}

// loop through timezones and print time
for (let i = 0; i < timezones.length; i++) {
  const tz = timezones[i];
  const time = getTimeInZone(tz);
  console.log(tz + ": " + time);
}
