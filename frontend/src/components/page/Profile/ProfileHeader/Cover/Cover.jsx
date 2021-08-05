import React from 'react'
import EditButton from "../../../../atoms/EditButton/EditButton";
import ConfirmButton from "../../../../atoms/ConfirmButton/ConfirmButton";
import ImageDropZone from "../../../../atoms/ImageDropZone/ImageDropZone";
import './Cover.css'

const mockCoverUrl = 'assets/img/mock/mock-profile-cover.jpeg'

class Cover extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        editMode: false,
        src: mockCoverUrl
    }

    handleEditCover = e => {
        let state = this.state
        state.editMode
            ? state.editMode = false
            : state.editMode = true
        this.setState(state)
    }
    refreshCoverFile = e => {

    }

    render = () =>
        <section id={'profileCoverSection'}>
            <div
                className={'editingBtnsWrapper px-4 py-4 pb-4 d-flex flex-row justify-content-end'}>
                {!this.state.editMode ?
                    <EditButton onClick={this.handleEditCover}/> :
                    <ConfirmButton onClick={this.handleEditCover}/>
                }
            </div>
            {!this.state.editMode &&
                <img width={'100%'} height={'100%'} src={this.state.src}/>
            }
            {this.state.editMode &&
                <>
                    <ImageDropZone/>
                    <img width={'100%'} height={'100%'} src={this.state.src} style={{position: 'absolute', top: '0'}}/>
                </>
            }
        </section>
}

export default Cover