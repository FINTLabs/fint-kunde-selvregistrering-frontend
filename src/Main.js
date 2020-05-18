import React, { Component } from 'react';
import ContactApi from "./data/ContactApi";
import ContactNew from "./component/contact/ContactNew";
import LoadingProgress from "./component/LoadingProgress";
import GoToCustomerPortal from "./component/GoToCustomerPortal";
import ContactUpdate from './component/contact/ContactUpdate';
import ContactDelete from './component/contact/ContactDelete';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            foundContact: null,
        });
    }

    render() {
        let responseStatus;
        const { foundContact } = this.state;
        if (foundContact === null) {
            ContactApi.getContact()
                .then(response => {
                    responseStatus = response.status;
                    return response.json();
                })
                .then(json => {
                    if (responseStatus === 200) {
                        this.setState({
                            contact: json,
                            nin: json.nin,
                            foundContact: true
                        });
                    } else {
                        this.setState({
                            nin: json.message,
                            foundContact: false,
                            contact: null,
                        });
                    }
                });
            return (
                <LoadingProgress size={50} />
            );
        }
        else if (foundContact === false) {
            return this.renderNew();
        }
        else if (foundContact === true) {
            return this.renderFound();
        }
    }

    renderFound() {
        const { contact } = this.state;
        if (contact.legal.length || contact.technical.length) {
            return <div>
                <ContactUpdate contact={contact} />
                <GoToCustomerPortal redirect={false} />
            </div>;
        } else {
            return <div>
                <ContactUpdate contact={contact} />
                <ContactDelete />
            </div>;
        }
    }

    renderNew() {
        return (<ContactNew nin={this.state.nin} />);
    }
}

export default Main;