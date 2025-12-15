1.JSX (JavaScript XML) is a syntax extension to JavaScript, which is used in React to write HTML-like code inside JavaScript. The code is easy to read
UI and logic can be written together React can render UI very quickly

2.State is the component's own data The component itself controls it Can be modified (with setState / useState) Props are data received from the parent component Can only be used by the child componentCannot be modified (read-only)
Data goes in one direction (parent → child)

3.useState is a React Hook that allows us to use and control state inside functional components. Earlier, state was only available in class components.
Now, we can use useState to keep state in function components.

4.The most common and correct way to share state in React is to use a parent component. This is called State Lifting Up. The state is stored in a common parent component, then passed to the child component using props.

5.Event handling in React is done using JavaScript functions, but there are some minor differences. Event names are camelCase
onclick onClick Events are passed functions, not strings {} is used inside JSX