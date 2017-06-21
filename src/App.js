import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h4>Giao vận</h4>
          <div className="row">
            <input type="text" className="form-control" placeholder="Custom icons" />
            <i className="fa fa-search form-control-feedback l-h-34"></i>
          </div>
        </div>
        <div className="App-intro">
            <div className="row">
               <div className="col-lg-6">
                   <ul className="nav nav-tabs navtab-bg nav-justified">
                       <li className="active">
                           <a href="#home" data-toggle="tab" aria-expanded="false">
                               <i className="fa fa-home"></i>
                               <p>Home</p>
                           </a>
                       </li>
                       <li className="">
                           <a href="#profile" data-toggle="tab" aria-expanded="true">
                               <i className="fa fa-user"></i>
                               <p>Profile</p>
                           </a>
                       </li>
                       <li className="">
                           <a href="#messages" data-toggle="tab" aria-expanded="false">
                               <i className="fa fa-envelope-o"></i>
                               <p>Messages</p>
                           </a>
                       </li>
                       <li className="">
                           <a href="#settings" data-toggle="tab" aria-expanded="false">
                               <i className="fa fa-cog"></i>
                               <p>Settings</p>
                           </a>
                       </li>
                   </ul>
                   <div className="tab-content">
                       <div className="tab-pane" id="home">
                           <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                           <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>
                       </div>
                       <div className="tab-pane active" id="profile">
                           <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>
                           <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                       </div>
                       <div className="tab-pane" id="messages">
                           <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                           <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>
                       </div>
                       <div className="tab-pane" id="settings">
                           <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>
                           <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                       </div>
                   </div>
               </div>
           </div>
       </div>
      </div>
    );
  }
}

export default App;
