function powerSet(array) {
  let combos = [];


  for (let i = 0; i < array.length; i++) {

    let add = array.pop();


      let newCombo = [...combos];



    for (let j = 0; j < newCombo.length; j++) {
      
      if (Array.isArray(newCombo[j])) {
        newCombo[j] = [...newCombo[j], add];

      } else {
        newCombo[j] = [newCombo[j], add];
      }
      console.log(newCombo);

    }

    combos = [...combos, ...newCombo];
  }


  return combos;

}

console.log(powerSet(['a','b']));
