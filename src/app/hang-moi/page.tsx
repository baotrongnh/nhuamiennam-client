import Head from 'next/head'
import React from 'react'

export const metadata = { 
  title: 'Hàng Mới Về'
}

export default function page() {
  return (
    <>
      <Head>
        <title>Tiêu đề mặc định</title>
        <meta name="description" content="Mô tả trang web của bạn" />
      </Head>

      <h1>Hi</h1>
    </>
  )
}
