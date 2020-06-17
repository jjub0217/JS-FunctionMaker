// // const timeoutId = setTimeout(() => console.log('Hi!'), 1000);

// // console.log(timeoutId.id);

// const timeoutId = setTimeout(() => console.log(timeoutId), 1000);
// // console.log(timeoutId);



// let count = 1;

// const timeoutId = setInterval(() => {
//    console.log(count); // 1이 할당된 count를 1초마다 출력하라. 
    
//    if (count++ === 5) clearInterval(timeoutId);
// }, 1000);


// let count = 1;

// const timeoutId = setInterval(() => {
//   console.log(count); 
//   if (count++ === 5) clearInterval(timeoutId);
// }, 1000);

let x, y, z;
 
[x, y] = [1, 2];
console.log(x, y); // 1 2
console.log(typeof );

[x, y] = [1];
console.log(x, y); // 1 undefined
[x, y] = [1, 2, 3];
console.log(x, y); // 1 2
[x, , z] = [1, 2, 3];
console.log(x, z); // 1 3
 
// default value
[x, y, z = 3] = [1, 2];
console.log(x, y, z); // 1 2 3
[x, y = 10, z = 3] = [1, 2];
console.log(x, y, z); // 1 2 3
 
// spread operator
[x, ...y] = [1, 2, 3];
console.log(x, y); // 1 [ 2, 3 ]


출처: https://jeong-pro.tistory.com/118 [기본기를 쌓는 정아마추어 코딩블로그]