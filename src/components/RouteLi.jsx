import { Link } from "react-router-dom"

export const RouteLi = ({ name, id, newId, path }) => {

    return (
        <li ><Link to={path} className={` px-2 ${id == newId ? 'border-b-2' : 'hover:border-b-2'}`} id={id}>{name}</Link></li>
    )
}
