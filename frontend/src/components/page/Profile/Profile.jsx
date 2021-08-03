import { Container, Row, Col } from "react-bootstrap";

import ProfileHeader from './ProfileHeader/ProfileHeader.jsx'


const Profile = () => {
    return (
        <>
            { /* sm={} md={} lg={} */}

            <Container >
                <Row className={'no-gutters'}>
                    <Col sm={12} md={9} lg={9}>
                        <div className={'d-flex flex-column'}>
                            <ProfileHeader/>
                        </div>
                    </Col>
                    <Col>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Profile