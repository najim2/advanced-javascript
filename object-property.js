const student = [

    {id: 34, name:" omar sunny"},
    {id: 35, name: "Manna"},
    {id: 57, name:"shabnur"},
    {id: 72, name:"purnima"}
]

const names = student.map (s=>s.name);
const ids = student.map (s=>s.id);
const bigger = student.filter(s=>s.id>40);
const finder = student.find(s=>s.id>40);
console.log(names, ids, bigger, finder);