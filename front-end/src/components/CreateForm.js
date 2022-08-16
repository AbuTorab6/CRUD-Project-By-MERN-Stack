import React,{Fragment,useState,useRef} from 'react';
import cogoToast from 'cogo-toast'

import {Create} from '../APIServices/CRUDServices'

import '../asset/css/custom.css'
import Loader from './Loader';



const CreateForm = () => 
{

    

    var saveData = ()=>
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

            document.querySelector('.loader').classList.remove('visibility-none')
            
            Create(productName,productCode,productImage,unitPrice,productQuantity,totalPrice).then
            (
                (res)=>
                {
                    if(res==true)
                    {
                        document.querySelector('.loader').classList.add('visibility-none')
                        cogoToast.success("product inserted!")
                        document.querySelector('.productName').value="";
                        document.querySelector('.productCode').value="";
                        document.querySelector('.productImage').value="";
                        document.querySelector('.unitPrice').value="";
                        document.querySelector('.productQuantity').value="";
                        document.querySelector('.totalPrice').value="";

                    
                    }
                    else
                    {
                        document.querySelector('.loader').classList.add('visibility-none')
                        cogoToast.error("product can not inserted")
                    }
                }
            )

            


        }
    }

    return (
        <Fragment>
            <section className='createForm-section'>
                <div className='row'>
                    <h2>Create Product</h2>
                    <form>
                        <div className='createForm-grid'>
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


                    <div className='createForm-btn'>
                        <button onClick={saveData} >Save</button>
                    </div>
                    <div className='visibility-none loader' >
                        <Loader/>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default CreateForm;