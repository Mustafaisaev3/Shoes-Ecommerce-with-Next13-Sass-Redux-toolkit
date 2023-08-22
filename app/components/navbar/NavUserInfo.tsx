'use client'

import Button from "../UI/Button"
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { BiUser } from 'react-icons/bi'
import { useUI } from "@/app/context/ui.context"
import { ModalViewTypes } from "@/app/context/ui.context"
import getCurrentUser from "@/app/actions/getCurrentUser"
import UserMenu from "./UserMenu"
import { SafeUser } from "@/app/types"

interface NavUserInfoProps {
  currentUser: SafeUser | null
}

const NavUserInfo: React.FC<NavUserInfoProps> = ({ currentUser }) => {
  const { openDrawer, openModal, setModalView } = useUI()

  const handleCartClick = () => {
    return openDrawer()
  }

  const handleAuthClick = () => {
    setModalView(ModalViewTypes.LOGIN_VIEW)
    return openModal()
  }

  return (
    <div className="navbar__user-info">
        <Button title="Cart" rightIcon={HiOutlineShoppingBag} className='btn__secondary' onClick={handleCartClick} />
        {/* <Button title="Login" rightIcon={BiUser} className='btn__secondary' onClick={handleAuthClick} /> */}
        <UserMenu currentUser={currentUser} />
    </div>
  )
}

export default NavUserInfo