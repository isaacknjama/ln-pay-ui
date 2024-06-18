import {
  Card,
  CardBody,
  CardHeader,
  Center,
  Spinner,
  Text,
} from '@chakra-ui/react';
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

  return (
    <Card w='70%' margin='auto' top={8}>
      <CardHeader>
        <Text
          as='h1'
          fontWeight='bold'
          textAlign='center'
          textDecoration='underline'
        >
          Account details
        </Text>
      </CardHeader>
      <CardBody>
        <Text fontWeight='bold'>Account ID: {accountDetails.id}</Text>
        <Text fontWeight='bold'>User ID: {accountDetails.userId}</Text>
        <Text fontWeight='bold'>Account Name: {accountDetails.name}</Text>
        <Text fontWeight='bold'>Balance: {accountDetails.balance}</Text>
      </CardBody>
    </Card>
  );
};
