import React,{Component} from 'react'

class Waiting extends Component {
	render() {
		return (
			<div className="tab-pane" id="home-2">
        <div className="panel-group" id="accordion-1" role="tablist" aria-multiselectable="false">
          <div className="panel panel-defaultpanel">
            <p >Không có hàng đang chờ giao</p>
          </div>   
        </div>
      </div>
		)
	}
}

export default Waiting