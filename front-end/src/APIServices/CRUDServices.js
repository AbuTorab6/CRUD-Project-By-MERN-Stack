import axios from 'axios';

/*====================================*/
/*==========Create Product============*/
/*====================================*/
var Create = (productName,productCode,image,unitPrice,quantity,totalPrice)=>
{
    var data = {
        productName : productName,
        productCode : productCode,
        image : image,
        unitPrice : unitPrice,
        quantity : quantity,
        totalPrice : totalPrice,
    }
    return axios.post('/insertProduct',data).then
    (
        (res)=>
        {
            if(res.status==200)
            {
                console.log(res.data);
                
                return true
            }
            else
            {
                return false;
            }
        }
    ).catch
    (
        (err)=>
        {
            console.log(err)
            return false;
        }
    )
}

/*====================================*/
/*==========Read Product============*/
/*====================================*/
var Read = ()=>
{
    return axios.get('/getProduct').then
    (
        (res)=>
        {
            if(res.status==200)
            {
                return res.data;
            }
            else
            {
                return false;
            }
        }
    ).catch
    (
        (err)=>
        {
            console.log(err);
            return false;
        }
    )
}


/*====================================*/
/*==========Update Product============*/
/*====================================*/
var Update = (id,productName,productCode,image,unitPrice,quantity,totalPrice)=>
{
    var data = {
        productName : productName,
        productCode : productCode,
        image : image,
        unitPrice : unitPrice,
        quantity : quantity,
        totalPrice : totalPrice,
    }
    return axios.post('/updateProduct/'+id,data).then
    (
        (res)=>
        {
            if(res.status==200)
            {
                return true
            }
            else
            {
                return false;
            }
        }
    ).catch
    (
        (err)=>
        {
            console.log(err)
            return false;
        }
    )
}

/*====================================*/
/*==========Delete Product============*/
/*====================================*/
var Delete = (id)=>
{
    return axios.get('/deleteProduct/'+id).then
    (
        (res)=>
        {
            if(res.status==200)
            {
                return true
            }
            else
            {
                return false;
            }
        }
    ).catch
    (
        (err)=>
        {
            console.log(err);
            return false;
        }
    )
}

/*====================================*/
/*==========Search Product============*/
/*====================================*/

var Search = (id)=>
{
    return axios.get('/getProduct/'+id).then
    (
        (res)=>
        {
            if(res.status===200)
            {
                return res.data;
            }
            else
            {
                return false
            }
        }
    ).catch
    (
        (err)=>
        {
            console.log(err);
            return false;
        }
    )
}



export {Create,Read,Update,Delete,Search}