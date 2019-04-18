let array = [['b',0],['b',1],['b',2],['b',3]];
let add = 'a';

let newCombo = [...array];

for (let i = 0; i < array.length; i++) {

  if (Array.isArray(newCombo[i])) {
    newCombo[i] = [...newCombo[i], add];
  } else {
    newCombo[i] = [newCombo[i], add];
  }


}


console.log(newCombo);
