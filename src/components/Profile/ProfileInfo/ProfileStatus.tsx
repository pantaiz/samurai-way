import React, {ChangeEvent} from "react";

type propsType = {
    status: string
    updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<propsType> {
    state = {
        status: '',
        editMode: false
    }
    activeEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })
    }
    updateStatus = () => {
        this.props.updateStatus(this.state.status)
        this.activeEditMode()
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }

    componentDidUpdate(prevProps: Readonly<propsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.updateStatus}
                             value={this.state.status}/>
                    : <div onDoubleClick={this.activeEditMode}>{this.props.status || 'change status...'}</div>
                }
            </div>
        );
    }

}