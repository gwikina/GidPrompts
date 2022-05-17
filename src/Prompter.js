import React from 'react'
import { Component } from 'react'
import {Container, Form, Button, Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
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

        // OPENAI 
        const configuration = new Configuration({
            apiKey: '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',
          });
          const openai = new OpenAIApi(configuration);
          
          openai.createCompletion("text-curie-001", {
            prompt: `Write a detailed response to the quest ${formDataObj.prompt}`,
            temperature: 0.8,
            max_tokens: 200,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          })
          .then((response) =>{
            this.setState({
                heading: `Prompt: ${formDataObj.prompt}`,
                response: `${response.data.choices[0].text}`
            })
          });
    }
    render(){
        return(
            <div>
                <Container>
                    <br/>
                    <br/>
                    <h1> Generate Responses To Prompts </h1>
                    <br />
                    <h4> Enter a prompt and OpenAI will give you a response</h4>
                    <br />
                    <br />
                    <Form  onSubmit={this.onFormSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label> Enter your prompt </Form.Label>
                            <Form.Control
                                        type="text"
                                        name="prompt"
                                        placeholder="Enter a prompt for OpenAI"
                            />
                            <Form.Text>
                                Enter as much information as possible for best answers
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="lg" type="submit">
                                Get AI Answers
                        </Button>
                    </Form>
                    <br/> 
                    <br/>
                    <Card>
                        <Card.Body>
                            <Card.Title> <h1> {this.state.heading} </h1> </Card.Title>
                            <hr/>
                            <br/>
                            <Card.Text>
                                <h4>
                                {this.state.response}
                                </h4>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        )
    }
}
export default Prompter


