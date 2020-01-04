import React, { Component } from "react";
import { resetPassword } from "../auth";

class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newPassword: "",
            message: "",
            error: ""
        };
    }

    resetPassword = e => {
        e.preventDefault();
        this.setState({ message: "", error: "" });

        resetPassword({
            newPassword: this.state.newPassword,
            resetPasswordLink: this.props.match.params.resetPasswordToken
        }).then(data => {
            if (data.error) {
                console.log(data.error);
                this.setState({ error: data.error, newPassword: "" });
            } else {
                console.log(data.message);
                this.setState({ message: data.message, newPassword: "" });
            }
        });
    };

    render() {
        return (
            <div className="container">
                <h2 className="title">Reset your Password</h2>

                {this.state.message && (
                    <h4 className="notification is-success">{this.state.message}</h4>
                )}
                {this.state.error && (
                    <h4 className="notification is-warning">{this.state.error}</h4>
                )}

                <form
                    style={{ display: this.state.message.length ? "none" : "" }}
                >
                    <div className="field">
                        <input
                            type="password"
                            className=""
                            placeholder="Your new password"
                            value={this.state.newPassword}
                            name="newPassword"
                            onChange={e =>
                                this.setState({
                                    newPassword: e.target.value,
                                    message: "",
                                    error: ""
                                })
                            }
                            autoFocus
                        />
                    </div>
                    <button
                        onClick={this.resetPassword}
                        className="button is-raised is-primary"
                    >
                        Reset Password
                    </button>
                </form>
            </div>
        );
    }
}

export default ResetPassword;
