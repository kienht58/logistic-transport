import React,{Component} from 'react'

class Management extends Component {
  render() {
    return (
      <div className="tab-pane" id="home-6">
        <div className="panel-group" id="accordion-6" role="tablist" aria-multiselectable="false">
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="accordion-6-heading-1">
              <h4 className="panel-title">
                <a role="button" className="order-number" data-toggle="collapse" data-parent="#accordion-6" href="#accordion-6-collapse-1" aria-expanded="false" aria-controls="accordion-6-collapse-1" >
                  Đơn hàng: 36156
                  <span className="label label-primary pull-right">Chấp nhận</span>
                  <br/>
                  COD: 0 VNĐ
                </a>
              </h4>
            </div>
            <div id="accordion-6-collapse-1" className="panel-collapse collapse" role="tabpanel" aria-labelledby="accordion-6-heading-1">
              <div className="panel-body">
                <ul >
                  <li><b>Người vận chuyển:</b> Lê Trung Kiên</li>
                  <li><b>Điểm đi:</b> MB - Hải Dương</li>
                  <li><b>Điểm đến:</b> 100 Lương Thế Vinh - P. Hải Tân, Hải Dương, Hải Dương </li>
                  <li><b>Người nhận:</b> Phạm Thị Huyền
                      <p><b>SĐT:</b> 03203550176
                      <br /><b>Email:</b> 1494802@gcafeshop.vn</p>
                  </li>
                  <li>
                    <b>Danh sách sản phẩm:</b>
                    <ol >
                      <hr />
                      <li>Bàn phím Newmen GM816 (Gray) <br/> Số lượng: 5</li>

                      <hr />
                      <li>Bàn di chuột Gshop GS668 <br/> Số lượng: 5</li>
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
        </div>
      </div>
    )
  }
}

export default Management
