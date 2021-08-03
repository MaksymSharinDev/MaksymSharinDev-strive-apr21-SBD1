import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencilAlt} from "@fortawesome/free-solid-svg-icons";
import {Button} from "react-bootstrap";
import './EditButton.css'
function EditButton () {
    return (
            <Button className={'pencilEditBtn'}>
                <FontAwesomeIcon icon={faPencilAlt}/>
            </Button>
    )

}

export default EditButton

