import Image from 'next/image'
import styles from '@/components/Header/Header.module.css' 

export default function Header() {

  return (
    <main className={`flex items-center gap-5`}>
      <Image
        src={"/images/logo.svg"}
        height={55}
        width={50}
        alt="logo"
      />
      <p className={`${styles.orbit} text-xl`}>Orbit.</p>
    </main>
  )
}