/*
class Head extends React.Component {
  render(){ return (
    <h1 className="Head">{this.props.message}</h1>
  )}
}*/

class Form extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      value : '',
      message : ''
    }
    this.inputOnChangeFunc = this.inputOnChangeFunc.bind( this );
    this.buttonOnClickFunc = this.buttonOnClickFunc.bind( this );
  }

  inputOnChangeFunc ({ target : { value } }) {
    console.log( "onChange" + value);
    this.setState({
      value
    });
  }

  buttonOnClickFunc () {
    console.log( "send" + this.state.value );
    const { value } = this.state;
    console.log( this.state );
    this.setState({
      value : '',
      message : value
    })
  }
  
  render () {
    return (
      <div className="Form">
          <input type="text" value={ this.state.value } onChange={ this.inputOnChangeFunc } />
          <button onClick={ this.buttonOnClickFunc }>{ this.props.label }</button>
          <div>{ this.state.message }</div>
      </div>
    );
  }
}

class Container extends React.Component{
  render(){ return (
    //<Head message="REACT sample" />
    <Form label="送信" />
  );}
}

ReactDOM.render(
  <Container />,
  document.getElementById('root')
);

