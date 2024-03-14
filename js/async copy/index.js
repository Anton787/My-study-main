// const xml = new XMLHttpRequest();

// const getRandom = new Promise((resolve, reject) => {
//   xml.open("GET", 'http://localhost:1337/api/tests');

//   xml.send();
//   resolve onload
//   xml.addEventListener('load', () => {
//     if (xml.status === 200) {
//       resolve(xml.response);
//     } else {
//       reject(xml.status);
//     }
//   });
// });

// getRandom.then((response) => {
//   response = JSON.parse(response)
//   console.log(response.data);
// }).catch((status) => {
//   console.log(status);
// });

// let a = {"data":[{"id":1,"attributes":{"color":"sadyuas","createdAt":"2024-03-07T17:48:47.600Z","updatedAt":"2024-03-07T17:49:20.638Z","publishedAt":"2024-03-07T17:49:20.637Z"}}],"meta":{"pagination":{"page":1,"pageSize":25,"pageCount":1,"total":1}}} 




// создать функцию которая при нажитии на button делает пост 

const xml = new XMLHttpRequest();

const getPosts = new Promise {
  xml.open("GET", '')
}