import React from 'react'
import { Component } from 'react'
import {Container, Form, Button, Card} from 'react-bootstrap'

const {Configuration, OpenAIApi} = require("openai");


class Prompter extends Component{
    constructor(){
        super()
        this.state = {
            heading: 'The response from the AI will be shown here', 
            response: '... await the response'
        }
    }
    onFormSubmit = e =>{
        e.preventDefault()

        const formData = new FormData(e.target),
        formDataObj = Object.fromEntries(formData.entries())
        console.log(formDataObj.prompt)
        this.setState({
            heading: `Prompt: ${formDataObj.prompt}`,
            response: `The response from OpenAI will be shown here`
        })
    }
    render(){
        return(
            <div>
                hello
            </div>
        )
    }
}
export default Prompter