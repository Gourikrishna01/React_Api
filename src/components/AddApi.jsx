import React, { useState } from 'react'
import Navbar from './Navbar'

const AddApi = () => {
    const [data,changeData] = useState(
        {
            "Api":"",
            "Description":"",
            "Auth":"",
            "HTTPS":"",
            "Cors":"",
            "Link":"",
            "Categories":""
        }
    )
    const dataHandler=(event=>

        changeData({...data,[event.target.name]:event.target.value})
        )
        const readValue=()=>
        {
            console.log(data)
        }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Api</label>
                            <input type="text" className="form-control" name='Api' value={(data.Api)} onChange={dataHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-labe">Description</label>
                            <input type="text" className="form-control" name='Description' value={(data.Description)} onChange={dataHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Auth</label>
                            <input type="text" className="form-control" name='Auth' value={(data.Auth)} onChange={dataHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">HTTPS</label>
                            <input type="text" className="form-control" name='HTTPS' value={(data.HTTPS)} onChange={dataHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Cors</label>
                            <input type="text" className="form-control" name='Cors' value={(data.Cors)} onChange={dataHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Link</label>
                            <input type="text" className="form-control" name='Link' value={(data.Link)} onChange={dataHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Category</label>
                            <input type="text" className="form-control" name='Categories' value={(data.Categories)} onChange={dataHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-primary" onClick={readValue}>submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddApi