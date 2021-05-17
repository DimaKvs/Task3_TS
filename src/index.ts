import {updateObjectInArray} from './services/updateObjectInArray';
import {fetchData} from './services/fetchData';
import Post from './interfaces/post';


const url = 'https://jsonplaceholder.typicode.com/posts';

const postContainer = document.querySelector('.posts-container') as HTMLDivElement;

const newElementOfArray : Post ={
    userId: 24,
    id: 34,
    title : 'Some text',
    body: 'Some text'
}

function displayPosts(postsArray: Array<Post>, container: HTMLDivElement){
        container.innerHTML = ''
        postsArray.forEach((obj)=>{
            const wrapper = document.createElement('div');
            wrapper.innerHTML = `<p>User:${obj.userId}</p>
                                 <p>Id:${obj.id}</p>
                                 <p>Title:${obj.title}</p>
                                 <p>Body:${obj.body}</p>
                                 <hr>`;
            container.appendChild(wrapper);
            
        });
}

fetchData<Post>(url).then((data)=>{
    displayPosts(data, postContainer);
    const newArr = updateObjectInArray<Post>(data, 1, newElementOfArray); //here I get new updated array
    setTimeout(()=>{                                                      //and display it on webpage, use setTimeout to see changes
        displayPosts(newArr, postContainer);
    }, 5000);
    
}). catch((e)=>{
    postContainer!.innerHTML = 'Something went wrong';
})





