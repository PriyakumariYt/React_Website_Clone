import React, { useState } from 'react'

const Contact = () => {
  const [data,setData] = useState({
    fullname:"",
    email: "",
    phone:"",
    msg:"",

  });
  const InputEvent = (event)=>{
    const {name,value} =event.target;
    setData((preVal)=>{
      return{
        ...preVal,
        [name]:value,
      }
    })
  }
  const formSubmit =(e)=>{
e.preventDefault();
alert(`${data.fullname}. my mob no is ${data.phone}`)
  }
  return (
    <>
 <div className="my-5">
  <h1 className='text-center'>Contact Us</h1>
 </div>
 <div className="container contact_div">
  <div className="row gy-4" >
    <div className="col-md-6 col-10 mx-auto">
      <form onSubmit={formSubmit}>
      <div class="mb-3">
  <label for="exampleFormControlInput1" 
  class="form-label">FullName</label>
  <input type="text"
   class="form-control" 
  id="exampleFormControlInput1"
  name = "fullname"
  value={data.fullname}
  onChange={InputEvent}
   placeholder="Name"/>
</div>
     <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" 
  id="exampleFormControlInput1" 
  name = "email"
  value={data.email}
  onChange={InputEvent}
  placeholder="name@example.com"/>
</div>
     <div class="mb-3">
  <label for="exampleFormControlInput1"
   class="form-label">Phone Number</label>
  <input type="number" 
  class="form-control"
   id="exampleFormControlInput1"
   name = "phone"
  value={data.phone}
  onChange={InputEvent}
   placeholder="Number"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" 
  class="form-label">Example textarea</label>
  <textarea class="form-control" 
  id="exampleFormControlTextarea1" 
  rows="6"
  name = "msg"
  value={data.msg}
  onChange={InputEvent}
  >
   

  </textarea>
</div>
  <div class="col-12">
    <button class="btn btn-primary" 
    type="submit">Submit form</button>
  </div>
      </form>
    </div>
  </div>
 </div>
    </>
  )
}

export default Contact
