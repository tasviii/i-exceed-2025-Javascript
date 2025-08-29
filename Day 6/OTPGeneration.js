// getting all the timezones
let arr = Intl.supportedValuesOf('timeZone');
console.log(arr);

for (const timeZone of arr) {
    const now = new Date();

    
    let generatedTime = new Intl.DateTimeFormat("en-US", {
        timeZone: timeZone,
        timeStyle: "medium",
        dateStyle: "long"
    }).format(now);

    //adding 2 minutes
    const receivedDate = new Date(now.getTime() + 2 * 60 * 1000);

    //formatting time after adding 2 minutes
    let receivedTime = new Intl.DateTimeFormat("en-US", {
        timeZone: timeZone,
        timeStyle: "medium",
        dateStyle: "long"
    }).format(receivedDate);

    console.log(`${timeZone} → ${generatedTime}`);
    console.log(`OTP generated at: ${generatedTime}`);
    console.log(`OTP received at: ${receivedTime}`);
    console.log('------------------------------------');
}

