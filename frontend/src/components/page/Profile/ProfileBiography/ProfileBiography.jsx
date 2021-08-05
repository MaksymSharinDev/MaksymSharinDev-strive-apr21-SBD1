import React, {createRef} from "react"
import {Card} from "react-bootstrap"
import './ProfileBiography.css'
import EditButton from "../../../atoms/EditButton/EditButton.jsx"
import {RIETextArea} from "riek"


const mockBiographyText =
    `Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. 
Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`


class ProfileBiography extends React.Component {
    state = {
        bio: '',
        text: ''
    }

    refExpandBioLink = createRef()
    refBioText = createRef()

    componentDidMount() {
        const shrinkBio = text => text.split('\n')[0]

        let bio = !!this.props.bio ? this.props.bio : mockBiographyText
        let text = shrinkBio(bio)
        this.setState({...this.state, bio, text})
    }

    expandBio = e => {
        let text = this.state.bio
        this.setState({...this.state, text})
        e.currentTarget.setAttribute('hidden', 'true')
    }

    editBioText = () => {
        this.refExpandBioLink.current.click()
        this.refBioText.current.click()
        this.refBioText.current.focus()
    }
    updateBio = e => {
        let [ bio , text ] = e.currentTarget.value
        this.setState({...this.state, bio , text })
    }

    render = () =>
        <section id={'profileBio'}>
            <Card className={'m-2'}>
                <div className={'px-4 pt-3 pb-4'}>
                    <div className={'d-flex flex-row justify-content-between align-items-center'}>
                        <h4> Biography </h4>
                        <EditButton
                            onClick={this.editBioText}
                        />
                    </div>
                    <p ref={this.refBioText}
                       className={'bio-text'}
                       contentEditable spellCheck="false"
                       onChange={this.updateBio}
                    >
                        {this.state.text}
                    </p>

                    <a onClick={this.expandBio} ref={this.refExpandBioLink}>
                        show more
                    </a>
                </div>
            </Card>
        </section>
}
export default ProfileBiography