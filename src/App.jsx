



// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
// import Sidebar from './Components/Sidebar/Sidebar';
// import Dashb from './Components/Dash/Dashb';
// import Activities from './Components/Activity/Activities';
// import Security from "./Components/Security/Security";
// import MyListing from './Components/MyListing/MyListing';
// import AccountSettings from './Components/AccountingSettings/AccountingSettings';
// import Favorites from './Components/Favorites/Favorites';
// import SavedProfile from './Components/SavedProfile/SavedProfile';
// import Logout from './Components/Logout/Logout';
// import Login from './Components/Login/Login';
// import Loader from './Components/Loader/Loader';
// import './App.css'; 
// import ham from "./assets/ham.png";

// const App = () => {
//   const [isSidebarVisible, setSidebarVisible] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     // Show loader for a brief moment when route changes
//     setLoading(true);
//     const timer = setTimeout(() => setLoading(false), 1000); // Adjust the delay as needed
//     return () => clearTimeout(timer);
//   }, [location.pathname]);

//   useEffect(() => {
//     // Check localStorage for authentication
//     const storedAuthStatus = localStorage.getItem('isAuthenticated');
//     if (storedAuthStatus === 'true') {
//       setIsAuthenticated(true);
//     }
//   }, []);

//   const handleSidebarToggle = () => {
//     setSidebarVisible(!isSidebarVisible);
//   };

//   const handleItemClick = (path) => {
//     setSidebarVisible(false);
//     navigate(path); // Navigate to the clicked page
//   };

//   const handleLoginSuccess = () => {
//     localStorage.setItem('isAuthenticated', 'true');
//     setIsAuthenticated(true);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('isAuthenticated');
//     setIsAuthenticated(false);
//   };

//   return (
//     <>
//       {loading && <Loader />} {/* Display loader when loading */}
//       <Container fluid className={`app-container ${loading ? 'loading' : ''}`}>
//         <Button 
//           className="toggle-sidebar-button d-md-none border-0 bg-white" 
//           style={{ background: "darkorange" }} 
//           onClick={handleSidebarToggle}
//         >
//           {isSidebarVisible ? 'X' : <img src={ham} alt="menu" />}
//         </Button>
//         <Row className="gx-0"> {/* Added gx-0 class to remove horizontal gutters */}
//           {isAuthenticated && (
//             <Col xs={12} md={2} className={`sidebar-column ${isSidebarVisible ? 'sidebar-visible' : 'sidebar-hidden'} d-md-block`}>
//               <Sidebar setSidebarVisible={setSidebarVisible} handleItemClick={handleItemClick} />
//             </Col>
//           )}
//           <Col xs={12} md={isAuthenticated ? 10 : 12} className="bg-light content-area">
//             <Routes>
//               {!isAuthenticated ? (
//                 <Route path="*" element={<Login onLoginSuccess={handleLoginSuccess} />} />
//               ) : (
//                 <>
//                   <Route path="/dashboard" element={<Dashb />} />
//                   <Route path="/activities" element={<Activities />} />
//                   <Route path="/my-listing" element={<MyListing />} />
//                   <Route path="/favorites" element={<Favorites />} />
//                   <Route path="/saved-profile" element={<SavedProfile />} />
//                   <Route path="/account-settings" element={<AccountSettings />} />
//                   <Route path="/security" element={<Security />} />
//                   <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
//                   <Route path="*" element={<Navigate to="/dashboard" />} />
//                 </>
//               )}
//             </Routes>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default App;




// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
// import Sidebar from './Components/Sidebar/Sidebar';
// import Dashb from './Components/Dash/Dashb';
// import Activities from './Components/Activity/Activities';
// import Security from "./Components/Security/Security";
// import MyListing from './Components/MyListing/MyListing';
// import AccountSettings from './Components/AccountingSettings/AccountingSettings';
// import Favorites from './Components/Favorites/Favorites';
// import SavedProfile from './Components/SavedProfile/SavedProfile';
// import Logout from './Components/Logout/Logout';
// import Loader from './Components/Loader/Loader';
// import './App.css'; 
// import ham from "./assets/ham.png";

