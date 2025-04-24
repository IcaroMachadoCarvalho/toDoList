import { SearchBar } from './components/searchBar';
import "./components/btn-footer-component"; 
import {PageLoadComponent} from "./utils/onPageLoad";

const pageLoad = new PageLoadComponent();
const searchBar = new SearchBar();
pageLoad.addLoadEventListener();