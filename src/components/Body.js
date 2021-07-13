import React from 'react'
import swal from 'sweetalert'
import useInput from '../customhook/useInput'

const Body = () => {

    const [name, bindName, resetName] = useInput()
    const [username, bindUsername, resetUsername] = useInput()
    const [password, bindPassword, resetPassword] = useInput()

    const submitHandeler = e => {
        e.preventDefault()
        swal('Registration Successful', 'Welcome to the Community', 'success')
        let users = JSON.parse(localStorage.getItem('users') || "[]")
        let newUser = {
            name,
            username,
            password
        }
        users.push(newUser)
        localStorage.setItem('users', JSON.stringify(users))

        resetName()
        resetUsername()
        resetPassword()
    }

    return (
        <div>
            <div className="row justify-content-center">

                <div className="col-md-6">
                    <img className="img_body" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQmFoidOmlWFxeFIH8vjsjpvCBdRRbb6Qx5A&usqp=CAU" alt="connection-img" />
                </div>

                <div className="col-md-4" style={{ marginTop: "20px" }}>
                    <h1>Register</h1>
                    <form className="regForm" onSubmit={submitHandeler}>
                        <input type="text" placeholder="name" className="form-control" required {...bindName} />
                        <input type="text" placeholder="username" className="form-control" required {...bindUsername} />
                        <input type="password" placeholder="password" className="form-control" required {...bindPassword} />
                        <button type="submit" className="btn btn-primary">SIGN UP</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Body
