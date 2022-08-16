import React,{Fragment,useEffect} from 'react';
import { useParams } from 'react-router-dom';

import { Update,Search } from '../APIServices/CRUDServices';
import cogoToast from 'cogo-toast';
import { Link } from 'react-router-dom';

const UpdateForm = () => 
{
    var idFromUrl = useParams().id;

    useEffect(()=>{
        Search(idFromUrl).then
        (
            (res)=>{
                 document.querySelector('.productName').value=res[0].productName;
                 document.querySelector('.productCode').value=res[0].productCode;
                 document.querySelector('.productImage').value=res[0].image;
                 document.querySelector('.unitPrice').value=res[0].unitPrice;
                 document.querySelector('.productQuantity').value=res[0].quantity;
                 document.querySelector('.totalPrice').value=res[0].totalPrice;
            }
        )
    },[])
    

    var updateData = ()=>
    {
        var productName = document.querySelector('.productName').value;
        var productCode = document.querySelector('.productCode').value;
        var productImage = document.querySelector('.productImage').value;
        var unitPrice = document.querySelector('.unitPrice').value;
        var productQuantity = document.querySelector('.productQuantity').value;
        var totalPrice = document.querySelector('.totalPrice').value;

        if(productName.length===0)
        {
            cogoToast.error("Product Name Cant't be empty!")
        }
        else if(productCode.length===0)
        {
            cogoToast.error("Product Code Cant't be empty!")
        }
        else if(productImage.length===0)
        {
            cogoToast.error("Product Image Cant't be empty!")
        }
        else if(unitPrice.length===0)
        {
            cogoToast.error("Product Price Cant't be empty!")
        }
        else if(productQuantity.length===0)
        {
            cogoToast.error("Product Quantity Cant't be empty!")
        }
        else if(totalPrice.length===0)
        {
            cogoToast.error("Total Price Cant't be empty!")
        }
        else{
                Update(idFromUrl,productName,productCode,productImage,unitPrice,productQuantity,totalPrice).then
                (
                    (res)=>{
                        if(res==true)
                        {
                                cogoToast.success("product Updated!")
                                document.querySelector('.productName').value="";
                                document.querySelector('.productCode').value="";
                                document.querySelector('.productImage').value="";
                                document.querySelector('.unitPrice').value="";
                                document.querySelector('.productQuantity').value="";
                                document.querySelector('.totalPrice').value="";
                        }
                        else
                        {
                            cogoToast.error("product can't updated")
                        }
                    }
                )
        }
    }

    return (
        <Fragment>
            <section className='updateForm-section'>
                <h2>Update Product</h2>
                <div className='row'>
                    <form>
                        <div className='updateForm-grid'>
                            <div className='col'>
                                <label>Product Name</label>
                                <input className='productName' type="text" />
                            </div>
                            <div className='col'>
                                <label>Product Code</label>
                                <input className='productCode' type="text" />
                            </div>
                            <div className='col'>
                                <label>Product Image</label>
                                <input className='productImage' type="text" />
                            </div>
                            <div className='col'>
                                <label>Unit Price</label>
                                <input className='unitPrice' type="text" />
                            </div>
                            <div className='col'>
                                <label>Product Quantity</label>
                                <input className='productQuantity' type="text" />
                            </div>
                            <div className='col'>
                                <label>Total Price</label>
                                <input className='totalPrice' type="text" />
                            </div>
                        </div>
                    </form>


                    <div className='updateForm-btn'>
                        <button onClick={updateData} >Update</button>
                    </div>
                    
                </div>
            </section>
        </Fragment>
    );
};

export default UpdateForm;