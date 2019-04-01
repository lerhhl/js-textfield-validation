# Textfield Validation

An npm Package to validate textfield value.

## How to install
```bash
# with npm
npm install js-textfield-validation
```

## API

Some validations are chainable.

### Available validations

| Validation | Description | Response | Chainable |
| --- | --- | --- | --- |
|`alphanumericOnly` | To accept alphanumeric only. | `string` | Yes |
|`dollarValue` | To create a value with two decimal places. | `string` | Yes |
|`noSpace` | To remove all the spaces. | `string` | Yes |
|`removeNum` | To remove all the number. | `string` | Yes |
|`numOnly` | To remove all the non integer. | `string` | Yes |
|`removeLeadingZero` | To remove all the leading zero. | `string` | Yes |
|`singleSpace` | To accept single space between two characters only. | `string` | Yes |
|`validateEmail` | To check whether value is an valid email format. | `boolean` | No |
|`wordOnly` | To remove all non alphabet. | `string` | Yes |

## HOW TO USE

Simple example:

```ReactJS
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

## LICENSE

LICENSE.md