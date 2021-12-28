// Import stylesheets
import './style.css';

// Write Javascript code!
const array = [2,4,1,5,7,3]
const dim = array.length
const ordenar = () => {
  let aux = 0
  for(let i = 0 ; i < dim ; i++){
    for(let j = 0 ; j < dim ; j++){
      if(array[j] > array[j+1]){
        aux = array[j]
        array[j] = array[j+1]
        array[j+1] = aux
      }
    }
  }
  console.log(array)
}

ordenar()