import {Button, Card, Col, ListGroup, Row} from "react-bootstrap";
import './ProfileHeader.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencilAlt} from "@fortawesome/free-solid-svg-icons";
import EditButton from "../../../atoms/EditButton/EditButton";

const mockCoverUrl = 'assets/img/mock/mock-profile-cover.jpeg'
const mockProfilePicture = 'https://via.placeholder.com/152'

const mockActualCompanyPicUrl = 'https://via.placeholder.com/48'
const mockActualCompanyName = 'Actual Company Name'
const mockNameSurname = 'Name Surname'
const mockJobTitle = 'jobTitle at Company name'
const mockLocation = 'location'
const MockConnectionsN = 'XXX'

const ActualCompany = () =>
    <a href={'/#'}>
        <div id={'actualCompany'}>
            <img src={mockActualCompanyPicUrl}/>
            <span>{mockActualCompanyName}</span>
        </div>
    </a>

const ProfilePicture = () =>
    <div id={'profilePic'}>
        <img src={mockProfilePicture}/>
    </div>

const ButtonAvailableFor = () =>
    <Button id={'btnAvailableFor'}>
        Available for
    </Button>

const ButtonAddSection = () =>
    <Button variant="outline-secondary">
        Add Section
    </Button>

const ButtonOther = () =>
    <Button variant="outline-secondary">
        Other
    </Button>

function ProfileHeader() {

    return (
        <section id={'profileHeader'}>
            <Card className={'m-2'}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <section id={'profileCoverSection'}>
                            <img width={'100%'} src={mockCoverUrl}/>
                        </section>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <section id={'profileInfoSection'} className={'px-4 py-2 pb-4'}>
                            <div className={'d-flex flex-row justify-content-between'}>
                                <ProfilePicture/>
                                <EditButton/>
                            </div>
                            <Row className={'mt-3 mb-3 g-0 flex-row justify-content-between'}>
                                <Col sm={12} md={12} lg={6}>
                                    <h1> {mockNameSurname} </h1>
                                    <h5> {mockJobTitle} </h5>
                                    <p className={'m-0'}>
                                        <span> {mockLocation} </span>
                                        ·
                                        <span> <a href={'/?contactModal=true'}>{'contact info'}</a> </span>
                                    </p>
                                    <p className={'mt-2'}>
                                        <a href={'/#'}> {MockConnectionsN} Connections </a>
                                    </p>
                                </Col>
                                <Col sm={12} md={12} lg={6}>
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
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </section>
    )
}

export default ProfileHeader