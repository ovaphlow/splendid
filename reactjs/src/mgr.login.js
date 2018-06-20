import React from 'react'
import ReactDOM from 'react-dom'

class MgrLogin extends React.Component {
  constructor(props) {
    super(props)
    this.state = { message: '' }

    this.submit = this.submit.bind(this)
  }

  submit() {
    this.setState({ message: '' })
    if (!!!document.getElementById('account').value || !!!document.getElementById('password').value) {
      this.setState({ message: '请完整填写注册信息。' })
      return false
    }
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

              { this.state.message && <div className="col-12 alert alert-danger">
                {this.state.message}
              </div> }

              <button type="button" id="submit" className="btn btn-outline-primary btn-block" onClick={this.submit}>
                <i className="fa fa-fw fa-sign-in"></i> 注册
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <MgrLogin/>,
  document.getElementById('app')
)