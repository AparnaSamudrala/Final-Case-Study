import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Menu from '../Header/Menu';

// PageLayout component helps us in  nested routing to handle elements with header and footer
const PageLayout = () => (
  <>
    <Menu />
    <Outlet /> {/* nested routes render out here */}
    <Footer />
  </>
);
export default PageLayout;