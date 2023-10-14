import React from 'react'
import Layout from '../components/Layout'

const PatientRegister = () => {
  return (
    <Layout>
        <div class="row">
                <div class="col">
                    <img src="doctor.jpg" width={900} height={800} />
                </div>
                <div class="col">
                    <div className="container">
                        <div className='box'>
                            <h1>Patient Registration</h1>
                            <form>
                                <div className="mt-4 mb-4">
                                    <label htmlFor="name" className="form-label">
                                        Full Name
                                    </label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter your full name" />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="email" className="form-label">
                                        Email
                                    </label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="phone" className="form-label">
                                        Phone Number
                                    </label>
                                    <input type="text" className="form-control" id="phone" placeholder="Enter your phone number" />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="address" className="form-label">
                                        Address
                                    </label>
                                    <input type="text" className="form-control" id="phone" placeholder="Enter your addreses" />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="profilePicture" className="form-label">
                                        Profile Picture
                                    </label>
                                    <input type="file" className="form-control" id="profilePicture" />
                                </div>
                                <div class="d-flex align-items-center mt-5">
                                    <hr class="flex-grow-1"/>
                                    <span class="mx-3"><b>Health Information</b></span>
                                    <hr class="flex-grow-1"/>
                                </div>


                                <div className="mb-4">
                                    <label htmlFor="address" className="form-label">
                                        Height
                                    </label>
                                    <input type="text" className="form-control" id="phone" placeholder="Enter your addreses" />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="address" className="form-label">
                                        Weight
                                    </label>
                                    <input type="text" className="form-control" id="phone" placeholder="Enter your addreses" />
                                </div>
                                
                                <div className="mb-4">
                                    <label htmlFor="address" className="form-label">
                                        Age
                                    </label>
                                    <input type="text" className="form-control" id="phone" placeholder="Enter your addreses" />
                                </div>

                                <button type="submit" className="btn btn-rd">
                                    <h4>Register</h4>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    </Layout>
  )
}

export default PatientRegister