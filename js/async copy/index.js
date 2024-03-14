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
const loadPanel = document.querySelector('.loading');
const contentPanel = document.querySelector('.content');
const button = document.querySelector('button');
var contentHeight = document.querySelector('.content').clientHeight;
var data;

function seePosts() {
  contentPanel.style.display = 'block'
  loadPanel.style.display = 'none'
}

function createdPost (){

}

const getPosts = new Promise ((resolve, reject) => {
  xml.open("GET", 'http://localhost:1337/api/posts');

  xml.send();
  contentPanel.style.display = 'none'
  loadPanel.style.display = 'block';
  loadPanel.style.height = contentHeight;
  xml.addEventListener("load", () => {
    if(xml.status == 200){
      resolve(xml.response);
    }
    else{
      reject(xml.status)
    }
  });

});


getPosts.then((response) => {
  setTimeout(seePosts, 1000);
  var response = JSON.parse(response);
  const data = response.data;
  data.forEach((e) => {
    createdPost(e.attributes)
  });
  console.log(response.data);
}).catch((status) => {
  console.log(status);
});

function createdPost(data) {
  var title = data.title || "Если не будет";
  var text = data.text || "Буквы";
  var divPost = document.createElement('div');
  var postTitle = document.createElement('h3');
  var textPost = document.createElement('p');
  postTitle.innerText = title;
  textPost.innerText = text;

  divPost.appendChild(postTitle)
  divPost.appendChild(textPost)
  contentPanel.appendChild(divPost)
  console.log(title, text)
}

button.addEventListener('click', createdPost);