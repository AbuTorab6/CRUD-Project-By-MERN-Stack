import React,{Fragment,useEffect,useState} from 'react';
import { Read,Delete } from '../APIServices/CRUDServices';
import Loader from './Loader';
import cogoToast from 'cogo-toast'

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import {Link,Navigate} from 'react-router-dom'


const ListProduct = () => 
{

    const[v1,v2]=useState({
        dataList:[],
        loding:true
    })

    useEffect(()=>{

        Read().then
        (
            (res)=>
            {
                v2({dataList:res,loding:false})
            }
        )
    },[])

    var deleteList = (p2)=>
    {
        Delete(p2).then
        (
            (res)=>
            {
                if(res==true)
                {
                    cogoToast.success("product deleted!")
                }
                else
                {
                    cogoToast.error("product can't delete")
                }
            }
        )

    }


    
    var arr = v1.dataList;
    var newArr = arr.map(
        function(p1)
        {
            return(
                <tr>
                    <td>{p1._id}</td>
                    <td>{p1.productName}</td>
                    <td>{p1.productCode}</td>
                    <td> <img src={p1.image} /> </td>
                    <td>{p1.unitPrice}</td>
                    <td>{p1.quantity}</td>
                    <td>{p1.totalPrice}</td>
                    <td>{p1.createdDate}</td>
                    <td><Button onClick={deleteList.bind(this,p1._id)} variant="danger">Delete</Button></td>
                    <td><Button  variant="success"> <Link className='update-btn' to={'/update/'+p1._id} >Update</Link> </Button></td>
                </tr>
            )
        }
    )


        if(v1.loding==true)
        {
            return <Loader/>
        }
        else
        {

            return (
                <Fragment>
                    <section className='listProduct-section'>
                        <div className='row'>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>_id</th>
                                    <th>Product Name</th>
                                    <th>Product Code</th>
                                    <th>Image</th>
                                    <th>Unit Price</th>
                                    <th>Quantity</th>
                                    <th>Total Price</th>
                                    <th>Created Date</th>
                                    <th>Delete</th>
                                    <th>Update</th>
                                </tr>
                            </thead>
                            <tbody>
                            {newArr}
                            </tbody>
                        </Table>
                        </div>
                    </section>
                </Fragment>
            );
        }


    
};

export default ListProduct;