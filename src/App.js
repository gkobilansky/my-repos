import React, { Component } from 'react';
import { getRepo } from './api/github';
import './App.css';
import Header from './components/Header';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Modal from './components/Modal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repoData: [],
      currentRepo: {},
      modalActive: false
    };
    this.handleRepoClick = this.handleRepoClick.bind(this);
    this.formatDate = this.formatDate.bind(this);
  }

  handleRepoClick(e, repo) {
    this.setState({ currentRepo: repo, modalActive: true });
  }

  formatDate(data) {
    let date = new Date(data);
    return (
      date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear()
    );
  }

  componentDidMount() {
    getRepo('gkobilansky').then(response => {
      this.setState({ repoData: response.data });
    });
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }
  render() {
    const columns = [
      {
        Header: 'Name',
        accessor: 'name'
      },
      {
        Header: 'Updated',
        accessor: 'updated_at',
        Cell: props => this.formatDate(props.value)
      },
      {
        Header: 'Primary Language',
        accessor: 'language'
      },
      {
        Header: 'Watchers',
        accessor: 'watchers',
        width: 100
      },
      {
        Header: 'Forks',
        accessor: 'forks', // Custom value accessors!
        width: 75
      },
      {
        Header: 'Issues', // Custom header components!
        accessor: 'open_issues',
        width: 75
      },
      {
        Header: 'Github', // Custom header components!
        accessor: 'html_url',
        Cell: props => (
          <a href={props.value} target="_blank">
            Link
          </a>
        )
      }
    ];
    return (
      <div className="App">
        <Header />
        <section className="section">
          <div className="container">
            <ReactTable
              data={this.state.repoData}
              columns={columns}
              className="table -striped -highlight"
              getTdProps={(state, rowInfo, column, instance) => {
                return {
                  onClick: (e, handleOriginal) => {
                    if (column.Header !== 'Github') {
                      this.handleRepoClick(e, rowInfo.original);
                    }
                    if (handleOriginal) {
                      handleOriginal();
                    }
                  }
                };
              }}
            />
          </div>
          <Modal
            repo={this.state.currentRepo}
            repoOwner={this.state.currentRepo.owner}
            active={this.state.modalActive}
          />
        </section>
      </div>
    );
  }
}

export default App;
