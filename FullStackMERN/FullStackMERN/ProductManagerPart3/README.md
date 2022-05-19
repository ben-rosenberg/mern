# Product Manager (Part 3)

A further expansion of Product Manager, now with full CRUD functionality including update and delete. Each of the four CRUD functions have their own view, though this assignment was structured with the "create new product" form and the "view all products" table occupying one view. All views/CRUD routes reuse one or both of the two components, `Form.jsx` for create and update, and `ProductsTable.jsx` for "read one" and "read all". Products can be deleted from either of the read views, redirecting to the homepage if deleted from the read-one view, or immediately updating the read-all products table if deleted from the read-all view.

## Structure of Views and Components

As mentioned earlier, the homepage serves both the view-all _and_ create-new functions, and the form is needed in both the home-page and edit-product page. Rather than create two different form components for create and update, I use one, passing a different form submission-handler callback to the component depending on which parent view rendered the form component. The component itself has a `handleSubmit()` method that calls whichever callback was passed via props (and resets the form's inputs). In the case of update, the form needs to pre-fill with the current values for the product's fields, so I pass the product ID from the edit view to the component, and a `useEffect()` call retrieves the product's data with an Axios call as long as the product ID is in props.

The view-one and view-all CRUD functions similarly make use of a single component, a product table.

## Validations

The `Product` model was created with validations using the Mongoose ORM, and though the assignment didn't ask for it, I wanted to be able to actually render the validation errors in the form component in the case of an invalid create or update submission. In the `.catch` block executes in a call to either `axios.create()` or `axios.update()`, the error messages are stored in an object with keys corresponding to the path/field from which the error came. This is passed to the Form component via props, and for each input, a `<p>` tag conditionally renders depending on whether the errors-object contains an error message with a key corresponding to that input ("title", "price", or "description"). The HTML and CSS for the form need to be reworked a bit, as it's somewhat needlessly complicated and the validation errors render awkwardly.
