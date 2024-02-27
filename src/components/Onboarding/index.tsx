import Image from 'next/image'
import styles from '@/components/Onboarding/onboarding.module.css' 
import Spline from '@splinetool/react-spline';

export default function Onboarding() {

  return (
    <main className={`flex flex-col items-center mt-40 min-h-screen `}>
        <div className={`${styles.animation_container} flex pl-40`}>
            <div className={`${styles.container}`}>
                <h1 className={`text-5xl mb-10`}>Explore the World with Orbit!</h1>
                <p className={`w-4/5`}>Orbit, your AI-powered travel companion! Seamlessly plan adventures with personalized itineraries and smart spending insights— conveniently in your grasp.</p>
                <button className={`pt-3 pb-3 pl-8 pr-8 rounded-xl mt-10`}>Sign Up</button>
            </div>
            <Spline scene="https://prod.spline.design/8ri4y4rg7RAfeB8v/scene.splinecode" />
        </div>
        <div className={`${styles.container} flex items-center justify-center mt-36 pl-20 pr-20`}>
            <Image
                src={"/images/logo_3d.png"}
                height={250}
                width={250}
                alt="openAI"
            />
            <div className={` ${styles.intro_container}flex flex-col items-center justify-center`}>
                <h1 className={`text-2xl mb-5`}>Why Orbit?</h1>
                <p className={`mb-5`}>Meet Orbit, where your travel dreams take flight with the power of AI. Our Itinerary Builder, fueled by the OpenAI API,<span/> customizes your journey from the get-go, ensuring every moment is tailored to your preferences. Spin the wheel<span/> to effortlessly add activities, creating a seamless roadmap for your adventure.</p>
                <p>Stay on top of your spending with Orbit's Budget Tracking feature. Easily monitor expenses and adjust budgets for<span/> activities on the fly, giving you full control over your financial plan. Plus, our Onboarding Quiz delivers tailored trip <span/>suggestions, letting you choose transportation methods and set budgets for a truly personalized experience. <span/>Say hello to stress-free travel planning with Orbit.</p>
            </div>
        </div>
    </main>
  )
}