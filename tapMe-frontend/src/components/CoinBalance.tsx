import React from 'react';

interface CoinBalanceProps {
  coins: number;
}

const CoinBalance: React.FC<CoinBalanceProps> = ({ coins }) => {
  return (
    <div className="text-2xl mb-4">
      Coin Balance: {coins}
    </div>
  );
};

export default CoinBalance;
