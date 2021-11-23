import React from "react"
import contentData from "../contentData"

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
        const answerId = parseInt(this.state.answer)
        if(id === correct) return(
            <button className="correct" id={id} key={id} disabled>{opt}</button>
        )
        if(id === answerId) return(
            <button className="wrong" id={id} key={id} disabled>{opt}</button>
        )
        return (
            <button className="none" id={id} key={id} disabled>{opt}</button>
        )
    }

    render(){
        let ret = this.questionData.options.map((opt, id) => 
            <button className="unanswered" onClick={this.onAnswerClick} id={id} key={id}>{opt}</button>
        )
        if (this.state.answer) ret = this.questionData.options.map((opt, id) => this.makeButton(opt, id))
        
        return(
            <div className={'question'}>
                <h3>{this.questionData.question}</h3>
                {ret}
                {this.state.answer && 
                <div className={'answered'}>
                    <button className={'reset'} onClick={this.onResetClick}>Tentar novamente</button>
                    {this.state.explain && 
                    <button onClick={this.onExplainClick}>Esconder explicação</button>}
                    {!this.state.explain && 
                    <button onClick={this.onExplainClick}>Mostrar explicação</button>}
                    {this.state.explain && 
                    <p>{this.questionData.explanation}</p>}
                </div>}
            </div>
        )

    }

}

export default Question