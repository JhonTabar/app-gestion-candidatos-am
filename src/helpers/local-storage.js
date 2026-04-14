export function saveLocalStorage(llave, valor){
/* set */
localStorage.setItem(llave, JSON.stringify(valor))
}

export function getLocalStorage(llave){
/* get */
let user = localStorage.getItem(localStorage.getItem(llave))
return user
}

export function removeLocalStorage(llave){
/* remove */
localStorage.removeItem(llave)
}