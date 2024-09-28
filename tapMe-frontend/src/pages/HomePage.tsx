// import React, { useState } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import Button from '../components/Button';
import CoinBalance from '../components/CoinBalance';

const GET_USER = gql`
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      coins
    }
  }
`;

const ADD_COINS = gql`
  mutation AddCoins($id: ID!, $coins: Int!) {
    addCoins(id: $id, coins: $coins) {
      id
      coins
    }
  }
`;

const HomePage: React.FC = () => {
  const userId = 'user-id'; 
  const { data, loading, error } = useQuery(GET_USER, { variables: { id: userId } });
  const [addCoins] = useMutation(ADD_COINS);

  const handleTap = () => {
    if (data) {
      addCoins({ variables: { id: userId, coins: data.getUser.coins + 1 } });
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className='bg-blue-500'>Error123: {error.message}</p>;

  return (
    <div className="container mx-auto text-center p-4">
      <CoinBalance coins={data.getUser.coins} />
      <Button onTap={handleTap} />
    </div>
  );
};

export default HomePage;
