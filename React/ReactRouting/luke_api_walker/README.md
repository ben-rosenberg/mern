# Luke API-Walker: API Calls and Routing in React

As the title suggests, this assignment calls the Star Wars API. A form with two inputs allows the user to search for either people or planets (first input) by ID (second input).

It seemed most obvious to create two components, one for displaying a person and another for displaying a planet, because the data is different for each--i.e. hair color vs. terrain--but I decided to do one component. The way this is handled is either really smart or kind of dumb. The display component holds a const object with two key-value pairs, one for people, and one for planets. The value at each key is a nested object also with two key-value pairs, one with an array of strings that correspond to keys in the object returned by the API call--i.e. "name", "surface_water", or "hair_color"--and the other with an array of strings with keys formatted to be displayed in the head of the results table--i.e. "Name", "Surface Water", or "Hair Color".

The requested resource type is stored in a state variable, and its value is used to access the attributes objects. Table column titles and data from the API are rendered by mapping over the correct array of strings.
