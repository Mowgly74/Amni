import React, { useState } from 'react';
import { ShoppingCart, Heart, CreditCard, Check, Star } from 'lucide-react';
import style from './Store.module.css';
import Subscription from '../Subscription/Subscription';



const storeItems = [
  {
    id: 1,
    name: 'Amni Smart Wristband',
    description: 'Advanced medical emergency wristband with one-touch alert button. Waterproof, durable, and designed for 24/7 wear.',
    price: 299,
    currency: 'EGP',
    image: 'https://via.placeholder.com/300x300?text=Smart+Wristband',
    features: [
      'Emergency alert button',
      'QR code access',
      'Waterproof design',
      'Long battery life',
      'Comfortable fit'
    ],
    inStock: true
  },{
    id: 2,
    name: 'Amni Smart Wristband',
    description: 'Advanced medical emergency wristband with one-touch alert button. Waterproof, durable, and designed for 24/7 wear.',
    price: 299,
    currency: 'EGP',
    image: 'https://via.placeholder.com/300x300?text=Smart+Wristband',
    features: [
      'Emergency alert button',
      'QR code access',
      'Waterproof design',
      'Long battery life',
      'Comfortable fit'
    ],
    inStock: true
  },{
    id: 3,
    name: 'Amni Smart Wristband',
    description: 'Advanced medical emergency wristband with one-touch alert button. Waterproof, durable, and designed for 24/7 wear.',
    price: 299,
    currency: 'EGP',
    image: 'https://via.placeholder.com/300x300?text=Smart+Wristband',
    features: [
      'Emergency alert button',
      'QR code access',
      'Waterproof design',
      'Long battery life',
      'Comfortable fit'
    ],
    inStock: true
  },{
    id: 4,
    name: 'Amni Smart Wristband',
    description: 'Advanced medical emergency wristband with one-touch alert button. Waterproof, durable, and designed for 24/7 wear.',
    price: 299,
    currency: 'EGP',
    image: 'https://via.placeholder.com/300x300?text=Smart+Wristband',
    features: [
      'Emergency alert button',
      'QR code access',
      'Waterproof design',
      'Long battery life',
      'Comfortable fit'
    ],
    inStock: true
  }
];

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

export default function Store() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item.name} added to cart!`);
  };

  return (
    <div className={style.storeContainer}>
      <div className={style.header}>
        <h1 className={style.title}>Amni Store</h1>
        <p className={style.subtitle}>Protect your health with our products and services</p>
      </div>

      {/* Smart Wristbands Section */}
      <section className={style.section}>
        <h2 className={style.sectionTitle}>Smart Wristbands</h2>
        <div className={style.itemsGrid}>
          {storeItems.map(item => (
            <div key={item.id} className={style.itemCard}>
              <div className={style.itemImageContainer}>
                <img src={item.image} alt={item.name} className={style.itemImage} />
                {!item.inStock && (
                  <div className={style.outOfStock}>Out of Stock</div>
                )}
              </div>
              <div className={style.itemContent}>
                <h3 className={style.itemName}>{item.name}</h3>
                <p className={style.itemDescription}>{item.description}</p>
                <ul className={style.featuresList}>
                  {item.features.map((feature, idx) => (
                    <li key={idx} className={style.featureItem}>
                      <Check className={style.checkIcon} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className={style.itemFooter}>
                  <div className={style.price}>
                    <span className={style.priceAmount}>{item.price}</span>
                    <span className={style.priceCurrency}>{item.currency}</span>
                  </div>
                  <button
                    onClick={() => addToCart(item)}
                    className={style.addToCartButton}
                    disabled={!item.inStock}
                  >
                    <ShoppingCart className={style.cartIcon} />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Subscriptions Section */}
      <Subscription/>
    </div>
  );
}

