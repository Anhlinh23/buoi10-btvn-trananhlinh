//? HW1
//? Cho đoạn code sau, sau đó biểu diễn các cách để truy cập được các thuộc tính bên trong object đó
 
// let person = {
//    name:       'Bob',
//    occupation: 'web developer',
//    hobbies:    'painting',
//  };

// console.log(person);
// console.log(["name"]); 
// console.log(person.hobbies);
// console.log(person["name"]);



//? HW2
//? Cho object obj, hãy tạo một array chứa key của tất cả các property của obj và đều viết hoa
//? có sử dụng Object.key()
//? có sử dụng các method của array
//? Có sử dụng toUpperCase()

// let obj = {
//   b: 2,
//   a: 1,
//   c: 3,
// };
// let arr = Object.keys(obj);
// let ARR = arr.join('').toUpperCase();
// let arr1 = Array.from(ARR);
// console.log(arr1);

// TODO
// ?? OUTPUT is [B, A, C]
// HW3
// Tạo một object mới có tên **family** và sử dụng Object **myFamily** như là prototype của object đó

let myFamily = {
  quantity: 4,
  member: ["Dad", "Mom", "Me", "Daughter"],
  location: "Vietnam",
};

// let family = {
//     family1 : myFamily,
// };
// console.log(family);

let family = {
    myFamily1: '',
};
family.myFamily1 = myFamily;
console.log(family);


// HW4
// Thay đổi giá trị 6 bằng 606 bằng 2 cách
// let obj = {
//   foo: { a: "hello", b: "world" },
//   bar: ["example", "mem", null, { xyz: 6 }, 88],
//   qux: [4, 8, 12]
// };

//?c1
// obj.bar.xyz = 606;
// console.log(obj);

//?c2
// obj["bar"]["xyz"] = 606;
// console.log(obj);