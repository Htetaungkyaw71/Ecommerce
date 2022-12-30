import { loadStripe } from '@stripe/stripe-js';

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe('pk_test_51MKZGLHAFdrUYHeghGpMnp40utbYRcOQQ0oqZ3UbtT23MDzDLFZpjlQ81J8E5IrHw4oQrAB7d4oNWOiFw9j4S4oF00xHzEXijw');
  }
  return stripePromise;
};

export default getStripe;