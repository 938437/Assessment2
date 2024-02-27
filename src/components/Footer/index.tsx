import Image from 'next/image'
import styles from '@/components/Footer/Footer.module.css' 
import Spline from '@splinetool/react-spline';

export default function Footer() {

  return (
    <main className={`flex flex-col items-center gap-5 mt-20 pt-10 pb-5 border w-screen`}>
        <div className={`flex items-center gap-5 mb-8`}>
            <Image
                src={"/images/logo.svg"}
                height={55}
                width={50}
                alt="logo"
            />
            <p className={`${styles.orbit} text-xl`}>Orbit.</p>
        </div>
        <Image
            src={"/images/social_medias.svg"}
            height={300}
            width={150}
            alt="icons"
        />
        <div className={`flex gap-2 mt-10`}>
            <Image
                src={"/images/copyright.svg"}
                height={18}
                width={18}
                alt="copyright"
            />
            <p>Orbit. 2024</p>
        </div>
    </main>
  )
}