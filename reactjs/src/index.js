import React from 'react'
import ReactDOM from 'react-dom'

class UserInfo extends React.Component {
  constructor(props) {
    super(props)

    this.state = { message: '', region: {} }
    this.changeProvice = this.changeProvice.bind(this)
    this.changeCity = this.changeCity.bind(this)
    this.submit = this.submit.bind(this)
  }

  componentDidMount() {
    // console.log(location.search)
    let uuid = urlParameter('uuid')
    if (!!!uuid) {
      this.setState({ message: '链接来源异常。' })
    }
    let elProvince = document.getElementById('province')

    axios({
      method: 'GET',
      url: './assets/data/list.json',
      responseType: 'json'
    }).then(response => {
      this.setState({ region: response.data })
      for (let key in response.data) {
        if (key.substr(2, 4) === '0000') {
          elProvince.options.add(new Option(response.data[key], key))
        }
      }
    })
  }

  changeProvice() {
    let elProvince = document.getElementById('province')
    let elCity = document.getElementById('city')
    let elDistrict = document.getElementById('district')

    elCity.innerHTML = ''
    elCity.options.add(new Option('未选择', ''))
    elDistrict.innerHTML = ''
    elDistrict.options.add(new Option('未选择', ''))

    for (let key in this.state.region) {
      if (key.substr(0, 2) === elProvince.value.substr(0, 2) && key.substr(2, 4) !== '0000') {
        if (elProvince.options[elProvince.options.selectedIndex].text.indexOf('市') !== -1) {
          elCity.options.add(new Option(this.state.region[key], key))
        } else {
          if (key.substr(4, 2) === '00') {
            elCity.options.add(new Option(this.state.region[key], key))
          }
        }
      }
    }
  }

  changeCity() {
    let elProvince = document.getElementById('province')
    let elCity = document.getElementById('city')
    let elDistrict = document.getElementById('district')

    elDistrict.innerHTML = ''
    elDistrict.options.add(new Option('未选择', ''))

    if (elProvince.options[elProvince.options.selectedIndex].text.indexOf('市') !== -1) {
      return false
    }

    for (let key in this.state.region) {
      if (key.substr(0, 4) === elCity.value.substr(0, 4) && key.substr(4, 2) !== '00') {
        elDistrict.options.add(new Option(this.state.region[key], key))
      }
    }
  }

  submit() {
    this.setState({ message: '' })
    let elName = document.getElementById('name')
    let elMobile = document.getElementById('mobile')
    let elProvince = document.getElementById('province')
    let elCity = document.getElementById('city')
    let elAddress = document.getElementById('address')
    let elPostage = document.getElementById('postage')

    if (!!!elName.value || !!!elMobile.value || !!!elProvince.value || !!!elCity.value || !!!elAddress.value || !!!elPostage.checked) {
      this.setState({ message: '请完整填写用户信息。' })
      return false
    }

    axios({
      method: 'POST',
      url: './api/customer/',
      data: {
        user_uuid: urlParameter('uuid'),
        name: elName.value,
        mobile: elMobile.value,
        province: elProvince.value,
        city: elCity.value,
        district: document.getElementById('district').value,
        address: elAddress.value,
        postage: elPostage.checked
      },
      responseType: 'json'
    }).then(response => {
      console.log(response.data)
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <h2>填写用户信息</h2>
          <hr/>

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
            <select id="province" className="form-control" onChange={this.changeProvice}>
              <option value="">未选择</option>
            </select>
            <br/>
            <select id="city" className="form-control" onChange={this.changeCity}>
              <option value="">未选择</option>
            </select>
            <br/>
            <select id="district" className="form-control">
              <option value="">未选择</option>
            </select>
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
        
          {this.state.message && <div className="col-12 alert alert-danger">
            {this.state.message}
          </div>
          }

          <div className="col-12">
            <button type="button" id="submit" className="btn btn-outline-dark btn-block" onClick={this.submit}>
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