'use client'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Icon } from "@iconify/react"
import AnnBar from './annBar'

export default function Header() {
     interface NavbarItem {
          name: string
          src: string
     }

     const navbarItems: NavbarItem[] = [
          {
               name: 'TRANG CHỦ',
               src: '/'
          },
          {
               name: 'HÀNG MỚI',
               src: '/hang-moi'
          },
          {
               name: 'GIỚI THIỆU',
               src: '/gioi-thieu'
          },
          {
               name: 'LIÊN HỆ',
               src: '/lien-he'
          },
          {
               name: 'TIN TỨC',
               src: '/tin-tuc'
          }
     ]

     const pathName = usePathname()

     return (
          <header className='border-b-2'>
               <AnnBar />
               <div className='container mx-auto grid grid-cols-12 items-center py-1'>
                    <Link href='/' className='col-span-3'>
                         <Image src='/main-logo.png' alt='Nhựa Miền Nam logo' width={70} height={70} />
                    </Link>

                    <nav className='hidden col-span-6 lg:flex justify-center'>
                         <ul className='flex justify-center gap-5'>
                              {navbarItems.map((item, index) => (
                                   <li key={index} className=''>
                                        <Link
                                             href={item.src}
                                             className={
                                                  clsx(
                                                       'py-2 px-4 rounded-md duration-100',
                                                       pathName === item.src ? 'font-bold' : 'font-semibold',
                                                  )
                                             }
                                        >
                                             {item.name.toUpperCase()}
                                        </Link>
                                        {pathName === item.src && <span className='block w-8 h-1 rounded-md bg-green-800 mx-auto' />}
                                   </li>
                              ))}
                         </ul>
                    </nav>

                    <div className="col-span-3 flex justify-end gap-5">
                         <Icon icon="mdi:account-outline" width="28" height="28" className='cursor-pointer hover:opacity-70' />

                         <div className='flex cursor-pointer hover:opacity-70 duration-200'>
                              <Icon icon="flowbite:search-outline" width="26" height="26" />
                         </div>

                         <div className='flex cursor-pointer hover:opacity-70 duration-200'>
                              <Icon icon="uil:cart" width="26" height="26" />
                         </div>

                    </div>
               </div>
          </header>
     )
}
