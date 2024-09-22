`

# React Form Builder

A complete form builder for react that takes a schema and generate form with fields and validations and takes care of all the state management and form submissions:

## Example:

```
import { FormBuilder, Schema } from "react-form-builder-sl";
import "react-form-builder-sl/dist/index.css";

function App() {
  const schema: Schema = {
    fields: [
      {
        name: "email",
        type: "input",
        label: "Email",
        inputProps: {
          type: "email",
        },
        validations: {
          required: true,
          isEmail: true,
        },
      },
      {
        name: "password",
        type: "input",
        label: "Password",
        inputProps: {
          type: "password",
        },
        validations: {
          required: true,
          min: 8,
          max: 16,
        },
      },
    ],
  };
  return (
    <div className="App">
      <header className="App-header">
        <FormBuilder
          schema={schema}
          onSubmit={(values) => console.log(values)}
        />
      </header>
    </div>
  );
}

export default App;
```

## FormBuilderProps

`schema`: The schema of the form with the information about the fields and their validations\
`formContainerStyles`: Styles for the form formContainerStyles\
`submitButtontext`: Text for the submit submit button. Default is 'Submit'\

### Schema

`fields`: `Fields[]` - An array of all the fields in the form following the `Field` interface.

### Field

`name`: `string` - Name of the Field\
`type`: `"input" | "textarea" | "dropdown" | "checkbox" | "radio"` - Type of the Field\
`initialValue?`: `string | number | boolean` - Initial value of the field\
`label?`: `string` - Label of the field\
`validations?`: `FieldValidations` - Validations to apply to the field. Should follow the `FieldValidations` interface.\
`inputProps?`: `InputHTMLAttributes<HTMLInputElement>` - Props to supply to the input element of this field.\

### FieldValidations

`isString`: `boolean` - `true` if the field should be a string\
`isNumber`: `boolean` - `true` if the field should be a number\
`isEmail`: `boolean` - `true` if the field should be a email\
`required`: `boolean` - `true` if the field should be a requied\
`min`: `number` - Minimum value/length of the field. If field is string, validation will be applied to the length of the value. If the field is number, validation will be applied to the actual value.\
`max`: `number` - Maximum value/length of the field. If field is string, validation will be applied to the length of the value. If the field is number, validation will be applied to the actual value.\

## Contribution Guide

1. Clone the repository
   `git clone https://github.com/ahsansheikh94/react-form-builder.git`

2. Install dependencies
   `pnpm install`

3. Checkout to your branch
   `git checkout -b <your_branch_name>`

4. Make your changes

5. Create a changeset and add change log by running:
   `pnpm changeset`

6. Finalize changelog and increment version by running:
   `pnpm changeset version`

7. Push your changes

```
git add .
git commit -m"<something amazing>"
git push
```

8. Submit a PR

##Thank you!
