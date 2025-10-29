import React, { useState } from 'react'
import HERO_IMG from '../assets/Machweohero.jpeg'
import {APP_FEATURES} from '../utils/data'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const navigate = useNavigate()
  const [openAuthModel, setOpenAuthModel] = useState(false)
  const[currentPage, setCurrentPage] = useState("login")
  return (
    <div>LandingPage</div>
  )
}

export default LandingPage