import React from 'react';
import logo from './logo.svg';
import './App.css';

const maisRetornoURL = (cnpjs) => "https://maisretorno.com/comparacao/otimo/cdi/" + cnpjs.join(',');

const veriosURL = (cnpjs) => "https://verios.com.br/apps/comparacao/log/otimo/cdi/" + cnpjs.join('/');

const extractCNPJs = (txt) => txt.replace(/-/g, '').replace(/\./g, '').replace(/\//g, '').match(/\d{14}/g);

class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      cnpjs: []
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    const cnpjs = extractCNPJs(value) || [];
    this.setState({value, cnpjs});
  }

  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
            <textarea value={this.state.value} onChange={this.handleChange} cols={40} rows={10} placeholder="Cole aqui um texto que inclua os CNPJs dos fundos de investimento de interesse" />
        </form>
        <div className="preview">
          <h1>Comparadores</h1>
          <a target="_blank" href={maisRetornoURL(this.state.cnpjs)}>Mais retorno</a>
          <a target="_blank" href={veriosURL(this.state.cnpjs)}>Verios</a>
        </div>
      </div>
    );
  }
}

const Intro = () => 
  <div className="intro">
    <h1>Utilitários para finanças</h1>
    <br/>
      <p>Se você achou esta página interessante, dê uma olhada na minha <a target="_blank" href="https://medium.com/@den.isidoro/using-grafana-for-personal-financial-management-ac0e4d0cb43">plataforma para finanças</a>.</p>
  </div>;

const Footer = () => 
  <div className="footer">
  <p>Feito por <a target="_blank" href="https://denisidoro.github.io">Denis Isidoro</a></p>
  </div>;

const App = () => <div id="app"><Intro /><EssayForm /><Footer /></div>;

export default App;
