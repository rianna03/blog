import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import {ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Create = () => {

    const history=useHistory();

    const [inputValue, setInputValue] = useState({
    title:'',
    author:'',
    body:''
});

  const handleChange = (e) => {
    const {name,value} = e.target;
    setInputValue((prev)=> {
        return {...prev, [name]: value}
    });
 }

 const handleSubmit = (e) => {
    //to prevent default submission behavior
    e.preventDefault();  
    
    //check for input validity
    if (!inputValue.title || !inputValue.author || !inputValue.body) {
        toast.error('Please fill the empty fields', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 4000,
        })
        return;
    }
    //add the logic for the functionality
    axios.post('http://localhost:4000/blogs', inputValue)
    .then(res => {
        //show toast popup message
        toast.success("Blog Created successfully", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 4000,
        });
        setInputValue({ title: '', author: '', body: '' })
        history.push('/');
    })
    //catch error
    .catch(err => {
        toast.error('An Error occurred while adding the blog',{
            position: toast.POSITION.TOP_CENTER,
            autoClose: 4000,
        })
    })

 }

    return(
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Title:</Form.Label>
                    <Form.Control name="title" type="text" value={inputValue.title} onChange={handleChange} placeholder="Enter title"></Form.Control>
                    <p>{inputValue.title}</p>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Author:</Form.Label>
                    <Form.Control name="author" type="text" value={inputValue.author} onChange={handleChange} placeholder="Enter author"></Form.Control>
                    <p>{inputValue.author}</p>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Body:</Form.Label>
                    <Form.Control as="textarea" name="body" type="text" value={inputValue.body} onChange={handleChange} rows={3}></Form.Control>
                    <p>{inputValue.body}</p>
                </Form.Group>

                <Button variant='primary' type="submit">Save Blog</Button>
                <ToastContainer/>
                
                
                

            </Form>
        </div>
    );
}

export default Create;