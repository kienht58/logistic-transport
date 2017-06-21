import React,{Component} from 'react'

class Orders extends Component {
	render() {
		return (
			<div className="tab-pane active" id="home-0">
        <div className="panel-group" id="accordion-0" role="tablist" aria-multiselectable="false">
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="accordion-0-heading-1">
              <h4 className="panel-title">
                <a role="button" className="order-number" data-toggle="collapse" data-parent="#accordion-0" href="#accordion-0-collapse-1" aria-expanded="false" aria-controls="accordion-0-collapse-1" transport-id="104" >
                  Đơn hàng: 36381
                  <span className="label label-success pull-right">Đã giao hàng</span>
                  <br/>
                  COD: 450,000 VNĐ
                </a>
              </h4>
            </div>
            <div id="accordion-0-collapse-1" className="panel-collapse collapse" role="tabpanel" aria-labelledby="accordion-0-heading-1">
              <div className="panel-body">             
                <ul>
                  <li><b>Người vận chuyển:</b> Hoàng Hà</li>
                  <li><b>Điểm đi:</b> MB - Hà Nội (Tổng)</li>
                  <li><b>Điểm đến:</b> 151 Tổ 17 Trần Phú - Khuyến Lương, Hoàng Mai, Hà Nội </li>
                  <li><b>Người nhận:</b> Đỗ Thị Thơm 
                      <p><b>SĐT:</b> 0984560217
                      <br /><b>Email:</b> 1544365@gcafeshop.vn</p>
                  </li>
                  <li>
                    <b>Danh sách sản phẩm:</b>
                    <ol>
                      <hr/>
                      <li>Bàn di chuột Gshop GS668 <br /> Số lượng: 15</li>
                    </ol>
                  </li>
                </ul>
                <div className="panel-body button-list">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
		)
	}
}

export default Orders