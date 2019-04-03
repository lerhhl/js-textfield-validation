# Textfield Validation

An npm Package to validate textfield value.

## How to install

```bash
# with npm
npm install js-textfield-validation
```

## API

There are chainable and non-chainable methods.

### Available chainable validations

| Validation | Description | Response |
| --- | --- | --- |
|`alphanumericOnly` | To accept alphanumeric only. | `string` |
|`dollarValue` | To create a value with two decimal places. | `string` |
|`noSpace` | To remove all the spaces. | `string` |
|`removeNum` | To remove all the number. | `string` |
|`numOnly` | To remove all the non integer. | `string` |
|`removeLeadingZero` | To remove all the leading zero. | `string` |
|`singleSpace` | To accept single space between two characters only. | `string` |
|`wordOnly` | To remove all non alphabet. | `string` |

### Available non-chainable validations

| Validation | Description | Response | Remark |
| --- | --- | --- | --- |
|`validateEmail` | To check whether value is an valid email format. | `boolean` | |
|`validateNRIC` | To check whether value is an valid NRIC in Singapore. | `boolean` | Based on http://www.samliew.com/icval/ |

## HOW TO USE

### An example with ReactJS, material-ui and chainable methods

```JS
import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Validation from "js-textfield-validation";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
  };

  handleChange = event => {
    let validatedName = new Validations(event.target.value).removeNum().singleSpace().value;
    this.setState({ name: validatedName });
  };

  render() {
    return (
      <div>
        <TextField
          id="name"
          label"Name"
          variant="outlined"
          placeholder="Enter your name here."
          value={ this.state.name }
          onChange={ this.handleChange }
        />
      </div>
    );
  };
};
```

### An example with non-chainable method

```JS
import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Validation, { validateEmail } from "js-textfield-validation";

class App extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      errorMessage: ""
    };
  };

  handleChange = event => {
    let newEmail = new Validation(event.target.value).noSpace().value;
    const isValidEmail = validateEmail(newEmail);
    if (isValidEmail) {
      this.setState({ email: newEmail, errorMessage: "" })
    } else {
      this.setState({ email: newEmail, errorMessage: "Invalid email" })
    }
  };

  render() {
    return (
      <div>
        <TextField
          id="email"
          label"Email"
          variant="outlined"
          placeholder="Enter your email here."
          value={ this.state.email }
          onChange={ this.handleChange }
        />
        <div>{ this.state.errorMessage }</div>
      </div>
    );
  };
};
```

## LICENSE

LICENSE.md