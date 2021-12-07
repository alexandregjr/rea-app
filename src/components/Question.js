import React from "react"
import contentData from "../contentData"

function getLabel(opt, id) {
    return `Alternativa ${String.fromCharCode(65 + Number(id))}: ${opt.slice(2).trim()}`;
}

class Question extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            answer: null,
            explain: false
        }
        this.onAnswerClick = this.onAnswerClick.bind(this)
        this.onResetClick = this.onResetClick.bind(this)
        this.makeButton = this.makeButton.bind(this)
        this.onExplainClick = this.onExplainClick.bind(this)
        this.questionData = contentData[this.props.subjectId].exercise[this.props.questionId]
    }

    componentWillReceiveProps(nextProps) {
        this.questionData = contentData[nextProps.subjectId].exercise[nextProps.questionId]
        this.setState({
            answer: null,
            explain: false
        })
    }

    onAnswerClick(event){
        this.setState({answer: event.target.id})
    }

    onResetClick(event){
        this.setState({answer: null})
        this.setState({explain: false})
    }

    onExplainClick(event){
        this.setState({explain: !this.state.explain})
    }

    makeButton(opt, id){
        const correct = this.questionData.answer.charCodeAt(0) - 65
        const answerId = parseInt(this.state.answer.split('_')[1]);
        const className = id === correct ? "correct" : id === answerId ? "wrong" : "none";
        return (
            <button 
                className={className} 
                id={`${this.props.questionId}_${id}`} 
                key={id}
                aria-label={getLabel(opt, id)}
                disabled
            >
                {opt}
            </button>
        )
        // if(id === correct) return(
        //     <button className="correct" id={id} key={`${this.props.questionId}_${id}`} disabled>{opt}</button>
        // )
        // if(id === answerId) return(
        //     <button className="wrong" id={id} key={`${this.props.questionId}_${id}`} disabled>{opt}</button>
        // )
        // return (
        //     <button className="none" id={id} key={`${this.props.questionId}_${id}`} disabled>{opt}</button>
        // )
    }

    render(){

        let ret = this.questionData.options.map((opt, id) => 
            <button 
                className="unanswered" 
                onClick={this.onAnswerClick}
                id={`${this.props.questionId}_${id}`}
                key={id}
                aria-label={getLabel(opt, id)}
            >
                {opt}
            </button>
        );

        if (this.state.answer) ret = this.questionData.options.map((opt, id) => this.makeButton(opt, id));
        
        return(
            <div className={'question'}>
                <h3>{this.questionData.question}</h3>
                {ret}
                {this.state.answer && 
                <div className={'answered'}>
                    <button className={'reset'} onClick={this.onResetClick}>Tentar novamente</button>
                    {this.state.explain && 
                    <button className="explain" onClick={this.onExplainClick}>Esconder explicação</button>}
                    {!this.state.explain && 
                    <button className="explain" onClick={this.onExplainClick}>Mostrar explicação</button>}
                    {this.state.explain && 
                    <p>{this.questionData.explanation}</p>}
                </div>}
            </div>
        )

    }

}

export default Question