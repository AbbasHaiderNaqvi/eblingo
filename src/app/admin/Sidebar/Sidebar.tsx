import Link from 'next/link'
import styles from '../Sidebar/Sidebar.module.css'
import React from 'react'
import Image from 'next/image'
import { usePathname  } from 'next/navigation';


function Sidebar() {
  const pathname = usePathname()
  return (
    <>
       <nav className={styles.navbar}>
       <Image
          src='/assets/Home/logo1.png'
          alt='Logo'
          width={150}
          height={70}
          className={styles.logo}
        />
      <ul className={styles.list}>
        <li className={pathname === '/admin/dashboard/queries' ? styles.active : ''}>
          <Link href='./queries'>Contact Us</Link>
        </li>
        <li className={pathname === '/admin/dashboard/quotation' ? styles.active : ''}>
          <Link href='./quotation'>Get a quote</Link>
        </li>
        <li className={pathname === '/admin/dashboard/newsletter-applicant' ? styles.active : ''}>
          <Link href='./newsletter-applicant'>NewsLetter</Link>
        </li>
        <li className={pathname === '/admin/dashboard/blog' ? styles.active : ''}>
          <Link href='./blog' >Blogs</Link>
        </li>
      </ul>
    </nav>
    </>
  )
}

export default Sidebar