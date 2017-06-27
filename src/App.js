import React, { Component } from 'react';

import Modals from './components/Modals'
import Orders from './components/Orders'
import Waiting from './components/Waiting'
import Delivering from './components/Delivering'
import Delivered from './components/Delivered'
import Refused from './components/Refused'
import Management from './components/Management'
import './App.css';

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			orders: []
		}
	}

	componentDidMount() {
		setTimeout(function() {
			this.setState({
				orders: [
				    {
				        "id": "36381",
				        "COD": "450,000",
				        "transporter": "Hoàng Hà",
				        "start": "MB - Hà Nội (Tổng)",
				        "destination": "151 Tổ 17 Trần Phú - Khuyến Lương, Hoàng Mai, Hà Nội",
				        "receiver": {
				            "name": "Đỗ Thị Thơm",
				            "phone": "0984560217",
				            "email": "1544365@gcafeshop.vn"
				        },
				        "products": [
				            {
				                "name": "Bàn di chuột Gshop GS668",
				                "quantity": 15
				            }
				        ],
				        "status": 3
				    }
				]
			})
		}.bind(this), 500)
	}

  render() {
		const {orders} = this.state
		var waitingOrders = orders.filter(function(order) {
			return order.status == 1
		})

		var deliveringOrders = orders.filter(function(order) {
			return order.status == 2
		})

		var deliveredOrders = orders.filter(function(order) {
			return order.status == 3
		})

		var refusedOrders = orders.filter(function(order) {
			return order.status == 4
		})

		return (
	  	<div className="wrapper">
				<div className="container">
		  		<div className="mobile-header text-center">
						<h3>Giao vận</h3>
						<div id="mobile-search-form" role="search" className="app-search" action="/m/search">
			  			<button type="submit" id="search-transport"><i className="fa fa-search"></i></button>
			  			<input id="mobile-search" type="text" className="form-control" name="query" placeholder="Nhập tên, mã đơn hàng, hoặc sđt để tìm kiếm." />
						</div>
		  		</div>

					<div className="row">
		  			<div className="col-lg-12 main-content">
							<ul className="menu-tabs nav nav-tabs row">
			  				<li className="active">
									<a href="#home-0" data-toggle="tab" aria-expanded="false" className="text-center">
				  					<i className="fa fa-th"></i>
				  					<p className="">Tất cả ({orders.length})</p>
									</a>
			  				</li>
							  <li className="">
									<a href="#home-2" data-toggle="tab" aria-expanded="false" className="text-center">
									  <i className="fa fa-clock-o"></i>
									  <p className="">Chờ giao ({waitingOrders.length})</p>
									</a>
							  </li>
							  <li className="">
									<a href="#home-3" data-toggle="tab" aria-expanded="false" className="text-center">
									  <i className="fa fa-motorcycle"></i>
									  <p className="">Đang giao ({deliveringOrders.length})</p>
									</a>
							  </li>
							  <li className="">
									<a href="#home-4" data-toggle="tab" aria-expanded="false" className="text-center">
									  <i className="fa fa-check-circle-o"></i>
									  <p className="">Đã giao ({deliveredOrders.length})</p>
									</a>
							  </li>
							  <li className="">
									<a href="#home-5" data-toggle="tab" aria-expanded="false" className="text-center">
									  <i className="fa fa-hand-stop-o"></i>
									  <p className="">Từ chối ({refusedOrders.length})</p>
									</a>
							  </li>

							  <li className="">
									<a href="#home-6" data-toggle="tab" aria-expanded="false" className="text-center">
									  <i className="fa fa-group"></i>
									  <p className="">Quản lý ({orders.length})</p>
									</a>
							  </li>
							</ul>

							<div className="tab-content">
							  <Orders orders={orders}/>
							  <Waiting orders={waitingOrders}/>
							  <Delivering orders={deliveringOrders}/>
							  <Delivered orders={deliveredOrders}/>
							  <Refused orders={refusedOrders}/>
							  <Management orders={orders}/>
							</div>
							<Modals />
						</div>
		  		</div>
				</div>
	  	</div>
		);
  }
}

export default App;
