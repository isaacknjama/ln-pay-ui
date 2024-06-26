import { Center, Spinner } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export const Receive = () => {
  const [invoice, setInvoice] = useState();

  useEffect(() => {
    const fetchInvoice = async () => {
      try {
        const response = await fetch('http://localhost:3001/pay-invoice', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data);
        setInvoice(data);
      } catch (err) {
        console.error('Error fetching invoice: ', err);
      }
    };

    fetchInvoice();
  }, []);

  if (!invoice) {
    return (
      <Center>
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        />
      </Center>
    );
  }

  return <div></div>;
};
