import React from 'react'
import Link from 'next/link'
import { IconType } from 'react-icons'
import { useRecoilValue } from 'recoil'
import { currPageAtom } from '../../state/atoms'

interface NavItemProps {
  title: string,
  path: string,
  Icon: IconType,
}

const NavItem: React.FC<NavItemProps> = ({ title, path, Icon }) => {
  const currPage = useRecoilValue(currPageAtom)

  return (
    <div className='flex w-72'>
      <li className='hover:cursor-pointer'>
        <Link href={path}>
          <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden my-4">
            <div className='bg-gray p-3 rounded-full'>
              <Icon className={ currPage === title ? 'text-blue text-2xl' : 'text-white text-2xl'} />
            </div>
            <span>
              <h1 className='text-white text-2xl mx-2'>{title}</h1>
            </span>
          </a>
        </Link>
      </li>
    </div>
  )
}

export default NavItem