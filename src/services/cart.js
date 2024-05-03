
// Adicionar item ao carrinho

async function addItem(userCart, item){
    userCart.push(item)
};

// Deletar item do carrinho

async function deletItem(userCart, name){
    const index = userCart.findIndex((item) => item.name === name);

    if(index !== -1){
        userCart.splice(index, 1)
    }
}

// Remover item do carrinho

async function removeItem(userCart, index){
    const deletItem = index - 1

    if(index >= 0 && deletItem < userCart.length){
        userCart.splice(deletItem, 1)
    }
}

async function removeItem1 (userCart, item){
    const indexFound = userCart.findIndex((p) => p.name === item.name);
    
    if(indexFound == -1){
        console.log("\n Item não encontrado");
        return;
    }

    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1
        return
    }

    if(userCart[indexFound].quantity == 1){
        userCart.splice(indexFound, 1);
        return;
    }
}

async function displayCart (userCart){
    userCart.forEach((item, index) => {
        console.log(`${index +1}. ${item.name} - R$ ${item.price} | ${item.quantity}X | Subtotal = ${item.subtotal()}`);
    })
}

// Caulcular total do carrinho

async function calculeteTotal(userCart){
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(result);
}


export{
    addItem,
    deletItem,
    removeItem,
    removeItem1,
    calculeteTotal,
    displayCart,
}