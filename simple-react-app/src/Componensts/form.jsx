import React from 'react';

const Form = () => {
    // Define submit handler function
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        // Access form data
        const formData = new FormData(event.target);
        // Manipulate form data as needed
        const firstName = formData.get('firstname');
        const lastName = formData.get('lastname');
        const email = formData.get('email');
        const gender = formData.get('gender');
        // Do something with the form data, like sending it to a server or performing validation
        console.log('Form submitted with data:', { firstName, lastName, email, gender });
        alert(`Form submmitted with First Name : ${firstName}`)
    };

    return (
        <div>
            <h1>Form in React</h1>
            <fieldset>
                {/* Add onSubmit attribute to form */}
                <form onSubmit={handleSubmit} action="#" method="get">
                    <label htmlFor="firstname">First Name*</label>
                    <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        placeholder="Enter First Name"
                        required
                    />
                    <br /><br />
                    <label htmlFor="lastname">Last Name*</label>
                    <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        placeholder="Enter Last Name"
                        required
                    />
                    <br /><br />
                    <label htmlFor="email">Enter Email* </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter email"
                        required
                    />
                    <br /><br />
                    <label htmlFor="gender">Gender*</label>
                    <br />
                    <input type="radio" name="gender" value="male" id="male" />
                    Male
                    <input type="radio" name="gender" value="female" id="female" />
                    Female
                    <input type="radio" name="gender" value="other" id="other" />
                    Other
                    <br /><br />
                    <label>Submit OR Reset</label>
                    <br />
                    <button type="reset" value="reset">
                        Reset
                    </button>
                    <button type="submit" value="Submit">
                        Submit
                    </button>
                </form>
            </fieldset>
        </div>
    );
}

export default Form;