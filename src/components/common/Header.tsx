'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

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
               src: '/'
          },
          {
               name: 'LIÊN HỆ',
               src: '/'
          },
          {
               name: 'TIN TỨC',
               src: '/'
          }
     ]

     const pathName = usePathname()

     return (
          <header className='flex justify-center items-center flex-col'>
               <Link href='/'>
                    <Image src='/main-logo.png' alt='Nhựa Miền Nam logo' width={90} height={90} />
               </Link>

               <nav>
                    <ul className='flex justify-center gap-2'>
                         {navbarItems.map((item, index) => (
                              <li key={index}><Link
                                   href={item.src}
                                   className={
                                        clsx(
                                             pathName === item.src ? 'text-red-600' : '',
                                             'font-normal'
                                        )
                                   }
                              >
                                   {item.name.toUpperCase()}
                              </Link></li>
                         ))}
                    </ul>
               </nav>


          </header>
     )
}
