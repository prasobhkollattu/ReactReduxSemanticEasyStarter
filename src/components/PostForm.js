import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createPost } from '../actions/postActions'
import "semantic-ui-css/semantic.min.css"
import { Form, Button, Input } from 'semantic-ui-react'

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        }

        this.props.createPost(post);

    }

    render() {

        return (
            <div className="ui container">
                <h1>Add Post</h1>
                <Form onSubmit={this.onSubmit}>
                    <div>

                        <label> Title:</label><br />
                        <input type="text" name="title" value={this.state.title} onChange={this.onChange} />
                    </div>
                    <div>

                        <label> Body:</label><br />
                        <textarea id="textarea" name="body" value={this.state.body} onChange={this.onChange} />
                    </div>
                    <br />
                    <Button primary submit>Add Post</Button>

                </Form>

            </div>
        );
    }
}


PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
}
export default connect(null, { createPost })(PostForm);
