import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            post:[],
            post1:[]
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            this.setState({post:response.data})
            return axios.get('https://jsonplaceholder.typicode.com/posts');
        }).then(response2 => {
            this.setState({post1:response2.data})
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    render() {
        const {post, post1} = this.state
        return (
            <div>
               <h1 className="text-center">Post List 1</h1>
               <table>
                   <thead>
                       <tr>
                            <td>user Id</td>
                            <td>title</td>
                            <td>body</td>
                       </tr>
                   </thead>
                   <tbody>
                      {post.map(data => 
                        <tr key={data.id}>
                            <td>{data.userId}</td>
                            <td>{data.title}</td>
                            <td>{data.body}</td>
                        </tr>
                        )}
                   </tbody>
               </table>

               
               <h1 className="text-center">Post List 2</h1>
               <table>
                   <thead>
                       <tr>
                            <td>user Id</td>
                            <td>title</td>
                            <td>body</td>
                       </tr>
                   </thead>
                   <tbody>
                      {post1.map(data => 
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.title}</td>
                            <td>{data.body}</td>
                        </tr>
                        )}
                   </tbody>
               </table>
            </div>
        )
    }
}

export default PostList