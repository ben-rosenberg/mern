# Product Manager (Part 2)

An expansion of Product Manager Part 1 to include `get` requests. The homepage displays a form to add a new product and a table containing all existing products. The title of each product in the table links to the view product ("details") page for that product.

## Form Submission and the "All Products" Table

I leverage useEffect's dependency array to re-render the "all products" table after the "create product" form is submitted without needing to refresh the page. This allows the user to immediately see the new item in the table.

A boolean variable called `wasFormSubmitted` is stored in state with a default value of false, and it is added to useEffect's dependency array. Its setter is then passed to the Form component via props along with its current value, and the Form component's form-submission handler method sets the boolean state variable to the opposite of its previous value when the form is submitted. Since it was added to the dependency array and its value has changed, the callback function passed to useEffect's first argument is called again, thereby re-executing the API request and retrieving the newly-updated products database.

## Data Types and the Dependency Array

Interestingly, the `wasFormSubmitted` variable could just as easily be _any other data type_ without impacting the functionality of the application. Making it a boolean makes the most sense of course, but its value is never actually checked or used in any way other than by `useEffect()` to see if its value has changed. Instead of a boolean that is reassigned the opposite of its previous value when the form is submitted, it could theoretically be a number that is incremented or a string that is given a different value on form submission. In fact in its current boolean form, its value actually doesn't correspond to whether the form was submitted, so maybe `wasFormSubmitted` isn't an appropriate name. It simply _switches_ values every time the form is submitted, and this change in value is what causes `useEffect()` to execute its callback function again.

Where it becomes really interesting is when the state variable is a complex/composite datatype like an object or an array. In the case of a complex datatype, `useEffect()` no longer compares its current _value_ to that of the previous load, but rather its _memory location_. In other words it checks for referential-equality instead of value-equality.

Remember that state is immutable in React, so a call to the setter method of a state variable necessarily means creation of a brand new object at a different location in memory, regardless of whether the new value is different from the previous value.

What this means is that the state variable could be defaulted to an object with a certain key-value pair, and even if its setter is called with the exact same key-value pair on form submission, `useEffect()` will still execute its callback function again _even though the __value__ of the variable in the dependency array has not changed between component updates_.

This is in contrast to when the state variable in the dependency array is a simple data type. Since `useEffect()` checks for value equality for simple data types, it won't re-execute its callback if the state variable's setter is given the same value that it previously had even though its location in memory likely changed.
