import Header from './Header';
import ContactInfo from './ContactInfo';

const Layout = ({ children }) => (
  <div>
    <div className="bg-primary">
      <div className="container mx-auto">
        <Header />
      </div>
    </div>
    <div className="bg-dark">
      <div className="container mx-auto">
        <ContactInfo />
      </div>
    </div>
    <div className="container mx-auto">{children}</div>
  </div>
);

export default Layout;
