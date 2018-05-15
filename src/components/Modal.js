import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repo: {},
      repoOwner: {},
      active: false
    }
      this.handleExit = this.handleExit.bind(this);
  }

  handleExit() {
    this.setState({active: false})
  }

  componentWillReceiveProps(nextProps) {
     this.setState(nextProps);
   }
  render() {
      return (
        <div className={ "modal " + ( this.state.active ? 'is-active' : '') }>
            <div onClick={this.handleExit} className="modal-background"></div>
            <div className="modal-content">
              <article className="media has-background-white">
                <figure className="media-left">
                  <span className="image is-96x96">
                    <img src={this.state.repoOwner.avatar_url} alt="github repo owner avatar" />
                  </span>
                </figure>
                <div className="media-content">
                  <div className="content">
                  <p>
                    <strong>{this.state.repo.name} </strong>
                    {this.state.repoOwner.login}
                    <small>repo id: {this.state.repo.id}</small>
                  </p>
                  <p>
                    {this.state.repo.description}
                    <br/>
                    <span><small>Last Updated: {this.state.repo.created_at} | Created On {this.state.repo.created_at}</small></span>
                  </p>
                  </div>
                </div>
              </article>
            </div>
            <button onClick={this.handleExit} className="modal-close is-large" aria-label="close"></button>
        </div>
      )
    }
  }

Modal.propTypes = {
  repo: PropTypes.object,
  repoOwner: PropTypes.object,
  active: PropTypes.bool
};

Modal.defaultProps = {
  repo: {},
  repoOwner: {},
  active: false
};

export default Modal;
