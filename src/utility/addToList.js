import { toast } from "react-toastify";

const getStoredCartList = () => {
    const storedListStr = localStorage.getItem('cart-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else {
        return [];
    }
}

const addToStoredCartList = (id) => {
    const storedList = getStoredCartList();
    if (storedList.includes(id)) {

    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('cart-list', storedListStr);
        toast('This gadget has been added to your cart.')
    }
}


const clearCart = ()=>{
    localStorage.removeItem("cart-list");
}

const removeCartGadget = (id)=>{
    const storedList = getStoredCartList();
    const updatedList = storedList.filter(itemId=> itemId !== id);
    localStorage.setItem('cart-list', JSON.stringify(updatedList));
}


const getStoredWishList = () => {
    const storedWishListStr = localStorage.getItem('wish-list');
    if (storedWishListStr) {
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList;
    }
    else {
        return [];
    }
}

const addToStoredWishList = (id) => {
    const storedWishList = getStoredWishList();
    if (storedWishList.includes(id)) {
        
    }
    else {
        storedWishList.push(id);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list', storedWishListStr);
        toast('This gadget has been added to your wishlist.')
    }
}

export { addToStoredCartList, addToStoredWishList, getStoredCartList, getStoredWishList, clearCart, removeCartGadget}