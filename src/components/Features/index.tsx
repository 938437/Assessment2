import Image from 'next/image'
import styles from '@/components/Features/Features.module.css' 
import Spline from '@splinetool/react-spline';

export default function Features() {

  return (
    <main className={`flex flex-col items-center min-h-screen mt-32`}>
        <h1 className={`${styles.header} text-2xl`}>Explore our features</h1>
        <Image
          src={"/images/arrowDown.svg"}
          height={50}
          width={50}
          alt="arrow"
        />
        <div className={`flex flex-col items-center justify-center gap-28 mt-20`}>
          <div className={`${styles.feature_container} flex gap-20`}>
            <div className={`${styles.feature} flex flex-col justify-center items-start`}>
              <h1 className={`text-xl mb-5`}>Ai Itinerary Builder</h1>
              <p className={`mb-3`}>• Utilizing the OpenAi API, Orbit builds travelling itineraries<br/> based on the user's inputs during the onboarding process.</p>
              <p>• Spin the wheel to add activities to your list.</p>
              <button className={`pt-3 pb-3 pl-8 pr-8 rounded-xl mt-10`}>Sign Up</button>
            </div>
            <Image
              src={"/images/openAI.png"}
              height={200}
              width={200}
              alt="openAI" 
              className={styles.image}
            />
          </div>
          <div className={`${styles.feature_container} flex gap-20`}>
            <Image
              src={"/images/map.png"}
              height={200}
              width={200}
              alt="map"
              className={styles.image}
            />
            <div className={`${styles.feature} flex flex-col justify-center items-end text-right`}>
              <h1 className={`text-xl mb-5`}>Onboarding Quiz</h1>
              <p className={`mb-3`}>• Get personalized trip suggestions curated just for you, <br/>based on your preferences and interests</p>
              <p className={`mb-3`}>• Select from a variety of transportation options, <br/>whether it's by plane, train, car, or bus, to suit your travel style and needs.</p>
              <p>• Define your spending limits and financial parameters to ensure<br/> your trip stays within budget and meets your financial goals.</p>
              <button className={`pt-3 pb-3 pl-8 pr-8 rounded-xl mt-10`}>Sign Up</button>
            </div>
          </div>
          <div className={`${styles.feature_container} flex  gap-10`}>
            <div className={`${styles.feature}`}>
              <h1 className={`text-xl mb-5`}>Budget Tracking</h1>
              <p className={`mb-3`}>• Track all the expenses in your itinerary and see how the costs are being divided</p>
              <p>• Add or remove budgets for activities that don't apply to your itinerary.</p>
              <button className={`pt-3 pb-3 pl-8 pr-8 rounded-xl mt-10`}>Sign Up</button>
            </div> 
            <Image
              src={"/images/piggyBank.png"}
              height={200}
              width={200}
              alt="piggyBank"
              className={styles.image}
            />
          </div>
        </div>
    </main>
  )
}