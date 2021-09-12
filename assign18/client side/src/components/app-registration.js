import React from 'react';

const App = () => {

  return (
<div>
    <h2> Registration</h2>
   
    <form>
      <div class="form-group">
        <label for="name" >Name</label>
        <input type="name" class="form-control" id="name" placeholder="Enter your name" />
      </div>

      <div class="form-group">
        <label for="emailid" >Email ID</label>
        <input  class="form-control" id="emailid" placeholder="Enter your Email ID" />
      </div>

      <div class="form-group">
        <label for="contact" >Contact No</label>
        <input class="form-control" id="contact" placeholder="Enter your contact number" />
      </div>

      <div class="form-group">
    <label for="InputPassword1"> Create Password</label>
    <input type="password" class="form-control" id="InputPassword1"/>
  </div>


  <div class="form-group">
    <label for="InputPassword1">Verify Password</label>
    <input type="password" class="form-control" id="InputPassword1" />
  </div>


      <button  class="btn btn-primary">Register</button>
    </form>

    </div>
  )
}

export default App;