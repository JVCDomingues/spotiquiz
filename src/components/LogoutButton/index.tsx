import { signOut } from "next-auth/react"

import { RiLogoutBoxLine } from 'react-icons/ri'

export default function LogoutButton() {
  return (
    <button className="w-full bg-red-600 text-white font-bold rounded-lg px-5 py-2 mt-5 flex items-center gap-3 justify-center" onClick={() => signOut()}>
      <RiLogoutBoxLine />
      Sair
    </button>
  )
}