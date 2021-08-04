import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencilAlt} from "@fortawesome/free-solid-svg-icons";
import {Button} from "react-bootstrap";
import './EditButton.css'
function EditButton (props) {
    return (
            <Button className={'pencilEditBtn'} {...props} >
                <FontAwesomeIcon icon={faPencilAlt}/>
            </Button>
    )

}

export default EditButton

