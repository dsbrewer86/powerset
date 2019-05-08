 
function powerSet(array) {
  let combos = [];


  for (let i = 0; array.length > 0; i++) {

    let add = array.pop();


    let newCombo = [...combos];


    if (newCombo < 1) {
      newCombo.push(add);
    } else {

      for (let j = 0; j < newCombo.length; j++) {

        if (Array.isArray(newCombo[j])) {
          newCombo[j] = [...newCombo[j], add];

        } else {
          newCombo[j] = [newCombo[j], add];
        }

      }
      newCombo.push(add);
    }

    combos = [...combos, ...newCombo];

  }

  return ['empty set', ...combos];

}
let result = powerSet(['a','b','c']);
console.log(result);
console.log(result.length);
