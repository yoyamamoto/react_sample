/*
 * other
const MySecClass = React.cleateClass({
  render:function(){
    return (
      <h2 className="sec">{this.props.message}</h2>
    )
  }
});
*/

class Head extends React.Component {
  render(){ return (
    <h1>{this.props.message}</h1>
  )}
}

class Form extends React.Component{
  render(){ return (
    <div>
        <input type="text"/>
        <button>{this.props.label}</button>
    </div>
  )}
}

class Container extends React.Component{
  render(){ return (
    <Head message="REACT sample" />
    
  )}
}

ReactDOM.render(
  <Container />,
  document.getElementById('root')
);




