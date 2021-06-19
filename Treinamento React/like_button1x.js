'use strict'; //faz algumas verificações para que o código tenha melhores praticas com react

const e = React.createElement; //

//classe que cria o botão
class LikeButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {liked: false};
    }
    
    //verificando estado liked
    render() {
        if (this.state.liked){
            return 'Você gostou disso.';
        }
        
        //verifica clique no botão e passa true para liked
        return e(
            'button',
            {onClick:() => this.setState({ liked: true})},
            'like'
        );
    }

}

//Exibindo botão(componente) na tela
const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);


//document = "permite ter acesso a funções javascript"
//querySlector = "função que percorrre os elementos da tela localizando pelo id"
//# = "faz parte da sintaxe para localizar o like_button_container"
//ReactDOM.render = "vai renderizar o botão na div dom Container"
