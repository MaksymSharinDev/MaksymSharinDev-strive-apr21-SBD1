import EditButton from "../../../../atoms/EditButton/EditButton";
import {Card, Col, Nav, Row} from "react-bootstrap";
import {ButtonAddSection, ButtonAvailableFor, ButtonOther} from "../Buttons/Buttons";
import React, {useState} from "react";
import ConfirmButton from "../../../../atoms/ConfirmButton/ConfirmButton";
import ImageDropZone from "../../../../atoms/ImageDropZone/ImageDropZone";
import './ProfileInfo.css'

const mockProfilePicture = 'https://via.placeholder.com/152'

const mockActualCompanyPicUrl = 'https://via.placeholder.com/48'
const mockActualCompanyName = 'Actual Company Name'
const mockNameSurname = 'Name Surname'
const mockJobTitle = 'jobTitle at Company name'
const mockLocation = 'location'
const mockProfileEmail = 'name.surname@email.net'
const MockConnectionsN = 'XXX'

const ProfilePicture = ({editMode}) => {
    //TODO upload and url-fetching for src attribute
    let [src, setSrc] = useState(mockProfilePicture)
    let [file, setFile] = useState(null)

    const handOffFile = e => {
        let lastIndex = e.target.files.length - 1
        let file = e.target.files[lastIndex]
        setFile(file)
    }
    return (
        <div id={'profilePic'}>

            {!editMode &&
            <img width={'152'} height={'152'} src={src}/>
            }
            {editMode &&
            <>
                <img width={'152'} height={'152'} src={src} style={{position: 'absolute'}}/>
                <ImageDropZone
                    onInput={handOffFile} width={'75%'} height={'75%'}
                    style={{position: 'absolute', top: '0', zIndex: 1}}/>
            </>
            }

        </div>
    )
}

const ActualCompany = () =>
    <a href={'/#'}>
        <div id={'actualCompany'}>
            <img src={mockActualCompanyPicUrl}/>
            <span>{mockActualCompanyName}</span>
        </div>
    </a>

const ProfileText = ({editMode}) => {
    //TEST
    let [contactVisibility, setContactVisibility] = useState(false)
    const handleContactInfoClick = () => {
        setContactVisibility(!contactVisibility)

        const contactInfoNode = document.querySelector('.contact-info')


        contactVisibility
            ? contactInfoNode.classList.remove('collapsed')
            : contactInfoNode.classList.add('collapsed')

    }
    return (
        <>
            <h1
                className={'infoField'}
                contentEditable={editMode} spellCheck={false}>
                {mockNameSurname}
            </h1>
            <h5
                className={'infoField'}
                contentEditable={editMode} spellCheck={false}>
                {mockJobTitle}
            </h5>
            <div className={'m-0 d-flex flex-row align-items-center'}>
                <span
                    className={'infoField'}
                    contentEditable={editMode} spellCheck={false}>
                    {mockLocation}
                </span>
                <span>  ·  </span>
                <span>
                    <a className={'infoField'}
                       onClick={handleContactInfoClick}>
                        {'contact info'}
                    </a>
                </span>

            </div>
            <Card className={'contact-info collapsed my-2'} >
                <Card.Body>
                    {mockProfileEmail}
                </Card.Body>
            </Card>

            <p className={'mt-2'}>
                <a className={'infoField'}
                   href={'/#'}> {MockConnectionsN} Connections
                </a>
            </p>
        </>
    )
}


class ProfileInfo extends React.Component {
    state = {
        editMode: false
    }

    handleEditInfo = e => {
        let state = this.state
        state.editMode
            ? state.editMode = false
            : state.editMode = true
        this.setState(state)
    }

    render = () => (
        <section id={'profileInfoSection'} className={'px-4 py-2 pb-4'}>
            <div className={'d-flex flex-row justify-content-between'}>
                <ProfilePicture editMode={this.state.editMode}/>
                {this.state.editMode
                    ? <ConfirmButton onClick={this.handleEditInfo}/>
                    : <EditButton onClick={this.handleEditInfo}/>}
            </div>
            <Row className={'mt-3 mb-3 g-0 flex-row justify-content-between'}>
                <Col sm={12} md={12} lg={7}>
                    <ProfileText editMode={this.state.editMode}/>
                </Col>
                <Col sm={12} md={12} lg={5}
                     className={'' +
                     'd-flex flex-row align-items-center ' +
                     'justify-content-lg-center ' +
                     'justify-content-sm-start'
                     }>
                    <ActualCompany/>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={12} lg={12}>
                    <section id={'profileHeaderBtns'}>
                        <ButtonAvailableFor/>
                        <ButtonAddSection/>
                        <ButtonOther/>
                    </section>
                </Col>
            </Row>
        </section>
    )
}

export default ProfileInfo

