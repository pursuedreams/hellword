// ------------------------------------------------------------------------------
// name: ui
// ------------------------------------------------------------------------------
import Vue from 'vue';
import {
  // layout
  Row,
  Col,

  // base
  Icon,
  Button,
  Image,
  Cell,
  CellGroup,
  Popup,
  PullRefresh,

  // show
  Swipe,
  SwipeItem,
  List,
  NoticeBar,
  Lazyload,
  Sticky,
  CountDown,
  Panel,
  Step,
  Steps,

  // feedback
  Toast,
  Notify,
  Dialog,

  // Nav
  Grid,
  GridItem,
  Tab,
  Tabs,

  // form
  Field,
  Rate,
  Search,
  DatetimePicker,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup
} from 'vant';

const vantArr = [
	// layout
	Row,
	Col,

	// base
	Icon,
	Button,
	Image,
	Cell,
	CellGroup,
	Popup,
	PullRefresh,

	// show
	Swipe,
	SwipeItem,
	List,
	NoticeBar,
	Lazyload,
	Sticky,
	CountDown,
	Panel,
	Step,
	Steps,

	// feedback
	Toast,
	Notify,
	Dialog,

	// Nav
	Grid,
	GridItem,
	Tab,
	Tabs,

	// form
	Field,
	Rate,
	Search,
	DatetimePicker,
	Radio,
	RadioGroup,
	Checkbox,
	CheckboxGroup
]

vantArr.filter(e => {
	Vue.use(e)
})


// feedback
Vue.toast = Toast;
Vue.notify = Notify;
Vue.dialog = Dialog;
Vue.prototype.$toast = Toast;
Vue.prototype.$notify = Notify;
Vue.prototype.$dialog = Dialog;


// 顶部提示信息公共配置
Notify.setDefaultOptions({ duration: 2500 });
