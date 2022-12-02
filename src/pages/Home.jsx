import React, {useEffect, useState} from 'react'
import { db } from "../firebase"
// import { useNavigate } from 'react-router-dom'
import { collection, onSnapshot } from 'firebase/firestore'
import { Card } from 'react-bootstrap'
// import img from '../asset/1.jpg'

const Home = () => {

  const [product, setProduct] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

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

  return (
    <div>
        <div className='container mt-3'>
            <div className='row'>
              {product.map((item, index) => (
                <div className='col-3' key={index}>
                  <Card>
                    <Card.Img variant="top" src={item.img}/>
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                    </Card.Body>
                    <Card.Footer>
                      <Card.Subtitle className='d-flex justify-content-between'>
                          <h5 className='text-start'>{item.price}</h5>
                          <h5 className='text-end'>{item.offer_price}</h5>
                      </Card.Subtitle>
                    </Card.Footer>
                  </Card>
                </div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default Home