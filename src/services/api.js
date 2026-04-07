const URL_BASE = `https://app-gestion-candidatos-am-api.onrender.com/` // 'localhost:8080'
let end_points = {
    users: URL_BASE + "users", /* "localhost:8080/usuarios" */ 
    offers: URL_BASE + "offers",
    candidates: URL_BASE + "candidates"
}

export {end_points}