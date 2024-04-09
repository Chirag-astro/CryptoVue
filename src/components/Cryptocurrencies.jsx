import React, { useState, useEffect } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Spin,Input } from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi';

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // setCryptos(cryptosList?.data?.coins);
    const filteredData = cryptosList?.data?.coins.filter((item)=>item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setCryptos(filteredData);
  }, [cryptosList,searchTerm])
  

  
  if (isFetching) {
    return (
      <div className="loading-container">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <>
    {!simplified && (
      <div className="search-crypto">
      <Input placeholder="Seacrh Cryptocurrency" onChange={(e)=> setSearchTerm(e.target.value.toLowerCase())} />
    </div>
    )}
    
    <Row gutter={[32, 32]} className='crypto-card-container'>
      {cryptos?.map((currency) => (
        <Col xs={24} sm={12} lg={6} key={currency.uuid}>
          <Link to={`/crypto/${currency.uuid}`}>
            <Card
              className='crypto-card'
              hoverable
              cover={<img className='crypto-image' src={currency.iconUrl} alt={currency.name} />}
            >
              <Card.Meta
                title={`${currency.rank}. ${currency.name}`}
                description={`Price: ${millify(currency.price)} | Market Cap: ${millify(currency.marketCap)}`}
              />
              <div className='crypto-footer'>
                <p>Daily Change: {millify(currency.change)}</p>
              </div>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
    </>
  );
};

export default Cryptocurrencies;
