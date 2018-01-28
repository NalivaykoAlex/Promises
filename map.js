const data = [
  {
    "id": 1,
    "name": "ivan",
    "email": "@@@"
  },
  {
    "id": 2,
    "name": "alex",
    "email": "@@@"
  },
  {
    "id": 3,
    "name": "jon",
    "email": "@@@"
  }
]

const array = data.map(item => {
  return {
    name: item.name
  }
})

console.log(array, 'Array')