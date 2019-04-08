/*
import { configure } from 'enzyme'; 
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() }); 
*/

const configure = require('enzyme').configure;
const Adapter = require('enzyme-adapter-react-16');

configure({ adapter: new Adapter() }); 