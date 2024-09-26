import React from 'react';
import { Row, Col, Card, Typography, Spin } from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const { Text, Title } = Typography;

const News = ({ simplified }) => {
    const count = simplified ? 10 : 50;

  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery();
  const filteredData = cryptoNews?.data?.slice(0, count);


  if (isFetching) {
    return (
      <div className="loading-container">
        <Spin size="large" />
      </div>
    );
  }

  

  return (
    <Row gutter={[24, 24]}>
      {filteredData.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <a href={news.url} target='_blank' rel="noreferrer">
            <Card hoverable className='news-card'>
              <div className='news-image-container'>
                <img
                  src={news.thumbnail || 'https://via.placeholder.com/160'}
                  alt={news.title}
                  className='news-image'
                  style={{ objectFit: 'cover', height: '200px' }} 
                />
              </div>
              <div className='news-text'>
                <Title className='news-title' level={4}>{news.title}</Title>
                <p>{news.description}</p>
                <div className='provider-container'>
                  <Text type='secondary'>{moment(news.createdAt).startOf('ss').fromNow()}</Text>
                </div>
              </div>
            </Card>
          </a>
        </Col>
      ))}
    </Row>
  );
};

export default News;
