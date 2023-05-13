import React from "react";


type propsType = {
    status:string
}

export class ProfileStatus extends React.Component<propsType>{
    state={
        editMode:false
    }
    activeEditMode=()=>{
        this.setState({
            editMode:!this.state.editMode
        })
    }
    render() {
        return (
            <div >
                {this.state.editMode
                    ?<input autoFocus={true} onBlur={this.activeEditMode.bind(this)} value={this.props.status}/>
                    :<div  onDoubleClick={this.activeEditMode.bind(this)}>{this.props.status}</div>

                }
            </div>
        );
    }

}