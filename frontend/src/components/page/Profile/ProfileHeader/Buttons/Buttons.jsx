import {Button} from "react-bootstrap";
import React from "react";
import './Buttons.css'

const ButtonAvailableFor = () =>
    <Button id={'btnAvailableFor'}>
        Available for
    </Button>

const ButtonAddSection = () =>
    <Button id={'btnAddSection'}
        variant="outline-secondary">
        Add Section
    </Button>

const ButtonOther = () =>
    <Button id={'btnOther'}
        variant="outline-secondary">
        Other
    </Button>

export { ButtonAvailableFor , ButtonAddSection , ButtonOther }