import Footer from '@/components/common/footer'
import Header from '@/components/common/header'
import React from 'react'

export default function PublicLayout({ children }: { children: React.ReactElement }) {
     return (
          <>
               <Header />
               {children}
               <Footer />
          </>
     )
}
