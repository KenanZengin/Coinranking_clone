import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss'

import { Montserrat } from 'next/font/google'
import Header from '../backbones/header'
import Footer from '@/backbones/footer';

const montserrat = Montserrat({ 
  subsets: ['latin'],
})



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
