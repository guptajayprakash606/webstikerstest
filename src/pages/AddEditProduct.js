import React, {useState, useEffect} from 'react';
import { storage, db } from '../firebase';
import { useParams, useNavigate } from 'react-router-dom';
import {Spinner, Form, Button } from 'react-bootstrap'
import { uploadBytesResumable, ref, getDownloadURL } from 'firebase/storage';
import { async } from '@firebase/util';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const initialState = {
    name: '',
    price: '',
    offer_price: '',
}

const AddEditProduct = () => {
  const [data, setData] = useState(initialState);
  const {name, price, offer_price} = data;
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(null);

  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const validate = () => {
    if(!name){
      errors.name = "Name is Required"
    }
    if(!price){
      errors.price = "Price is Required"
    }
    if(!offer_price){
      errors.offer_price = "Offer Price is Required"
    }
    return errors;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = validate();
    if(Object.keys(errors).length ) return setErrors(errors);
      setIsSubmit(true);
        await addDoc(collection(db, 'products'), {
          ...data, 
          timestamp: serverTimestamp()
        })
        navigate("/");
  }

  useEffect(() => {
      const uploadFile = () => {
        const name = new Date().getTime() + file.name;
        const storageRef = ref(storage, file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on("state_changed", (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes);
          setProgress(progress);
          switch(snapshot.state){
            case "paused":
                console.log("Upload is Pause");
                break;
            case "running":
                console.log("Update is Running");
                break;
            default:
                break;
          }
        }, 
        (error) =>{
          console.log(error)
        }, 
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setData((prev) => ({...prev, img: downloadURL }))
            });
          }
        )
      };
      file && uploadFile();
  }, [file])


  return (
    <div>
        <div className='row mt-2'>
          <div className='col-md-6 offset-md-3 card p-3'>
              {isSubmit ? <Spinner animation="border" size="xl" className='d-flex justify-content-center'/> :(
                <>
                  <div className='card-header mb-3'>
                    <h2>Add Products</h2>
                  </div>
                  <Form onSubmit={handleSubmit}>
                      <Form.Control 
                        className='mb-3'
                        errors = {errors.name ? {content: errors.name} : null} 
                        placeholder="Enter Product Name" 
                        onChange={handleChange}
                        value ={name}
                        name="name"
                        autoFocus
                      />
                      <Form.Control 
                        className='mb-3'
                        errors = {errors.price ? {content: errors.price} : null} 
                        placeholder="Enter Product Price" 
                        onChange={handleChange}
                        value = {price}
                        name= "price"
                        autoFocus
                      />
            
                      <Form.Control 
                        className='mb-3'
                        errors = {errors.offer_price ? {content: errors.offer_price} : null} 
                        placeholder="Enter Product Offer Price" 
                        onChange={handleChange}
                        value = {offer_price}
                        name="offer_price"
                        autoFocus
                      />
                  
                      <Form.Control
                        className='mb-3' 
                        type="file" 
                        name="file"
                        onChange={(e) => setFile(e.target.files[0])}
                      />
                    <Button variant="primary" type="submit" disabled={progress !== null && progress > 100 }>Submit</Button>
                </Form>
                </>
              )}
          </div>
        </div>
    </div>
  )
}

export default AddEditProduct