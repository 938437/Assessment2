import Image from 'next/image'
import styles from '@/components/Newsletter/Newsletter.module.css' 
import Spline from '@splinetool/react-spline';

export default function Newsletter() {

  return (
    <main className={`${styles.container} flex flex-col items-center mt-20 border rounded-xl bg-blue-50 p-16`}>
        <h1 className={`text-3xl`}>Subscribe to our newsletter</h1>
        <p className={`mt-5`}>Subscribe to our newsletter to stay in the loop with all the latest updates, tips, and insider insights from Orbit.</p>
        <p>Don't miss out on exclusive offers and exciting announcements-join us on this journey today!</p>
        <button className={`pt-3 pb-3 pl-8 pr-8 rounded-xl mt-10`}>Sign Up</button>
    </main>
  )
}