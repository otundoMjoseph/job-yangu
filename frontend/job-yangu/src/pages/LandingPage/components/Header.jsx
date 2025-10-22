import React from 'react'
import { motion } from "framer-motion";
import { Briefcase } from 'lucide-react'
import { useNavigate } from 'react-router-dom'


const Header = () => {
    const isAuthenticated = true;
    const user = { fullName: "Alex", role: "employer" }
    const navigate = useNavigate()



  return (
      <header>
          <div className="">
              <div className="">
                  {/*logo */}
          </div>
              <div className="">
                  <div className="">
                      <Briefcase className='' />
                      
                  </div>
                  <span className="">
                      
                      Job-Portal
                  </span>

                  {/*Navigation links hidden on mobile */}
                  <nav className="">
                      <a
                          onClick={() => {
                              navigate('/find-jobs')
                              className=''
                      }}>
                        Find Jobs  
                      </a>

                      <a
                          onClick={() => {
                              navigate(
                                  isAuthenticated && user?.role === "employer"
                                      ? "employer-dashboard"
                                      : "/login"
                                  
                              )
                          }} className=''>
                          For Employers
                      </a>
                  </nav>

          </div>
          </div>
          
         {/* Auth buttons */}
<div className="">
  {isAuthenticated ? (
    <div className="">
      <span className="">
        Welcome, {user?.fullName}
      </span>

      <a
        href={
          user.role === "employee"
            ? "/employee-dashboard"
            : "/find-jobs"
        }
        className=""
      >
        Dashboard
      </a>
    </div>
  ) : (
    <>
      <a href="/login" className="">
        Login
      </a>

      <a href="/signup" className="">
        Sign Up
      </a>
    </>
  )}
</div>

      </header>
  )
}

export default Header