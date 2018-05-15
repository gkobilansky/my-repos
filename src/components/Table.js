import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: props.repos
    }

    this.formatDate = this.formatDate.bind(this);
  }

  formatDate(data) {
    let date = new Date(data);
    return (
      date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear()
    );
  }

  componentWillReceiveProps(nextProps) {
     this.setState(nextProps);
   }
  render() {
    if(this.state.repos.length === 0) {
     return (
       <article className="preloading">
         <h1 className="loading">Loading...</h1>
       </article>
     );
    } else {
        return (
          <table className="table is-fullwidth is-striped is-hoverable">
            <thead>
              <tr>
                <th>Name</th>
                <th>Last Updated</th>
                <th>
                  <abbr title="Primary language">Language</abbr>
                </th>
                <th>
                  <abbr title="Number of Watchers">Watchers</abbr>
                </th>
                <th>
                  <abbr title="Number of Forks">Forks</abbr>
                </th>
                <th>
                  <abbr title="Number of Issues">Issues</abbr>
                </th>
                <th>
                  <abbr title="Link to Github Repo">GitHub</abbr>
                </th>
              </tr>
            </thead>
            <tbody>
            {this.state.repos.map(repo => (
              <tr key={repo.id}>
                <td>{repo.name}</td>
                <td data-full-date={repo.updated_at}>
                  {this.formatDate(repo.updated_at)}
                </td>
                <td>{repo.language}</td>
                <td>{repo.watchers}</td>
                <td>{repo.forks}</td>
                <td>{repo.open_issues}</td>
                <td>
                  <a href={repo.html_url} target="_blank">
                    link
                  </a>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        )
    }
  }
}

Table.propTypes = {
  repos: PropTypes.array
};

Table.defaultProps = {
  repos: []
};

export default Table;
