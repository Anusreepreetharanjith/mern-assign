import React from 'react';

const App = () => {

    return (
        <div> 
            <h2>Login </h2>
           
            <form className = "red">
  <div class="form-group">
    <label for="username" >Username</label>
    <input type="username" class="form-control" id="username"  placeholder="Enter username"/>
 
  </div>

  <div class="form-group">
    <label for="InputPassword1">Password</label>
    <input type="password" class="form-control" id="InputPassword1" placeholder="Password"/>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>


</div>
    )
}

export default App;