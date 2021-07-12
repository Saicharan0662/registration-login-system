import React, { useState } from 'react'
import { useHistory } from 'react-router'
import swal from 'sweetalert'

const Navbar = () => {

    const [togglenav, setTogglenav] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const logout = () => {
        localStorage.removeItem('isLoggedIn')
        history.push('/')
        window.location.reload()
    }

    const login = () => {
        const users = JSON.parse(localStorage.getItem('users'))

        let match = false
        for (var user of users) {
            if (user.username === username && user.password === password) {
                match = true
            }
        }

        if (match) {
            swal('Login Successful', 'Welcome', 'success')
            localStorage.setItem('isLoggedIn', 'isLoggedIn')
            history.push('/dashbord')
        }
        else {
            swal('Invalid Credentials', 'Try Again', 'error')
        }

        setUsername('')
        setPassword('')
    }

    const NavLightMarkup = (
        < div className='row nav' >
            <div className="col-md-6">
                <h1>BrandName</h1>
            </div>
            <div className="col-md-6">
                {
                    !localStorage.getItem('isLoggedIn') ?
                        (<form onSubmit={login}>
                            <input type="text" placeholder="username" required value={username} onChange={e => setUsername(e.target.value)} />
                            <input type="password" placeholder="password" required value={password} onChange={e => setPassword(e.target.value)} />
                            <button type="submit">LOGIN</button>
                        </form>)
                        :
                        (<button onClick={logout}>LOGOUT</button>)
                }
            </div>
        </div >
    )

    const NavDarkMarkup = (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <h1 className="navbar-brand">BrandName</h1>
                {
                    !localStorage.getItem('isLoggedIn') ?
                        (<form className="d-flex" onSubmit={login}>
                            <input className="form-control me-2" type="text" placeholder="username" required value={username} onChange={e => setUsername(e.target.value)} />
                            <input className="form-control me-2" type="password" placeholder="password" required value={password} onChange={e => setPassword(e.target.value)} />
                            <button className="btn btn-outline-primary" type="submit">LOGIN</button>
                        </form>)
                        :
                        (<button className="btn btn-outline-primary" onClick={logout}>LOGOUT</button>)
                }
            </div>
        </nav >
    )

    return (
        <div>
            {togglenav ? NavDarkMarkup : NavLightMarkup}
            <div style={{ textAlign: 'left' }}>
                <button className='toggleBtn' onClick={() => setTogglenav(!togglenav)}>Toggle</button>
            </div>
        </div>
    )
}

export default Navbar
