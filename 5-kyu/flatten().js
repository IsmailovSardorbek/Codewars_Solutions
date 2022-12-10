function flatten() {
  let arr = [...arguments];

  let result = [];
  const handleFlat = (array) => {
    for (let i = 0; i < array.length; i++) {
      let value = array[i];

      if (Array.isArray(value)) {
        handleFlat(value);
      } else {
        result.push(value);
      }
    }
  };

  handleFlat(arr);
  return result;
}
