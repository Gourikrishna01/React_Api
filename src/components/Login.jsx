import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate()
    const [data,changeData]=useState(
        {
            "username":"",
            "password":""
        }
    )
    const inputHandler=(event=>
        changeData({...data,[event.target.name]:event.target.value})
        )
        const readValue=()=>
        {
            console.log(data)
            if(data.username == "admin" && data.password == "ABC")
            {
                navigate("/add")
            }
            else{
                alert("invalid")
            }
        }
  return (
    <div>
        <div className="container d-flex">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 ">
                    <div className="row g-3">
                        <div className="xol col-12 col sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">username</label>
                            <input type="text" className="form-control" name='username' value={(data.username)} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">password</label>
                           <input type="password" name="password" id="" className="form-control"  value={(data.password)} onChange={inputHandler}/>
                        </div>
                        <div className="xol col-12 col sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-primary" onClick={readValue}>submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login