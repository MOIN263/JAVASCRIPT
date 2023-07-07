
// find the longest word in the webtechs array

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]


  arr = []
  for (let i=0 ; i<webTechs.length ; i++) {
      arr.push(webTechs[i].length);
  }
  var max = Math.max(...arr)
  // console.log(max);
  
  for (let i =0 ; i<arr.length ; i++) {
      if (arr[i] === max && arr[i] === webTechs[i].length) {
          console.log(`${webTechs[i]} is the longest word in the webtechs array with ${webTechs[i].length} characters`);
      }
  }

