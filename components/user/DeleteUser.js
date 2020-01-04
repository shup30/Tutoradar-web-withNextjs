import React, { Component } from 'react';
import Link from "next/link";
import { isAuthenticated } from '../auth';
import { remove } from './apiUser';
import { signout } from '../auth';

export default class DeleteUser extends Component {

    state = {
        redirect: false
    };

    deleteAccount = () => {
        const token = isAuthenticated().token;
        const userId = this.props.userId;
        remove(userId, token)
        .then(data => {
            if(data.error) {
                console.log(data.error)
            } else {
                //signout
                signout(() => console.log("user is deleted"));
                //redirect
                this.setState({redirect: true})
            }
            });
        };
    
    deleteConfirmed = () => {
        let answer = window.confirm("Are you sure you want to delete your account?");
        if(answer) {
            this.deleteAccount();
        }
    };


    render() {
        if(this.state.redirect){
            return <Link href="/" />;
        }
        return (
            <button 
            onClick={this.deleteConfirmed}
            className="button is-raised is-danger">
                Delete Profile
            </button>
        )
    }
}
