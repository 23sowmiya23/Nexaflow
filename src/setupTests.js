import '@testing-library/jest-dom'; // Import Jest DOM for additional matchers
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Configure Enzyme with the React adapter
Enzyme.configure({ adapter: new Adapter() });

// Optionally, you can add global setup or teardown code for your tests here
// For example, setting up a mock API server or mocking global objects
