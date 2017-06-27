import React,{Component} from 'react'

class Management extends Component {
  render() {
    const {orders} = this.props
    return (
      <div className="tab-pane" id="home-5">
        {(orders && orders.length) ? (
          <div className="panel-group" id="accordion-5" role="tablist" aria-multiselectable="false">
            {orders.map(function(order, index) {
              var status
              switch(order.status) {
                case 1:
                  status = <span className="label label-default pull-right">Chờ giao hàng</span>
                  break
                case 2:
                  status = <span className="label label-info pull-right">Đang giao hàng</span>
                  break
                case 3:
                  status = <span className="label label-success pull-right">Đã giao hàng</span>
                  break
                case 4:
                  status = <span className="label label-danger pull-right">Bị từ chối</span>
                  break
                default:
                  break
              }
              return (
                <div className="panel panel-default" key={index}>
                  <div className="panel-heading" role="tab" id={"accordion-5-heading-" + index}>
                    <h4 className="panel-title">
                      <a role="button" className="order-number" data-toggle="collapse" data-parent="#accordion-5" href={"#accordion-5-collapse-" + index} aria-expanded="false" aria-controls={"accordion-5-collapse-" + index}>
                        Đơn hàng: {order.id}
                        {status}
                        <br/>
                        COD: {order.COD}
                      </a>
                    </h4>
                  </div>
                  <div id={"accordion-5-collapse-" + index} className="panel-collapse collapse" role="tabpanel" aria-labelledby={"accordion-5-heading-" + index}>
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
                      <div className="panel-body button-list">
                        <button className="btn btn-primary btn-block" data-toggle="modal" data-target="#re-assign">Chỉ định người giao hàng</button>
                        <button className="btn btn-success btn-block" data-toggle="modal" data-target="#con-close-modal">Chấp nhận</button>
                        <button className="btn btn-warning btn-block" data-toggle="modal" data-target="#reject-modal">Từ chối</button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="panel-group" id="accordion-5" role="tablist" aria-multiselectable="false">
            <div className="panel panel-defaultpanel">
              <p >Không có hàng</p>
            </div>   
          </div>
        )}
      </div>
    )
  }
}

export default Management
