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

| Validation | Description | Input | Output |
| --- | --- | --- | --- |
|`alphanumericOnly` | To accept alphanumeric only. | `nil` | `string` |
|`dollarValue` | To create a value with two decimal places. | `nil` | `string` |
|`ipAddress` | To accept number and dot only. | `nil` | `string` |
|`noSpace` | To remove all the spaces. | `nil` | `string` |
|`numOnly` | To remove all the non integer. | `nil` | `string` |
|`removeNum` | To remove all the number. | `nil` | `string` |
|`removeLeadingZero` | To remove all the leading zero. | `nil` | `string` |
|`singleSpace` | To accept single space between two characters only. | `nil` | `string` |
|`truncate` | To truncate the value to a specifc length. | `integer` | `string` |
|`wordOnly` | To remove all non alphabet. | `nil` | `string` |

### Available non-chainable validations

| Validation | Description | Input | Output | Remark |
| --- | --- | --- | --- | --- |
|`validateEmail` | To check whether value is a valid email format. | `nil` | `boolean` | |
|`validateIPAddress` | To check whether value is a valid IP address. | `nil` | `boolean` | |
|`validateNRIC` | To check whether value is an valid NRIC in Singapore. | `nil` | `boolean` | Based on http://www.samliew.com/icval/ |

## HOW TO USE

### Include chainable methods

```JS
import Validation from "js-textfield-validation";
```

### Include non-chainable methods

```JS
import { validateEmail, validateIPAddress, validateNRIC } from "js-textfield-validation";
```

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
      error: "",
    };
  };

  handleChange = event => {
    let validatedName = new Validations(event.target.value).removeNum().singleSpace();
    if (validatedName.error !== "") {
      this.setState({ name: validatedName.value, error: validatedName.error });
    } else {
      this.setState({ name: validatedName, error: "" });
    }
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
          helperText={ this.state.error }
        />
      </div>
    );
  };
};
```

### An example with ReactJS, material-ui and chainable and non-chainable methods

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