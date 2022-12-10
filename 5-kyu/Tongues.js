const tongues = (code) => {
  let arr = [...code];
  let vowels = [..."aiyeou"];

  let consonants = [..."bkxznhdcwgpvjqtsrlmf"];

  arr.forEach((current, index, array) => {
    if (vowels.includes(current.toLowerCase())) {
      array[index] =
        vowels[
          vowels.indexOf(current.toLowerCase()) - 3 < 0
            ? vowels.length -
              (3 - Math.abs(0 - vowels.indexOf(current.toLowerCase())))
            : vowels.indexOf(current.toLowerCase()) - 3
        ];
    } else if (consonants.includes(current.toLowerCase())) {
      array[index] =
        consonants[
          consonants.indexOf(current.toLowerCase()) - 10 < 0
            ? consonants.length -
              (10 - Math.abs(0 - consonants.indexOf(current.toLowerCase())))
            : consonants.indexOf(current.toLowerCase()) - 10
        ];
    }
    if (code[index] === code[index].toUpperCase()) {
      arr[index] = array[index].toUpperCase();
    }
  });

  return arr.join("");
};
