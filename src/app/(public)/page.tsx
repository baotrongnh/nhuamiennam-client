'use client'
import { NavLink } from '@mantine/core';
import Image from "next/image";
import { useState } from "react"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"

export default function Home() {
  const [active, setActive] = useState(0)

  const data = [
    {
      label: 'Mẫu thiết kế'
    },
    {
      label: 'Nón bảo hiểm lưỡi trai',
    },
    {
      label: 'Nón bảo hiểm 3/4 đầu'
    },
    {
      label: 'Nón bảo hiểm có kính'
    },
    {
      label: 'Nón bảo hiểm trẻ em',
    },
    {
      label: 'Vỏ nón bảo hiểm (gáo)'
    },
    {
      label: 'Xốp ốp nón bảo hiểm'
    },
  ];

  return (
    <>
      <div className="container grid grid-cols-12 pt-5 gap-5">
        <div className='col-span-2'>
          <h5 className='font-bold text-lg'>Danh mục sản phẩm</h5>
          {data.map((item, index) => (
            <NavLink
              href="#required-for-focus"
              key={item.label}
              active={index === active}
              label={item.label}
              // description={item.description}
              // rightSection={item.rightSection}
              // leftSection={<item.icon size={16} stroke={1.5} />}
              onClick={() => setActive(index)}
              color="green"
            />
          ))}
        </div>

        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          className='col-span-10'
        >
          <Image src='/banner.jpg' alt="banner" width={1000} height={1000} />
          <Image src='/banner.jpg' alt="banner" width={1000} height={1000} />
        </Carousel>
      </div>
    </>
  )
}
