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
  render() {
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
                  <i className="md-select-all"></i>
                  <p className="">Tất cả (1)</p>
                </a>
              </li>
              <li className="">
                <a href="#home-2" data-toggle="tab" aria-expanded="false" className="text-center">
                  <i className="fa fa-clock-o"></i>
                  <p className="">Chờ giao (0)</p>
                </a>
              </li>
              <li className="">
                <a href="#home-3" data-toggle="tab" aria-expanded="false" className="text-center">
                  <i className="fa fa-motorcycle"></i>
                  <p className="">Đang giao (0)</p>
                </a>
              </li>
              <li className="">
                <a href="#home-4" data-toggle="tab" aria-expanded="false" className="text-center">
                  <i className="fa fa-check-circle-o"></i>
                  <p className="">Đã giao (1)</p>
                </a>
              </li>
              <li className="">
                <a href="#home-5" data-toggle="tab" aria-expanded="false" className="text-center">
                  <i className="fa fa-hand-stop-o"></i>
                  <p className="">Từ chối (0)</p>
                </a>
              </li>
              
              <li className="">
                <a href="#home-6" data-toggle="tab" aria-expanded="false" className="text-center">
                  <i className="fa fa-group"></i>
                  <p className="">Quản lý (1)</p>
                </a>
              </li>  
            </ul>
            <div className="tab-content">
              <Orders />
              <Waiting />
              <Delivering />
              <Delivered />
              <Refused />
              <Management />
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