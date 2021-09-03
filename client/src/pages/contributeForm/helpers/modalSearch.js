import React, {useState} from "react";
import Select from 'react-select';

function Search(props){
    const [searchQuery,setQuery] = useState('');
    const [selectedItem, setSelected] = useState({});
    const options = props.itemList?.map((item)=>{
        return {value:item._id,label:item.title}})||[];
    console.log(options);
    // const handleInputChange = (event) => {
    //     event.preventDefault();
    //     const term = event.target.value();
    //     setQuery(term);

    // }

    // const handleSelectChange = (selectedOption) => {
    //     setSelected({selectedOption});
    //     console.log(`Option selected:`, selectedOption);
    // };
    return(
        <div className="container">
        {/*Search Input*/}
        {/* <label className="search-label" htmlFor="search-input">
          <input
            type="text"
            value={searchQuery}
            id="search-input"
            placeholder="Search..."
            onChange={handleInputChange}
          />
          <i className="fa fa-search search-icon" />
        </label> */}
        <Select value={selectedItem} onChange={(selected)=>{setSelected({selected})}} options={options}/>
      </div>
    );
}
export default Search;
