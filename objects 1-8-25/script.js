let user = {

  name: "Blart",
  age: 100,
  friend: {
    name: "Paul",
    age: 200,
  }
};

let newUser = {};
for(let p in user){
  newUser[p] = user[p];
}

newUser.name = "hacked";

console.log(newUser.name);
console.log(user.name);
