import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {

	const navigate = useNavigate()

	const moveToAddContact = () =>{
        navigate("/add_contact")
    }

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">CONTACT LIST</span>
				</Link>
				<div>
					<button className="botonAdd" onClick={moveToAddContact}>Add Contact</button>
				</div>
			</div>
		</nav>
	);
};