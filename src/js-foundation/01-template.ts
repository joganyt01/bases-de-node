

/*
export const emailTemplate = `
<div>
    <h1>Hi, ${name}</h1>
    <p>Thank you for your order.</p>
    <p>Order ID: {{orderId}}</p>
</div>`;
*/

export const example=(name:string,id:string)=>{
   

    return`<div>
    <h1>Hi, ${name}</h1>
    <p>Thank you for your order.</p>
    <p>Order ID: ${id}</p>
</div>`;

}









