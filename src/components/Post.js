import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postActions'


class Post extends React.Component {


    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    componentDidMount() {
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        }
    }
    render() {
        const postItems = this.props.posts.map(item => (
            <div key="{item.id}">
                <h3>
                    {item.title}
                </h3>
                <p>
                    {item.body}
                </p>
            </div>
        ));
        return (
            <div className="ui container">
                <h1>App</h1>
                {postItems}
            </div>
        );
    }
}

Post.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
};


const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
})
export default connect(mapStateToProps, { fetchPosts })(Post);
