import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';


const ViewAppi = () => {

    const [data, changeData] = useState([]);
    const [isloading,changeLoading]= useState(true)
  
    const fetchData = () => {
        axios.get("https://api.publicapis.org/entries").then(
            (response) => {
                changeData(response.data.entries);
                              changeLoading(false)
  
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };
  
    useEffect(() => { fetchData(); }, []);
  
  
    return (
        <div>
  
          <Navbar/>
            <br />
  
            <div>
  
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="row g-3">
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">API</th>
                                                <th scope="col">Description</th>
                                                <th scope="col">Auth</th>
                                                <th scope="col">HTTPS</th>
                                                <th scope="col">Cors</th>
                                                <th scope="col">Link</th>
                                                <th scope="col">Category</th>
                                               
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {isloading ? (<div class="spinner-grow text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>) :(
                                              data.map((value, index) => {
                                                return (
                                                    <tr>
                                                        <td>{value.API}</td>
                                                        <td>{value.Description}</td>
                                                        <td>{value.Auth}</td>
                                                        <td>{value.HTTPS.toString()}</td>
                                                        <td>{value.Cors}</td>
                                                        <td>{value.Link}</td>
                                                        <td>{value.Category}</td>
                                                       
                                                    </tr>
                                                );
                                            })
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  
    )
  }
  

export default ViewAppi