import axios from 'axios'
const endpoint = 'https://jsonplaceholder.typicode.com/posts'


class getAPIData{
  static getPosts(index){
    return new Promise((resolve, reject) => {
      axios.get(endpoint).then((res) => {
        let data = res.data;
        let endInd = index + 10;
        let postList = data.slice(index, endInd);
        // console.log(postList);
        resolve(postList);
      }).catch((err) => {
        console.log(err);
        reject(err);
      })
    })
  }
  
  static getPostsLen(){
    return new Promise((resolve, reject) => {
      axios.get(endpoint).then((res) => {
        let data = res.data;
        let requiredLen = data.length;
        resolve(requiredLen);
      }).catch((err) => {
        console.log(err);
        reject(err);
      })
    })
  }
}

export default getAPIData
