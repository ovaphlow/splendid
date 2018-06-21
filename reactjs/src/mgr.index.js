import React from 'react'
import ReactDOM from 'react-dom'

class MgrIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = { user: {}, qrcode: '' }
  }

  componentDidMount() {
    let user = JSON.parse(localStorage.getItem('auth'))
    this.setState({ user: user })

    if (user.valid) this.setState({ qrcode: 'http://qr.liantu.com/api.php?&bg=ffffff&text=http://cdtlab.cn/splendid/?uuid=' + user.uuid })
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <h3>{this.state.user.name}</h3>
          <hr/>
        </div>

        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">我的二维码</h5>

              <p className="text-center">
                {this.state.qrcode ? <img src={this.state.qrcode} alt="二维码图片" id="qrcode" className="img-fluid"/> : '账号未激活'}
              </p>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="list-group">
            {this.props.ar.map(item =>
              <a href="#" id={item.id} className="list-group-item list-group-item-action" key={item.id}>
                客户名称{item.name}
                <span className="pull-right text-secondary">
                  时间
                </span>
              </a>
            )}
          </div>
        </div>

        <div className="col-12">
          <br/>
          <a href="login.html" className="btn btn-block btn-outline-danger">
            <i className="fa fa-fw fa-sign-out"></i> 退出登录
          </a>
        </div>
      </div>
    )
  }
}

let ar = [
  {
    id: 1,
    name: 'A1'
  },
  {
    id: 2,
    name: 'A2'
  },
  {
    id: 3,
    name: 'A3'
  }
]
ReactDOM.render(
  <MgrIndex ar={ar}/>,
  document.getElementById('app')
)