const students = {
    alice: 85,
    bob: 92,
    charlie: 78,
    dave: 92,
    eve: 88
  };

  const result = Object.keys(students); 

  const name = [];

  result.forEach((key) => { 
    if(students[key] == 92){
        name.push(`${key}`);
    }
})

console.log(name);

//console.log([`${key}`])
