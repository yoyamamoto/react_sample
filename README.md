# react sample

## React code hint
'''
ReactDOM.render(JSXcomponents, DOMcontainer);
'''

### JSXcomponents
'''
const name = 'World!!';
const e = <h1>Hello, {name}</h1>;
'''

'''
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);
'''

'''
const element = <img src={user.avatarUrl}></img>;
'''

### DOMcontainer
'''
const dom01 = document.querySelector('#target');
const dom02 = document.getElementById('#target');
'''