// const App = () => {
//   const [isSidebarVisible, setSidebarVisible] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     // Show loader for a brief moment when route changes
//     setLoading(true);
//     const timer = setTimeout(() => setLoading(false), 1000); // Adjust the delay as needed
//     return () => clearTimeout(timer);
//   }, [location.pathname]);

//   const handleSidebarToggle = () => {
//     setSidebarVisible(!isSidebarVisible);
//   };

//   const handleItemClick = (path) => {
//     setSidebarVisible(false);
//     navigate(path); // Navigate to the clicked page
//   };

//   return (
//     <>
//       {loading && <Loader />} {/* Display loader when loading */}
//       <Container fluid className={`app-container ${loading ? 'loading' : ''}`}>
//         <Button 
//           className="toggle-sidebar-button d-md-none border-0 bg-white" 
//           style={{ background: "darkorange" }} 
//           onClick={handleSidebarToggle}
//         >
//           {isSidebarVisible ? 'X' : <img src={ham} alt="menu" />}
//         </Button>
//         <Row className="gx-0"> {/* Added gx-0 class to remove horizontal gutters */}
//           <Col xs={12} md={2} className={`sidebar-column ${isSidebarVisible ? 'sidebar-visible' : 'sidebar-hidden'} d-md-block`}>
//             <Sidebar setSidebarVisible={setSidebarVisible} handleItemClick={handleItemClick} />
//           </Col>
//           <Col xs={12} md={10} className="bg-light content-area">
//             <Routes>
//               <Route path="/" element={<Dashb />} />
//               <Route path="/activities" element={<Activities />} />
//               <Route path="/my-listing" element={<MyListing />} />
//               <Route path="/favorites" element={<Favorites />} />
//               <Route path="/saved-profile" element={<SavedProfile />} />
//               <Route path="/account-settings" element={<AccountSettings />} />
//               <Route path="/security" element={<Security />} />
//               <Route path="/logout" element={<Logout />} />
//               <Route path="*" element={<Dashb />} />
//             </Routes>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default App;


import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import Dashb from './Components/Dash/Dashb';
import Activities from './Components/Activity/Activities';
import Security from "./Components/Security/Security";
import MyListing from './Components/MyListing/MyListing';
import AccountSettings from './Components/AccountingSettings/AccountingSettings';
import Favorites from './Components/Favorites/Favorites';
import SavedProfile from './Components/SavedProfile/SavedProfile';
import Logout from './Components/Logout/Logout';
import Loader from './Components/Loader/Loader';
import './App.css'; 
import ham from "./assets/ham.png";

const App = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [loading, setLoading] = useState(true); // Start with loading as true

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Show loader when the route changes
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); // Adjust the delay as needed
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const handleSidebarToggle = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const handleItemClick = (path) => {
    setSidebarVisible(false);
    navigate(path); // Navigate to the clicked page
  };

  return (
    <>
      {loading ? (
        <Loader /> // Display loader when loading
      ) : (
        <Container fluid className="app-container">
          <Button 
            className="toggle-sidebar-button d-md-none border-0 bg-white" 
            style={{ background: "darkorange" }} 
            onClick={handleSidebarToggle}
          >
            {isSidebarVisible ? 'X' : <img src={ham} alt="menu" />}
          </Button>
          <Row className="gx-0"> {/* Added gx-0 class to remove horizontal gutters */}
            <Col xs={12} md={2} className={`sidebar-column ${isSidebarVisible ? 'sidebar-visible' : 'sidebar-hidden'} d-md-block`}>
              <Sidebar setSidebarVisible={setSidebarVisible} handleItemClick={handleItemClick} />
            </Col>
            <Col xs={12} md={10} className="bg-light content-area">
              <Routes>
                <Route path="/" element={<Dashb />} />
                <Route path="/activities" element={<Activities />} />
                <Route path="/my-listing" element={<MyListing />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/saved-profile" element={<SavedProfile />} />
                <Route path="/account-settings" element={<AccountSettings />} />
                <Route path="/security" element={<Security />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="*" element={<Dashb />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default App;
