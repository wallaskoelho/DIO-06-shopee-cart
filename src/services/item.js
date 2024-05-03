

// Criar item com subtotal calculado


async function creatItem(name, price, quantity){
    return{
        name,
        price,
        quantity,
        subtotal: () => price * quantity,
    }
}


export default creatItem
