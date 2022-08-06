import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { SpinnerRoundFilled } from 'spinners-react';



function Login() {
    const [err, setErr] = useState('')
    const [loading, setLoading] = useState(false)

    // const navigate = useNavigate()

    const {
        register,
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => {
        setLoading(true)
        console.log(data)
            axios.post('https://africanspringsapi.herokuapp.com/api/login', data).then((res) => {
            console.log(res)
            
            if(res.data['status'] === 'error') {
                setErr(res.data['error'])
                setLoading(false)
            } else if(res.data['status'] === 'ok') {
                setErr('')
                const token = res.data['data']
                const userData = JSON.parse(atob(token.slice(37, -44)));
                console.log(userData['id'])
                const role = res.data['role']
                let value;
                switch(role){
                    case 'user':
                        value = 'user';
                        break;
                    case 'admin':
                        value = 'admins';
                        break;
                    case 'superadmin':
                        value = 'super/admins'
                }
                getUser(userData['id'], token, res.data['role'], value)
                // navigate(`/${userData['id']}`)
                // localStorage.setItem('loginState', true)
                // localStorage.setItem('userId', userData['id'])
            }
            }).catch((err) => {
                console.log(err)
                setErr('Something went wrong')
                setLoading(false)
            })
        
    }

    const getUser = (id, token, role, value) => {
        
        axios.get(`https://africanspringsapi.herokuapp.com/api/${value}/get/one/${id}`,{headers: {'Authorization': `Bearer ${token}`}}).then((res) => {
            console.log(res.data)
            const userData = JSON.stringify(res.data[0])
            localStorage.setItem('loginState', true)
            localStorage.setItem('role', role)
            localStorage.setItem('userData', userData)
            window.location.href = '/'
        }).catch((err) => {
            console.log(err)
            setLoading(false)
        })
    }

  return (
    <section className="wrap__section">
      <div className="container">
          <div className="row">
              <div className="col-md-12">
                  {/* <!-- Form Login --> */}
                  <div className="card mx-auto" style={{maxWidth: '380px'}}>
                      <div className="card-body">
                          <h4 className="card-title mb-4">Sign in</h4>
                          <form onSubmit={handleSubmit(onSubmit)}>
                              <div className="form-group">
                                  <input {...register('email')} required className="form-control" placeholder="Email" type="text" />
                              </div> 
                              <div className="form-group">
                                  <input {...register('password')} required className="form-control" placeholder="Password" type="password" />
                              </div> 

                              <div className="form-group">
                                  <a href="#" className="float-right">Forgot password?</a>
                                  <label className="float-left custom-control custom-checkbox"> <input type="checkbox"
                                          className="custom-control-input"  />
                                      <span className="custom-control-label"> Remember </span>
                                  </label>
                              </div> 
                              <div className="form-group">
                                  <button type="submit" className="btn btn-primary btn-block">  {
                                        loading ? <SpinnerRoundFilled color='#ffffff' enabled={loading} /> : 'Login'
                                    }  </button>
                              </div> 
                              <p style={{color: 'red', textAlign: 'center', textTransform: 'capitalize'}}> {err} </p>
                          </form>
                      </div> 
                  </div> 

                  <p className="text-center mt-4 mb-0">Don&apos;t have account? <Link href="/register">Sign up</Link></p>
              </div>
          </div>
      </div>
  </section>
  )
}

export default Login
