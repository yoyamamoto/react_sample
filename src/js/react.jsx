class Head extends React.Component {
  render(){ return (
    <h1 className="Head">{this.props.message}</h1>
  )}
}

class Form extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      value : '',
      message : ''
    }
    this.inputOnChangeFunc = this.inputOnChangeFunc.bind( this );
    this.buttonOnClickFunc = this.buttonOnClickFunc.bind( this );

    this.inputStyle = {
      border:'1px solid #ccc',
      backgroundColor:'#f3f3f3'
    }
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
          <input type="text" value={ this.state.value } onChange={ this.inputOnChangeFunc } style={ this.inputStyle } />
          <button onClick={ this.buttonOnClickFunc }>{ this.props.label }</button>
          <div>{ this.state.message }</div>
      </div>
    );
  }
}

function Name (props){
  return <h1>Hello World! { props.name }</h1>
}

function Container() {
  return (
    <div>
      <Name name="山本" />
      <Head message="REACT sample" />
      <Form label="送信" />
    </div>
  )
}

ReactDOM.render(
  <Container />,
  document.getElementById('root')
);

