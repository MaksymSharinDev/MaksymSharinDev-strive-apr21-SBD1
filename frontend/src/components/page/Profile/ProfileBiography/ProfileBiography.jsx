import {Card} from "react-bootstrap";
import './ProfileBiography.css'
import EditButton from "../../../atoms/EditButton/EditButton.jsx";
import {useEffect, useState} from "react";

const mockBiographyText =
    `Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. 
Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

const ProfileBiography = ( props ) => {
    let [bio, setBio] = useState('')
    let text = !!props.bio ? props.bio : mockBiographyText

    const shrinkBio = text => text.split('\n')[0]
    const expandBio = e => {
        setBio( text )
        e.currentTarget.setAttribute('hidden', true )
    }
    useEffect(() => {
        setBio( shrinkBio( text ) )
    } ,[])


    return (
        <section id={'profileBio'}>
            <Card className={'m-2'}>
                    <div className={'px-4 pt-3 pb-4'}>
                        <div className={'d-flex flex-row justify-content-between align-items-center'}>
                            <h4> Biography </h4>
                            <EditButton/>
                        </div>
                        <p>{bio}</p>
                        <a onClick={expandBio} >
                            show more
                        </a>
                    </div>
            </Card>
        </section>
    )

}

export default ProfileBiography