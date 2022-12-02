import React, {useEffect, useState} from 'react';  
import {collection, deleteDoc, getDocs, doc} from "firebase/firestore";  
import { db,  } from "../firebase"
import { useNavigate, Link } from 'react-router-dom'
  
const ProductInfo = () => {  

    const [products, setProducts] = useState([]);
    
    function getProduct(){
        const productgCollectionRef = collection(db, 'products')
        getDocs(productgCollectionRef).then(response => {
            const pro = response.docs.map(doc => ({
                data: doc.data(), 
                id:doc.id,
            }))
            setProducts(pro)
        })
        .catch(error => console.log(error.message))
    }

    useEffect(() => {
        console.log(products);
    }, [products])
    
    useEffect(() => {
        getProduct(); 
    }, [])

    let navigate = useNavigate();

    const updateProduct = (id) => {
        navigate(`../updateProduct/${id}`)
    }
    
    function producDelete(id){
        const docRef = doc(db, 'products', id)
        deleteDoc(docRef)
        .then(() => {
            console.log("Product Deleted")
        })
        .catch(error => {
            console.log(error.message);
        })
    }
   

    return (  
        <div className="card">  
            <div className="card-body">  
                <div className="card">  
                    <div className="card-header main-search dash-search">  
                        <h3>Product Information Details</h3>  
                    </div>  
                </div>  
                <div className="row mt-2">  
                    <div className="col-12 col-md-12">  
                        <div className="card">  
                            <div className="card-body position-relative">  
                                <div className="table-responsive cnstr-record product-tbl">  
                                    <table className="table table-bordered heading-hvr">  
                                        <thead> 
                                            <tr>  
                                                <th className="active">Name</th>  
                                                <th>Image</th>  
                                                <th>Price</th>  
                                                <th>Offer Price</th>  
                                                <th width="60"> </th>  
                                                <th width="60"> </th>  
                                            </tr>  
                                        </thead>  
                                        <tbody> 
                                            {products.map((item, index) =>
                                               <tr key={index}>
                                                    <td>{item.data.Name}</td>
                                                    <td>{item.data.image}</td>
                                                    <td>{item.data.Price}</td>
                                                    <td>{item.data.Offer_Price}</td>
                                                    <td><button className='btn btn-warning' onClick={() => updateProduct(item.id)}>Update</button></td>
                                                    <td><button className='btn btn-danger' onClick={() => producDelete(item.id)}>Delete</button></td>
                                               </tr>
                                            )}
                                        </tbody>  
                                    </table>  
                                </div>  
                            </div>  
                        </div>  
                    </div>  
                </div>  
                <div className="card">  
                    <div className="card-footer main-search dash-search">  
                        <Link to="../addProduct"><button className='btn btn-primary'>Add Product</button></Link>  
                    </div>  
                </div>  
            </div>  
        </div>  
    );  
}  
  
export default ProductInfo;  