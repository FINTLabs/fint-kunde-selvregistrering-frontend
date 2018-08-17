import React, {Component} from 'react';
import ContactApi from "./data/ContactApi";
import ContactNew from "./component/contact/ContactNew";
import LoadingProgress from "./component/LoadingProgress";
import GoToCustomerPortal from "./component/GoToCustomerPortal";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            foundContact: null,
        });
    }

    componentDidMount() {
        let responseStatus;
        ContactApi.getContact()
            .then(response => {
                responseStatus = response.status;
                return response.json();
            })
            .then(json => {
                this.setState({
                    nin: json.message,
                    foundContact: (responseStatus === 302)
                });
            });
    }

    render() {
        const {foundContact} = this.state;
        if (foundContact === null) {
            return (
                <LoadingProgress size={50}/>
            );
        }
        else if (foundContact === false) {
            return this.renderNew();
        }
        else if (foundContact === true) {
            return Main.renderFound();
        }
    }

    static renderFound() {
        return (<GoToCustomerPortal/>);
    }

    renderNew() {
        return (<ContactNew nin={this.state.nin}/>);
    }
}

export default Main;