import Image from 'next/image'
import styles from '@/components/PricingCards/PricingCards.module.css' 
import Spline from '@splinetool/react-spline';

export default function PricingCards() {

  return (
    <main className={`flex flex-col items-center min-h-screen mt-32`}>
        <h1 className={`${styles.card_title} ${styles.header} text-3xl mb-10`}>Explore your options and choose the perfect plan for you!</h1>
        <div className={`${styles.container} flex items-center`}>
            <div className={`${styles.card_container} p-20 border-2 rounded-xl`}>
                <Spline scene="https://prod.spline.design/15CBUvmvKj2lrwuP/scene.splinecode" />
                <div>
                    <h1 className={`${styles.card_title} text-2xl mb-5`}>Solo Traveler Plan</h1>
                    <div className={`flex flex-col gap-1`}>
                        <p>• Ai Itinerary Builder</p>
                        <p>• Onboarding Quiz</p>
                        <p>• Budget Tracking</p>
                        <h1 className={`${styles.card_title} text-2xl mt-5`}>Free</h1>
                    </div>
                </div>
                <button className={`pt-3 pb-3 pl-8 pr-8 rounded-xl mt-10`}>Sign Up</button>
            </div>
            <div className={`${styles.card_container} p-20`}>
                <Spline scene="https://prod.spline.design/smGNeC70OYxVjePR/scene.splinecode" />
                <div>
                    <h1 className={`${styles.card_title} text-2xl mb-5`}>Family Plan</h1>
                    <div>
                        <p>• Ai Itinerary Builder</p>
                        <p>• Onboarding Quiz</p>
                        <p>• Budget Tracking</p>
                        <p>• Shared Itinerary Collaboration</p>
                        <h1 className={`${styles.card_title} text-2xl mt-5`}>$5</h1>
                    </div>
                    <button className={`pt-3 pb-3 pl-8 pr-8 rounded-xl mt-10`}>Sign Up</button>
                </div>
            </div>
            <div className={`${styles.card_container} p-20`}>
                <Spline scene="https://prod.spline.design/DXxTo8qkfGx217iy/scene.splinecode" />
                <div>
                    <h1 className={`${styles.card_title} text-2xl mb-5`}>Business Traveler Plan</h1>
                    <div>
                        <p>• Ai Itinerary Builder</p>
                        <p>• Onboarding Quiz</p>
                        <p>• Budget Tracking</p>
                        <p>• Shared Itinerary Collaboration</p>
                        <p>• Expense Reports for Reimbursement</p>
                        <h1 className={`${styles.card_title} text-2xl mt-5`}>$10</h1>
                    </div>
                    <button className={`pt-3 pb-3 pl-8 pr-8 rounded-xl mt-10`}>Sign Up</button>
                </div>
            </div>
        </div>
    </main>
  )
}