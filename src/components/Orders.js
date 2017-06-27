import React,{Component} from 'react'

class Orders extends Component {
	render() {
		const {orders} = this.propsf

		return (
			<div className="tab-pane active" id="home-0">
        <div className="panel-group" id="accordion-0" role="tablist" aria-multiselectable="false">
					{orders && orders.map(function(order, index) {
						return (
							<div className="panel panel-default" key={index}>
		            <div className="panel-heading" role="tab" id={"accordion-0-heading-" + index}>
		              <h4 className="panel-title">
		                <a role="button" className="order-number" data-toggle="collapse" data-parent="#accordion-0" href={"#accordion-0-collapse-" + index} aria-expanded="false" aria-controls={"accordion-0-collapse-" + index}>
		                  Đơn hàng: {order.id}
		                  <span className="label label-success pull-right">Đã giao hàng</span>
		                  <br/>
		                  COD: {order.COD}
		                </a>
		              </h4>
		            </div>
		            <div id={"accordion-0-collapse-" + index} className="panel-collapse collapse" role="tabpanel" aria-labelledby={"accordion-0-heading-" + index}>
		              <div className="panel-body">
		                <ul>
		                  <li><b>Người vận chuyển:</b> {order.transporter}</li>
		                  <li><b>Điểm đi:</b> {order.start}</li>
		                  <li><b>Điểm đến:</b> {order.destination}</li>
		                  <li><b>Người nhận:</b> {order.receiver.name}
		                      <p><b>SĐT:</b> {order.receiver.phone}
		                      <br /><b>Email:</b> {order.receiver.email}</p>
		                  </li>
		                  <li>
		                    <b>Danh sách sản phẩm:</b>
		                    <ol>
													{order.products.map(function(product, idx) {
														return <li key={idx}>{product.name} <br /> Số lượng: {product.quantity}</li>
													})}
		                    </ol>
		                  </li>
		                </ul>
		              </div>
		            </div>
		          </div>
						)
					})}
        </div>
      </div>
		)
	}
}

export default Orders
