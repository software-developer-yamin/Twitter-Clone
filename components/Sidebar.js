import {
     BellIcon, BookmarkIcon, ClipboardListIcon,
     DotsCircleHorizontalIcon, DotsHorizontalIcon, HashtagIcon, InboxIcon, UserIcon
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import Image from 'next/image';
import React from 'react';
import SidebarLink from './SidebarLink';
import { useSession, signIn, signOut } from "next-auth/react"


function Sidebar() {

     const { data: session } = useSession();

     return (
          <div className='hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full' >
               <div className='flex items-center justify-center w-14 h-14 p-0 xl:ml-24 hoverAnimation'>
                    <Image src="https://rb.gy/ogau5a" width={30} height={30} objectFit='contain' />
               </div>
               <div className='space-y-2.5 mt-4 mb-2.5 xl:ml-24'>
                    <SidebarLink text="Home" Icon={HomeIcon} active />
                    <SidebarLink text="Explore" Icon={HashtagIcon} />
                    <SidebarLink text="Notifications" Icon={BellIcon} />
                    <SidebarLink text="Messages" Icon={InboxIcon} />
                    <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
                    <SidebarLink text="Lists" Icon={ClipboardListIcon} />
                    <SidebarLink text="Profile" Icon={UserIcon} />
                    <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} />
               </div>
               <button className='hidden xl:inline bg-[#1d9bf0] rounded-full ml-auto w-56 h-[52px] font-bold shadow-md hover:bg-[#1a8cd8] mb-2'>Tweet</button>
               <div className='flex text-[#d9d9d9] items-center justify-center hoverAnimation xl:ml-auto mt-auto' onClick={() => signOut()}>
                    <img className='w-10 h-10 rounded-full xl:mr-2.5' src={session.user.image} alt="" />
                    <div className='hidden xl:inline leading-5'>
                         <h4 className='font-bold text-sm uppercase'>{session.user.name}</h4>
                         <p className='text-[#6e767d] text-sm font-medium lowercase'>@{session.user.tag}</p>
                    </div>
                    <DotsHorizontalIcon className="h-5 hidden xl:inline ml-10" />
               </div>
          </div>
     )
}

export default Sidebar;
