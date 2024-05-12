const addproduct = () =>{
    const productField = document.getElementById('product-item');
    const quantityField = document.getElementById('product-quantity');
    const product = productField.Value;
    const quantity = quantityField.Value;
    productField.Value = '';
    quantityField.Value = '';
    console.log(product, quantity);
    displayProduct (product, quantity);

}
const displayProduct = ( product,quantity) => {
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`;
    ul.appendChild(li);
}