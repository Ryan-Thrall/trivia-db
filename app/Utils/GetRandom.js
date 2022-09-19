

export function getRandomFromArray(getNumber, array) {
  let indexes = []
  let values = []
  while (indexes.length < getNumber) {
    let randomNumber = Math.floor(Math.random() * array.length);

    if (indexes.indexOf(randomNumber) == -1) {
      indexes.push(randomNumber)
    }

  }

  indexes.forEach(i => values.push(array[i]))
  console.log("values", values)
  return values;
}

export function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}