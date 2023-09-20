### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  To route to different "pages" within the one page app 

- What is a single page application?
  An application that doesnt refresh when a change is made

- What are some differences between client side and server side routing?
  The client doesnt make requests to the server they will process it all on their side

- What are two ways of handling redirects with React Router? When would you use each?
  Import Redirect or don't use exact path

- What are two different ways to handle page-not-found user experiences using React Router? 
  making a 404 page and directing it to them if nothing else is found or using non exact path matching to catch a lost person

- How do you grab URL parameters from within a component using React Router?
  useParams

- What is context in React? When would you use it?
  context is a way to pass things to children or even further without having to render it in each component down the line, you would use this when you want to render something in say, a parent to granchild component without it interferring with the ones inbetween

- Describe some differences between class-based components and function
  components in React.
  Class based can be used more for reusable code and function components are a tad bit harder to make that happen so i consider those "PROD" components.

- What are some of the problems that hooks were designed to solve?
  Before hooks, React didn’t have a basic way of extracting and sharing logic