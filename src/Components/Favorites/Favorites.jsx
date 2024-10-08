

import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Container, Row, Col, Card, Form, Button, Image, FormControl } from 'react-bootstrap';
import firstlistingimage from '../../assets/firstlistingimage.png';
import pencil from '../../assets/pencil.png'; 
import secondcardlisting from '../../assets/secondcardlisting.png';
import thirdcardlisting from '../../assets/thirdcardlisting.png';
import fourthcardlisting from '../../assets/fourthcardlisting.png';
import fifthcardlisting from '../../assets/fifthcardlisting.png';
import sixthcardlisting from '../../assets/sixthcardlisting.png';
import bath from '../../assets/bath.png';
import bed from '../../assets/bed.png';
import room from '../../assets/room.png';
import sqft from '../../assets/sqft.png';
import Search from '../../assets/Search.png';
import dropdown from '../../assets/dropdown.png';
import sorry from '../../assets/sorry.png';
import bell from "../../assets/bell.png";
import profile from '../../assets/profile.png';
import searchlight from '../../assets/searchlight.png';
import "./Favorites.css"; 
import Animation from '../Animation';
import Head from '../Head'; 
import CustomNavbar from '../CustomNavbar/CustomNavbar';

const listingsContainerOne = [
  {
    price: '$148,000',
    address: 'Block 45, Rockvale manors, Apo, Abuja',
    bed: '3 Beds',
    room: '2 Rooms',
    bath: '2 Baths',
    sqft: '150sqft',
    image: firstlistingimage,
  },
  {
    price: '$148,000',
    address: 'Block 45, Rockvale manors, Apo, Abuja',
    bed: '3 Beds',
    room: '2 Rooms',
    bath: '2 Baths',
    sqft: '150sqft',
    image: secondcardlisting,
  },
  {
    price: '$148,000',
    address: 'Block 45, Rockvale manors, Apo, Abuja',
    bed: '3 Beds',
    room: '2 Rooms',
    bath: '2 Baths',
    sqft: '150sqft',
    image: thirdcardlisting,
  },
  {
    price: '$148,000',
    address: 'Block 45, Rockvale manors, Apo, Abuja',
    bed: '3 Beds',
    room: '2 Rooms',
    bath: '2 Baths',
    sqft: '150sqft',
    image: fourthcardlisting,
  },
  {
    price: '$148,000',
    address: 'Block 45, Rockvale manors, Apo, Abuja',
    bed: '3 Beds',
    room: '2 Rooms',
    bath: '2 Baths',
    sqft: '150sqft',
    image: fifthcardlisting,
  },
  {
    price: '$148,000',
    address: 'Block 45, Rockvale manors, Apo, Abuja',
    bed: '3 Beds',
    room: '2 Rooms',
    bath: '2 Baths',
    sqft: '150sqft',
    image: sixthcardlisting,
  }
];



