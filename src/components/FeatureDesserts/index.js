import React from 'react';
import { FeatureDessertsContainer, FeatureDessertsButton } from './FeatureDessertsElements';

const FeatureDesserts = () => {
  return (
    <FeatureDessertsContainer>
      <h1>Dessert of the Day</h1>
      <p>Truffle alfredo sauce topped with  dust.</p>
      <FeatureDessertsButton>Order Now</FeatureDessertsButton>
    </FeatureDessertsContainer>
  );
};

export default FeatureDesserts;