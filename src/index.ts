import "./components/btn-footer-component"; 
import {PageLoadComponent} from "./utils/onPageLoad";
import { MoreDetailsComponent } from "./components/more-details-item";

const pageLoad = new PageLoadComponent();
const moreDeatails = new MoreDetailsComponent();
pageLoad.addLoadEventListener();