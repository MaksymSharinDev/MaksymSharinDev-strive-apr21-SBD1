import React from 'react'

import { Card, ListGroup } from "react-bootstrap";
import './ProfileHeader.css'

import Cover from "./Cover/Cover";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx"

const ProfileHeader = () =>
        <section id={'profileHeader'}>
            <Card className={'m-2'}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <Cover/>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <ProfileInfo/>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </section>

export default ProfileHeader