import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

import ServicesLanding from './pages/Services/Landing';
import VerticalLanding from './pages/Services/VerticalLanding';
import ServiceDetail from './pages/Services/ServiceDetail';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="blogs" element={<Blogs />} />
                    <Route path="services" element={<ServicesLanding />} />
                    <Route path="services/:vertical" element={<VerticalLanding />} />
                    <Route path="services/:vertical/:slug" element={<ServiceDetail />} />
                    {/* Dynamic routes for services will be added next */}
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
