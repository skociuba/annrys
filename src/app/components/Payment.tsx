import React from 'react';

import {paymentContent} from '../constants';

import PaymentComponent from './CvSubcomponents/Payment';

const Payment: React.FC = () => (
  <section
    id="payment"
    className="mb-5 min-h-[100vh] flex-col pt-[15vh] lg:m-[5%]">
    <PaymentComponent content={paymentContent} />
  </section>
);

export default Payment;
