import React, {useEffect, useState } from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import { collection, onSnapshot, deleteDoc, doc } from 'firebase/firestore'
import { db } from "../firebase"
import { useNavigate } from 'react-router-dom'

const ProductsList = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {

        const result = onSnapshot(collection(db, 'products'), (snapshot) => {
            let list = [];
            snapshot.docs.forEach((doc) => {
            list.push({id: doc.id, ...doc.data()})
            });
            setProduct(list);
            
        }, (error) => {
            console.log(error);
        }
        );
        return () => {
            result();
        }
    }, []);

    function producDelete(id){
        const docRef = doc(db, 'products', id)
        deleteDoc(docRef)
        alert("Are you sure deleted products")
        .then(() => {
            alert("Product Successfully deleted")
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    let navigate = useNavigate();
    const updateProduct = (id) => {
        navigate(`../updateProduct/${id}`)
    }

  return (
    <>
    <Container className='card shadow-lg mt-4'>
    <table className="table">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Offer Price</th>
                    <th scope="col">Update</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
            {product.map((item, index) => ( 
                <tr key={index}>
                    <td><Card.Img variant="top" src={item.img} style={{width: "50px"}}/></td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.offer_price}</td>
                    <td><Button className='btn btn-warning' onClick={() => updateProduct(item.id)}>Update</Button></td>
                    <td><Button className='btn btn-danger' onClick={() => producDelete(item.id)}>Delete</Button></td>
                </tr>
            ))}
                
            </tbody>
        </table>
    </Container>
     
    </>
  )
}

export default ProductsList