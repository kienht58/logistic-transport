import React,{Component} from 'react'

class Waiting extends Component {
	render() {
		const {orders} = this.props
    return (
      <div className="tab-pane" id="home-4">
        {(orders && orders.length) ? (
          <div className="panel-group" id="accordion-4" role="tablist" aria-multiselectable="false">
            {orders.map(function(order, index) {
              return (
                <div className="panel panel-default" key={index}>
                  <div className="panel-heading" role="tab" id={"accordion-4-heading-" + index}>
                    <h4 className="panel-title">
                      <a role="button" className="order-number" data-toggle="collapse" data-parent="#accordion-4" href={"#accordion-4-collapse-" + index} aria-expanded="false" aria-controls={"accordion-4-collapse-" + index}>
                        Đơn hàng: {order.id}
                        <span className="label label-danger pull-right">Bị từ chối</span>
                        <br/>
                        COD: {order.COD}
                      </a>
                    </h4>
                  </div>
                  <div id={"accordion-4-collapse-" + index} className="panel-collapse collapse" role="tabpanel" aria-labelledby={"accordion-4-heading-" + index}>
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
        ) : (
          <div className="panel-group" id="accordion-4" role="tablist" aria-multiselectable="false">
            <div className="panel panel-defaultpanel">
              <p >Không có hàng bị từ chối</p>
            </div>   
          </div>
        )}
      </div>
    )
	}
}

export default Waiting