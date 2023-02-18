import { Link } from "react-router-dom"
const navbar =()=>{
    return (
        <div>
            <Link to="/">Sleeples</Link>
            <Link to="/Monumap">Monumap</Link>
            <Link to="/Coven">Coven</Link>
        </div>
    )
}
export default navbar;