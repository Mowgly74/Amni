import React from 'react'
import style from"./Subscription.module.css"
import { ShoppingCart, Heart, CreditCard, Check, Star } from 'lucide-react';





export default function Subscription() {
  const subscriptions = [
  {
    id: 1,
    name: 'Basic Subscription',
    price: 99,
    currency: 'EGP',
    period: 'month',
    features: [
      'Access to partner hospitals',
      '10% discount on medical services',
      'Priority support',
      'Monthly health reports'
    ],
    popular: false
  },
  {
    id: 2,
    name: 'Premium Subscription',
    price: 199,
    currency: 'EGP',
    period: 'month',
    features: [
      'Access to all partner hospitals',
      '20% discount on medical services',
      '24/7 priority support',
      'Weekly health reports',
      'AI-powered health insights',
      'Free annual health checkup'
    ],
    popular: true
  },
  {
    id: 3,
    name: 'Family Subscription',
    price: 399,
    currency: 'EGP',
    period: 'month',
    features: [
      'Up to 5 family members',
      'Access to all partner hospitals',
      '25% discount on medical services',
      '24/7 priority support',
      'Individual health reports',
      'AI-powered health insights',
      'Free annual health checkups for all members'
    ],
    popular: false
  }
];
  return <>
    
    <section className={style.section +" bg-red-50 pt-5 pb-10"}>
        <h2 className={style.sectionTitle}>Subscriptions</h2>
        <p className={style.sectionDescription}>
          Get exclusive discounts and benefits from our partner hospitals, medical centers, and contracted doctors.
        </p>
        <div className={style.subscriptionsGrid}>
          {subscriptions.map(subscription => (
            <div
              key={subscription.id}
              className={`${style.subscriptionCard} ${subscription.popular ? style.popularCard : ''}`}
            >
              {subscription.popular && (
                <div className={style.popularBadge}>
                  <Star className={style.starIcon} />
                  Most Popular
                </div>
              )}
              <h3 className={style.subscriptionName}>{subscription.name}</h3>
              <div className={style.subscriptionPrice}>
                <span className={style.priceAmount}>{subscription.price}</span>
                <span className={style.priceCurrency}>{subscription.currency}</span>
                <span className={style.pricePeriod}>/{subscription.period}</span>
              </div>
              <ul className={style.subscriptionFeatures}>
                {subscription.features.map((feature, idx) => (
                  <li key={idx} className={style.subscriptionFeature}>
                    <Check className={style.checkIcon} />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => addToCart(subscription)}
                className={`${style.subscribeButton} ${subscription.popular ? style.popularButton : ''}`}
              >
                <CreditCard className={style.cardIcon} />
                Subscribe Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className={style.benefitsSection}>
        <h2 className={style.sectionTitle}>Subscription Benefits</h2>
        <div className={style.benefitsGrid}>
          <div className={style.benefitCard}>
            <Heart className={style.benefitIcon} />
            <h3 className={style.benefitTitle}>Partner Hospitals</h3>
            <p className={style.benefitDescription}>
              Access to a network of trusted hospitals across Egypt with exclusive discounts
            </p>
          </div>
          <div className={style.benefitCard}>
            <Heart className={style.benefitIcon} />
            <h3 className={style.benefitTitle}>Medical Centers</h3>
            <p className={style.benefitDescription}>
              Special rates at partner medical centers for consultations and procedures
            </p>
          </div>
          <div className={style.benefitCard}>
            <Heart className={style.benefitIcon} />
            <h3 className={style.benefitTitle}>Contracted Doctors</h3>
            <p className={style.benefitDescription}>
              Discounted rates with our network of qualified medical professionals
            </p>
          </div>
        </div>
      </section>
    
    </>
  
}
