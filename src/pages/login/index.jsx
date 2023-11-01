import React, { Component } from "react";
import { login } from "../../actions/authAction";
import { Link } from "@mui/material";





class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            apiStatus: "",
            link: "",

        }
    };

    onChangeInput = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };

    // test purpose




    onSubmit = (e) => {
        e.preventDefault();
        const { username, password } = this.state
        if (username && password) {
            const data = {
                username,
                password
            }
            this.setState({ apiStatus: 'loading' })
            login(data).then(({ data }) => {
                console.log(data, 'Login Successfull')

            }).catch((err) => {
                console.log(err.response.status);
                const status = err.response.status;
                this.setState({ password: "" })
                if (status == 401) {
                    console.log("User is not valid");
                }
             
            }).finally(() => {
                this.setState({ apiStatus: "" })
            })
        }
    }


    render() {
        const { apiStatus } = this.state
        const isloading = apiStatus === 'loading'


        return (
            <div>
                <h1>Login Form</h1>
                <form onSubmit={this.onSubmit}>

                    <div>

                        <label> Username </label>
                        <input onChange={this.onChangeInput} value={this.state.username} name="username" id="Username" disabled={isloading} />

                    </div>

                    <div>

                        <label> Password </label>
                        <input onChange={this.onChangeInput} value={this.state.password} name="password" id="Password" type={"password"} disabled={isloading} />

                    </div>
                    <button disabled={isloading} >{isloading ? "wait for a moment" : "Login"}</button>

                </form>
                <Link to={"/"}>Go Home</Link>
            </div>

        )
    }
}

export default Login;
