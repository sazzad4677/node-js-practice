setTimeout(() => {
  console.log("Two seconds up ");
}, 2000);

const names = ["Sazzad", "Hossain", "Robin"];
const shortNames = names.filter((name) => {
  return name.length <= 6;
});

const geoCode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0,
    };
    callback(data);
  }, 2000);
};
geoCode("Dhaka", (data) => {
    console.log(data)
});

const add= (firstNumber, secondNumber, callback) => {
    setTimeout(() => {
        const sum = firstNumber + secondNumber;
        callback(sum);
    }, 2000);
}


add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})

