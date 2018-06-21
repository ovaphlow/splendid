import React from 'react'
import ReactDOM from 'react-dom'

class MgrRegister extends React.Component {
  constructor(props) {
    super(props)
    this.state = { message: '' }

    this.submit = this.submit.bind(this)
  }

  submit() {
    this.setState({ message: '' })

    if (!!!document.getElementById('account').value || !!!document.getElementById('password').value ||
        !!!document.getElementById('password1').value || !!!document.getElementById('name').value) {
      this.setState({ message: '请完整填写注册信息。' })
      return false
    }

    if (document.getElementById('password').value !== document.getElementById('password1').value) {
      this.setState({ message: '两次输入的密码不一致。' })
      return false
    }

    axios({
      method: 'POST',
      url: '../api/user/register',
      data: {
        account: document.getElementById('account').value,
        password: md5(document.getElementById('password').value),
        name: document.getElementById('name').value
      },
      responseType: 'json'
    }).then(response => {
      if (response.data.message) {
        this.setState({ message: response.data.message })
      } else {
        location.href = './login.html'
      }
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <h3>员工注册</h3>
          <hr/>
        </div>

        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="form-group">
                <label>账号</label>
                <input type="text" id="account" className="form-control"/>
              </div>

              <div className="form-group">
                <label>密码</label>
                <input type="password" id="password" className="form-control"/>
              </div>

              <div className="form-group">
                <label>重复密码</label>
                <input type="password" id="password1" className="form-control"/>
              </div>

              <div className="form-group">
                <label>姓名</label>
                <input type="text" id="name" className="form-control"/>
              </div>

              {this.state.message && <div className="col-12 alert alert-danger">
                {this.state.message}
              </div>}

              <button type="button" id="submit" className="btn btn-outline-dark btn-block" onClick={this.submit}>
                <i className="fa fa-fw fa-sign-in"></i> 注册
              </button>

              <p className="text-center">
                <br/>
                <a href="login.html">已有账号，我要登录</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <MgrRegister/>,
  document.getElementById('app')
)