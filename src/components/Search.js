import React,{Component} from 'react'

class Search extends Component {
	render() {
		return (
			<div id="mobile-search-form" role="search" className="app-search" action="/m/search">
			  <button type="submit" id="search-transport"><i className="fa fa-search"></i></button>
			  <input id="mobile-search" type="text" className="form-control" name="query" placeholder="Nhập tên, mã đơn hàng, hoặc sđt để tìm kiếm." />
			</div>
		)
	}
}

export default Search