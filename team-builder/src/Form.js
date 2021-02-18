import React from "react";

function Form(props) {
    const {form, update, submit } = props
    
    const handleChange = event => {
        const {name, value } = event.target;
        update(name, value)
    };

    const handleSubmit = event => {
        event.preventDefault();
        submit()
    };

  return (
    <div className="Form">
      <form onSubmit={event => handleSubmit(event)}>
        <section className='Name'>
            <label>
            Name:
            <input 
            type="text" 
            name="name"
            value={form.name}
            placeholder="Enter First Name"
            onChange={handleChange} />
            </label>
        </section>
        <section>
            <label>
                Email:
                <input 
                type="text"
                name="email"
                value={form.email}
                placeholder="Enter Email"
                onChange={handleChange} />
            </label>    
        </section>  
        <section>
            <label>
                Role:
                <select 
                type="text"
                name="role"
                value={form.role}
                onChange={handleChange}
                >
                <option value=''>Select a Role</option>
                <option value='Backend Engineer'>Backend Engineer</option>
                <option value='Frontend Engineer'>Frontend Engineer</option>
                <option value='Designer'>Designer</option>
                <option value='UX Designer'>UX Designer</option>
                <option value='QA Tester'>QA Tester</option>
                </select>    
            </label>
        </section>
    
        <div className='submit'>
        <button>Submit!</button>
        </div>
      </form>
    </div>  
  );
}

export default Form;