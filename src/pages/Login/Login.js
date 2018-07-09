import React, { Component } from 'react';
import { Button } from 'reactstrap';

class login extends Component {
  render() {
    return (

    <container>   

      <div className="col-md-12 col-sm-12">
        <h3>Login</h3>
          <form>
        <div className="col-sm-12 form-group">
          <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
        </div>
        <div className="col-sm-12 form-group">
          <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
        </div>
        <div className="col-sm-12 form-group">
          <Button color="danger" onClick={this.handleSubmit} className="btn btn-default btn-block btn-lg">Sign in</Button>
        </div>
      </form>
</div>

    </container>    

        
    );
  }
}

export default login;
