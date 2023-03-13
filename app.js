const addProduct =()=>{
    const product = getValueById('product-name');
    const quantity =  getValueById('product-quantity');
    // console.log(product, quantity);
    showProducts(product, quantity);
    storDatainLocalStorage(product, quantity)
}
// show product in UI
const showProducts = (product, quantity) =>{
    const ul = document.getElementById('ul-container');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`;
    ul.appendChild(li);
}

// check local storage data
const checkDataInLocalStorage = () =>{
    let cart = {};
    const data = localStorage.getItem('cart')
    if(data){
        cart = JSON.parse(data);
        // console.log(cart);
    }
    return cart;
}
// store data in local storage
const storDatainLocalStorage = (product, quantity) =>{
    const cart = checkDataInLocalStorage();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringified);
}

const showDatafromLocalStorage = () =>{
    const storedCart = checkDataInLocalStorage();
    // console.log(storedCart);
    for(product in storedCart){
        const quantity = storedCart[product];
        // console.log(product, quantity);
        // calling the showProduct funtion to show in ui
        showProducts(product, quantity)
    }
}

showDatafromLocalStorage();

// pass id and get value from this funtion
const getValueById = (id) =>{
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    inputField.value = '';
    return inputFieldValue;
}