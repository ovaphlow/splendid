import React from 'react'
import ReactDOM from 'react-dom'

class UserInfo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <h2>填写用户信息</h2>
          <hr/>

          <div className="form-group">
            <label className="text-primary">产品</label>
            <input type="text" id="prod-name" className="form-control" readOnly="true"/>
          </div>

          <div className="form-group">
            <label className="text-primary">姓名</label>
            <input type="text" id="name" className="form-control"/>
            <label className="text-secondary">请填写收货人全名（资料不详，不予发货）</label>
          </div>

          <div className="form-group">
            <label className="text-primary">手机号</label>
            <input type="text" id="mobile" className="form-control"/>
            <label className="text-secondary">请填写正确手机号码（号码不详，不予发货）</label>
          </div>

          <div className="form-group">
            <label className="text-primary">收货地址</label>
            <select id="province" className="form-control"></select>
            <br/>
            <select id="city" className="form-control"></select>
            <br/>
            <select id="district" className="form-control"></select>
            <span className="text-secondary">新疆、西藏、港澳台等地区不参与此次活动</span>
          </div>

          <div className="form-group">
            <label className="text-primary">详细街道地址</label>
            <input type="text" id="address" className="form-control"/>
            <span className="text-danger">请填写县/乡/街道/路/号（资料不详，不予发货）</span>
          </div>

          <div className="form-check">
            <input type="radio" value="postage" id="postage" className="form-check-input"/>
            <label className="text-primary" htmlFor="postage">接受邮费自理(运费+保价费在19至39元之间，收到货支付给快递小哥即可，偏远地区最高不超过39元，不接受的不予发货！）</label>
          </div>

          <hr/>

          <div className="col-12">
            <span className="text-danger">温馨提示：</span>
            <span className="text-primary">
              本次活动限量2000套，抢完截止！仅免费提供礼品，邮费自理。
            </span>
            <br/>
            <br/>
          </div>
        
          <div className="col-12">
            <button type="button" id="submit" className="btn btn-outline-dark btn-block">
              填写完毕，确认提交。
            </button>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <UserInfo/>,
  document.getElementById('app')
)