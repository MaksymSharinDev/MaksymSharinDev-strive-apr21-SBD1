import {Card, Col, Row} from "react-bootstrap"
import {useState} from "react";
import './ProfileActivities.css'
const MockActivitiesCard = () =>
    new Array(4).fill(
        {
            title: 'Activity Title',
            desc: 'Activity Description ',
            thumbnailUrl: 'https://via.placeholder.com/56'
        }
    )



const ActivitiesTop = () =>
    <>
        <h4>Activities</h4>
        <a href={'/#'}>
            XXX follower
        </a>
    </>

function ProfileActivities() {
    let [activities, setActivities] = useState(MockActivitiesCard)

    return (
        <section id={'profileActivities'}>
            <Card className={'m-2'}>
                <div className={'px-4 pt-3 pb-4'}>
                    <Row>
                        <Col sm={12} md={12} lg={12}>
                            <ActivitiesTop/>
                        </Col>
                    </Row>
                    <Row>
                        {
                            activities.map(
                                activity =>
                                    <Col sm={12} md={6} lg={6}>
                                        <div className={'p-2'}>
                                            <div className={'d-flex align-items-start'}>
                                                <img src={activity.thumbnailUrl}/>
                                                <div>
                                                    <h5>{activity.title}</h5>
                                                    <p>{activity.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                            )
                        }

                    </Row>

                </div>
            </Card>
        </section>
    )
}

export default ProfileActivities