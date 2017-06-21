import React, {Component} from 'react'

class Modals extends Component{	
	render() {
		return (
			<div>
				<div id="re-assign" className="modal fade" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: 'none'}}>
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-body">
							<h5>Chọn người giao hàng:</h5>
								<input id="shipper_input" className="form-control" placeholder="Mã nhân viên giao hàng" name="" type="text" value="" />
								<input id="shipper_id" type="hidden" />
								<div className="info-shipment" style={{display: 'none'}}>
									<div className="info-shipment-div">
										<p>
											<b>Họ tên:</b> Kee Dev
										</p>
										<p>
											<b>Email:</b> hoang.vh@teko.vn
										</p>
										<p>
											<b>Điện thoại:</b> 01639573050
										</p>
										<p>
											<b>Địa chỉ:</b> 444 Hoàng Hoa Thám Hà Nội
										</p>
									</div>
								</div>
							</div>
							<div className="text-center">
								<button className="btn btn-default waves-effect" data-dismiss="modal">Đóng</button>
								<button id="confirm-re-assign" className="ladda-button btn btn-primary" data-style="expand-left">
									<span className="ladda-label">Xác nhận</span>
									<span className="ladda-spinner"></span><div className="ladda-progress" style={{width: '0px'}}></div>
								</button>
							</div>
						</div>
					</div>
				</div>
				
				<div id="con-close-modal" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: 'none'}}>
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-body">
								Bạn chắc chắn nhận đơn hàng.
							</div>
							<div className="text-center">
								<button className="btn btn-default waves-effect" data-dismiss="modal">Đóng</button>
								<button id="confirm-accept" className="button-confirm ladda-button btn btn-primary" data-style="expand-left">
									<span className="ladda-label">Xác nhận</span>
									<span className="ladda-spinner"></span><div className="ladda-progress" style={{width: '0px'}}></div>
								</button>
							</div>
						</div>
					</div>
				</div>
				
				<div id="reject-modal" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: 'none'}}>
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-body">
								Bạn chắc chắn từ chối giao hàng?
								<label>Lý do từ chối</label>
								<input type="text" required name="reason" className="form-control" />
							</div>
							<div className="text-center">
								<button className="btn btn-default waves-effect" data-dismiss="modal">Đóng</button>
								<button id="confirm-reject" className="button-confirm ladda-button btn btn-primary" data-style="expand-left">
									<span className="ladda-label">Xác nhận</span>
									<span className="ladda-spinner"></span><div className="ladda-progress" style={{width: '0px'}}></div>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div id="received" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: 'none'}}>
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-body">
								Xác nhận đã nhận hàng
							</div>
							<div className="text-center">
								<button className=" btn btn-default waves-effect" data-dismiss="modal">Đóng</button>
								<button id="confirm-picked" className="button-confirm ladda-button btn btn-primary" data-style="expand-left">
									<span className="ladda-label">Xác nhận</span>
									<span className="ladda-spinner"></span><div className="ladda-progress" style={{width: '0px'}}></div>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div id="modal-retry" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: 'none'}}>
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-body">
								<p>Xác nhận chưa giao được hàng</p>
								<label>Lý do</label>
								<input type="text" required name="retry-reason" className="form-control" />
							</div>
							<div className="text-center">
								<button className="btn btn-default waves-effect" data-dismiss="modal">Đóng</button>
								<button id="confirm-retry" className="button-confirm ladda-button btn btn-primary" data-style="expand-left">
									<span className="ladda-label">Xác nhận</span>
									<span className="ladda-spinner"></span><div className="ladda-progress" style={{width: '0px'}}></div>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div id="modal-success" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: 'none'}}>
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-body">
								Xác nhận giao hàng thành công
							</div>
							<div className="text-center">
								<button className="btn btn-default waves-effect" data-dismiss="modal">Đóng</button>
								<button id="confirm-success" className="button-confirm ladda-button btn btn-primary" data-style="expand-left">
									<span className="ladda-label">Xác nhận</span>
									<span className="ladda-spinner"></span><div className="ladda-progress" style={{width: '0px'}}></div>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div id="modal-failure" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: 'none'}}>
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-body">
								<p>Xác nhận giao hàng không thành công</p>
								<label>Lý do</label>
								<input type="text" required name="failed-reason" className="form-control" />
							</div>
							<div className="text-center">
								<button className="btn btn-default waves-effect" data-dismiss="modal">Đóng</button>
								<button id="confirm-failure" className="button-confirm ladda-button btn btn-primary" data-style="expand-left">
									<span className="ladda-label">Xác nhận</span>
									<span className="ladda-spinner"></span><div className="ladda-progress" style={{width: '0px'}}></div>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Modals