const Favorites = () => {
  const [showIcon, setShowIcon] = useState(true);
  const [currentView, setCurrentView] = useState('Approved');

  const handleFocus = () => {
    setShowIcon(false);
  };

  const handleBlur = () => {
    setShowIcon(true);
  };

  const [selectedAction, setSelectedAction] = useState({
    forSale: 'For sale',
    price: 'Price',
    bedsBath: 'Beds & Bath',
    homeType: 'Home Type',
    more: 'More',
  });

  const handleSelect = (category, action) => {
    setSelectedAction(prevState => ({
      ...prevState,
      [category]: action
    }));
  };

  const currentListings = currentView === 'Approved' ? listingsContainerOne : unapprovedListings;

  return (
    <div style={{ marginTop: "-1px", marginBottom: "180px" }}>
     

      {/* Mobile Navbar with Profile Image and Bell Icon */}
      <div className="d-block d-md-none bg-white" style={{ height: "62px", width: "400px", marginLeft: "-30px" }}>
        <Container className="p-3 d-flex align-items-center" style={{ position: 'relative', marginLeft: "10px" }}>
          <h3 className="flex-grow-1 mt-1" style={{marginLeft:"70px", color:"#FF7B29", fontFamily:"Syne", fontWeight:"700", fontSize:"22px"}}>RealHomes</h3>
          {/* Bell Icon */}
          <Image src={bell} style={{ width: "20px", height: "20px", marginRight: "10px" }} />
          {/* Profile Image */}
          <Image src={profile} roundedCircle style={{ width: "40px", height: "40px", marginRight: "35px" }} />
        </Container>
      </div>

      {/* Desktop Navbar with Head Component */}
      <div className="container d-none d-md-block">
        <Container className="p-3" style={{ position: 'relative', marginLeft:"-30px" }}>
          <Head bellIcon={bell} profileImage={profile} />
        </Container>
      </div>

      <div className="container">
      <div className="d-flex flex-column align-items-end mt-4">
  <Form inline className="mt-2 mx-4 search search-form search-form-mobile d-flex align-items-center" style={{maxWidth:"400px"}}>
    <FormControl type="text" placeholder="Search" className="search-input" />
    <Image src={searchlight} className="ml-2" />
  </Form>
      </div>
     </div>


      <div className="container me-4">
        <h3 className='my-listing mx-3 mt-3'>Favorites</h3>

        <div className="filters-container mt-2">
          {/* search */}
          <div className="position-relative search-container">
            {showIcon && <img src={Search} alt="searchicon" className="search-icon" />}
            <Form.Control
              className="custom-input pl-5"
              placeholder="Search city, neighborhood, zip address"
              aria-label="Search"
              onFocus={handleFocus}
              onBlur={handleBlur}
              
            />
          </div>

          <CustomNavbar />

          {/* dropdowns */}
          <div className="dropdowns-wrapper">
            <div className='dropdown-container px-3'>
              <div className='dropdown-item-wrapper bg-white p-1 rounded-4'>
                <Dropdown onSelect={(e) => handleSelect('forSale', e)}>
                  <Dropdown.Toggle variant="white" id="dropdown-basic">
                    {selectedAction.forSale}
                    <img src={dropdown} alt="dropdown" style={{ marginLeft: '8px' }} />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item  eventKey="Action">Action</Dropdown.Item>
                    <Dropdown.Item  eventKey="Another action">Another action</Dropdown.Item>
                    <Dropdown.Item  eventKey="Something else">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              <div className='dropdown-item-wrapper bg-white p-1 rounded-4'>
                <Dropdown onSelect={(e) => handleSelect('price', e)}>
                  <Dropdown.Toggle variant="white" id="dropdown-basic">
                    {selectedAction.price}
                    <img src={dropdown} alt="dropdown" style={{ marginLeft: '8px' }} />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="Action">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="Another action">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="Something else">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              <div className='dropdown-item-wrapper bg-white p-1 rounded-4'>
                <Dropdown onSelect={(e) => handleSelect('bedsBath', e)}>
                  <Dropdown.Toggle variant="white" id="dropdown-basic">
                    {selectedAction.bedsBath}
                    <img src={dropdown} alt="dropdown" style={{ marginLeft: '8px' }} />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="Action">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="Another action">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="Something else">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              <div className='dropdown-item-wrapper bg-white p-1 rounded-4'>
                <Dropdown onSelect={(e) => handleSelect('homeType', e)}>
                  <Dropdown.Toggle variant="white" id="dropdown-basic">
                    {selectedAction.homeType}
                    <img src={dropdown} alt="dropdown" style={{ marginLeft: '8px' }} />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="Action">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="Another action">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="Something else">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              <div className='dropdown-item-wrapper bg-white p-1 rounded-4'>
                <Dropdown onSelect={(e) => handleSelect('more', e)}>
                  <Dropdown.Toggle variant="white" id="dropdown-basic">
                    {selectedAction.more}
                    <img src={dropdown} alt="dropdown" style={{ marginLeft: '8px' }} />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="Action">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="Another action">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="Something else">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
             {/* Apply Filter Button */}
             <Button className="border-0 p-3 rounded-5" style={{background:"#FF7B29"}}>Apply Filter</Button>
            </div>
          </div>
        </div>

     

        <Container>
          <Row>
            {currentListings.map((listing, index) => (
              <Col key={index} xs={12} md={4}>
                <Card className="listing-card mt-4 border-0">
                  <div style={{ position: 'relative' }}>
                    <Card.Img variant="top" src={listing.image} style={{ position: 'relative' }} />
                    <Button 
                      className="action-button rounded-4" 
                      style={{ 
                        position: 'absolute', 
                        top: '10px', 
                        left: '10px', 
                        backgroundColor: currentView === 'Approved' ? '#FF8844' : '#404040', 
                        color: 'white',
                        border: 'none',
                        fontSize:"14px"
                      }}>
                      {currentView === 'Approved' ? 'SELL' : 'UNAPPROVED'}
                    </Button>
                  </div>
                  <Card.Body style={{background:"#f6f7f8"}}>
                    <Card.Title className='listing-price'>{listing.price}</Card.Title>
                    <p className='listing-text'>{listing.address}</p>
                    <div className="listing-details d-flex justify-content-between">
                      <div><img src={bed} alt="bed" />{listing.bed}</div>
                      <div><img src={room} alt="room" />{listing.room}</div>
                      <div><img src={bath} alt="bath" />{listing.bath}</div>
                      <div><img src={sqft} alt="sqft" />{listing.sqft}</div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Favorites;
