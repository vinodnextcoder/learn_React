// App.js 

// import "./App.css"; 

const Form = () => {
    return (
        <div >
            <h1>Form in React</h1>
            <fieldset>
                <form action="#" method="get">
                    <label for="firstname">First Name*</label>
                    <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        placeholder="Enter First Name"
                        required
                    />
                    <br /><br />
                    <label for="lastname">Last Name*</label>
                    <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        placeholder="Enter Last Name"
                        required
                    />
                    <br /><br />
                    <label for="email">Enter Email* </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter email"
                        required
                    />
                    <br /><br />
                    <label for="gender">Gender*</label>
                    <br />
                    <input type="radio" name="gender"
                        value="" id="male" />
                    Male
                    <input type="radio" name="gender"
                        value="" id="female" />
                    Female
                    <input type="radio" name="gender"
                        value="" id="other" />
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
