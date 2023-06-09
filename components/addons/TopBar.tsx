import React, { Dispatch, SetStateAction } from 'react'
import { BsFillBoxFill } from 'react-icons/bs'
import { IoMdContacts } from 'react-icons/io'
import { ChatBubbleOvalLeftEllipsisIcon, MagnifyingGlassIcon, BellIcon} from '@heroicons/react/24/solid'
import useAuth from '../../hooks/useAuth'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useDispatch, useSelector } from 'react-redux'
import { selectMainPage, setMainPageComponent, setMainPageTitle } from '@/store/slices/mainPageSlice'
import Options from '../options/Options'

function TopBar() {

    const { logout, user } = useAuth()
    const mainPage = useSelector(selectMainPage)
    const dispatch = useDispatch()

    function getSectionIcon() {
        if (mainPage.title === 'Chat')
            return <ChatBubbleOvalLeftEllipsisIcon className='h-10 w-10 py-1.5'/>
        else if (mainPage.title === 'Contacts')
            return <IoMdContacts className='h-10 w-10 py-1.5'/>
        else if (mainPage.title.includes('Virtual Room'))
            return <BsFillBoxFill className='h-10 w-10 py-1.5'/>
        else if (mainPage.title === 'Options')
            return <GiHamburgerMenu className='h-10 w-10 py-1.5'/>
    }

    return (
        <header className='dragable w-full'>
            <div className='flex flex-row items-center'>
                {
                    getSectionIcon()
                }
                <h2 className='mx-1 font-semibold'>{mainPage.title}</h2>
            </div>

            <div className='flex flex-row'>
                {/* <div className='
                hidden sm:flex sm:flex-row
                items-center
                bg-color-2nd
                rounded-lg
                px-3
                '>
                    <input type="text" placeholder="Search" className="
                    w-40
                    pr-1
                    bg-color-2nd
                    outline-none
                    " />
                    <div>
                        <MagnifyingGlassIcon className='h-5 w-5'/>
                    </div>
                </div> */}

                {/* <BellIcon className='h-10 w-10 mx-2 p-1 clickable-icon'/> */}

                <img src={user?.photoURL!} width="600" height="600" title={user?.displayName ?? ''}
                onClick={() => {dispatch(setMainPageTitle('Options')); dispatch(setMainPageComponent(<Options />))}}
                className='
                h-10 w-10 mx-1 rounded-full
                outline-none
                outline
                hover:outline-gray-400
                active:outline-gray-600
                dark:active:outline-white
                transition ease-in-out duration-200
                cursor-pointer'
                />
            </div>
        </header>
    )
}

export default TopBar;