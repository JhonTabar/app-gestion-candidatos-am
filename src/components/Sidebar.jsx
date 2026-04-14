import { getLocalStorage, removeLocalStorage } from "../helpers/local-storage"
import { redirect } from "../helpers/alerts"
import { initials } from "../helpers/generators"
let auth = getLocalStorage("user")
/* let iniciales = auth.fullName.split(" ").map((i)=> i (0).join(" ")) */

const Sidebar = () => {
    function logout(){
        removeLocalStorage("user")
        redirect("Cerrando sesion...", "/", "info")
    }
    return(
        <aside>
            <div>
                <h2>Iniciales{initials(auth.fullName)}</h2>
                <p>Nombre:{auth.fullName}</p>
                <p>Rol:{auth.role}</p>
            </div>
            <nav>
                <a href="">Ofertas</a>
                <a href="">Candidatos</a>
                <button onClock={logout}>Cerrar Sesión</button>
            </nav>
        </aside>
    )
}

export default Sidebar