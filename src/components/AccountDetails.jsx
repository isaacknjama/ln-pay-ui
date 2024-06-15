import { useState, useEffect } from 'react';

export const AccountDetails = () => {
  const [accountDetails, setAccountDetails] = useState(null);

  useEffect(() => {
    const fetchAccountDetails = async () => {
      try {
        const response = await fetch(
          'http://localhost:3001/get-account-details',
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        setAccountDetails(data);
      } catch (error) {
        console.error('Error fetching account details:', error);
      }
    };

    fetchAccountDetails();
  }, []);

  if (!accountDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Account Details</h2>
      <p>Account ID: {accountDetails.id}</p>
      <p>User ID: {accountDetails.userId}</p>
      <p>Account Name: {accountDetails.name}</p>
      <p>Balance: {accountDetails.balance}</p>
    </div>
  );
};
