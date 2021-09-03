// import React, {useState} from 'react'
// import Component from 'react';



// export default function Alphabet(){
//     const [searchInput, alphabet] =useState({});
//     onSearchInputChange = (e) => {
//       this.setState({searchInput: e.target.value})
//     }
//     onAlphabetClick = (e) => {
//       this.setState({alphabet: e.target.value})
//     }
//     prepareAlphabets = () => {
//       let result = [];
//       for(let i=65; i<91; i++) {
//         result.push(
//           <button type="button" key={i} onClick={this.onAlphabetClick} value={String.fromCharCode(i)} >{String.fromCharCode(i)}</button>
//         )
//       }
//       return result;
//     }
//     elementContainsSearchString = (searchInput, element) => (searchInput ? element.name.toLowerCase().includes(searchInput.toLowerCase()) : false);
//     filterItems = (itemList) => {
//       let result = [];
//       const { searchInput,alphabet } = this.state;
//       if(itemList && (searchInput || alphabet)) {
//         result = itemList.filter((element) => (element.name.charAt(0).toLowerCase() === alphabet.toLowerCase()) || 
//         this.elementContainsSearchString(searchInput, element));
//       } else {
//         result = itemList || [];
//       }
//       result = result.map((item)=> (<li>{item.name}</li>))
//       return result;
//     }
//       render() 
//           const itemList = [{id: 1, name:'abcd'},{id: 2, name:'gfhj'}, {id: 3, name:'fh'}, {id: 4, name:'zxbv'}, {id: 5, name:'ewyur'}, {id: 6, name:'gsdjhbndf'}, {id: 7, name:'gbhfvd'}, {id: 8, name:'wgtaqe'}, {id: 1, name:'ab'}, {id: 1, name:'bcd'}, {id: 1, name:'cde'}];
//           // const itemList = undefined;
//         const filteredList = this.filterItems(itemList);
//       return (
//         <div>
//           <input type="search" onChange={this.onSearchInputChange} />
//           {this.prepareAlphabets()}
//           <ul>
//             {filteredList}
//           </ul>
//         </div>
//       );
// }
