import React from 'react';
import '../styles/ContactPage.sass';

class ContactPage extends React.Component {
    state = {
        value: "",
        isEmpty: true,
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            value: "",
            isEmpty: true
        })
    }

    handleChange = (e) => {
        if (e.target.value.length > 0) {
            this.setState({
                value: e.target.value,
                isEmpty: false
            })
        } else {
            this.setState({
                value: e.target.value,
                isEmpty: true
            })
        }
    }


    render() {
        return (
            <div className="contact">
                <form onSubmit={this.handleSubmit}>
                    <h3 style={{paddingTop: "10px"}}>Write to us: </h3>
                    <textarea value={this.state.value} onChange={this.handleChange} placeholder="Input message"></textarea>
                    <button>Send</button>
                </form>
            </div>

        );
    }
}

export default ContactPage;