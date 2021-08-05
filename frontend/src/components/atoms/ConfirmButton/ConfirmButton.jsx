import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {Button} from "react-bootstrap";
import './ConfirmButton.css'

function ConfirmButton (props) {
    return (
        <Button className={'checkConfirmBtn'} {...props} >
            <FontAwesomeIcon icon={faCheck}/>
        </Button>
    )

}

export default ConfirmButton