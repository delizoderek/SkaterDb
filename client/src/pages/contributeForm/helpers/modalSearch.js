import React, {useState} from "react";

function search(props){
    const [searchQuery,setQuery] = useState('');
    const [itemList, setList] = useState([...props.itemList]);
    const handleInputChange = (event) => {
        event.preventDefault();
        setQuery(event.target.value);
        
    }
    return(
        <div className="container">
        {/*Search Input*/}
        <label className="search-label" htmlFor="search-input">
          <input
            type="text"
            value={searchQuery}
            id="search-input"
            placeholder="Search..."
            onChange={handleInputChange}
          />
          <i className="fa fa-search search-icon" />
        </label>
      </div>
    );
}
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      results: {},
      loading: false,
      message: "",
    };
  }

  handleOnInputChange = (event) => {
    const query = event.target.value;
    if (!query) {
      this.setState({ query, results: {}, message: "" });
    } else {
        this.setState({ query, loading: true, message: "" });
    }
  };

  handleOnInputChange = (event) => {
    const query = event.target.value;
    if (!query) {
      this.setState({ query, results: {}, message: "" });
    } else {
      this.setState({ query, loading: true, message: "" }, () => {
        this.fetchSearchResults(1, query);
      });
    }
  };

  render() {
    return (
      <div className="container">
        {/*Heading*/}
        <h2 className="heading">Live Search: React Application</h2>{" "}
        {/*Search Input*/}
        <label className="search-label" htmlFor="search-input">
          <input
            type="text"
            value=""
            id="search-input"
            placeholder="Search..."
            onChange={this.handleOnInputChange}
          />
          <i className="fa fa-search search-icon" />
        </label>
      </div>
    );
  }
}
export default Search;
