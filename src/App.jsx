import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GroupCard from './groups/group-card'
import {Link } from 'react-router'

function App() {

  const initialState = {
    searchText: '',
    selectedGroupId: undefined

  }

  const [state, setState] = useState(initialState);
  
  const groupList = [
    { id: 1, name: "Best group" },
    { id: 2, name: "Normal Group" },
    { id: 3, name: "Delulu Group" },
    { id: 4, name: "Just Group" }
  ];

  return (
    <>
      <Link to='/counter'>Go to Counter</Link> {/* we dont have html page thats why we use link and not href. It is single page application */}
      
      {/* text field implementation by using useState, target is the input element, value is the current value of the input.
      onChange is an event handler that is called every time the user types something in the input field.
      setState is used to update the state, we spread the existing state and update only the searchText property with the new value from the input field.
      ... is the spread operator, it is used to copy the existing state properties into a new object, and then we override the searchText property with the new value. 
      This way we ensure that we are not mutating the existing state directly, but creating a new state object with the updated searchText.
      searchText is the property in the state that holds the current value of the input field, and it will be updated every time the user types something in the input field.
      */}
      <br />
      <Link to='/use-effect-demo'>Go to UseEffectDemo</Link>
      <br />
      <input type='text' 
        onChange={({ target: { value } }) => setState({...state, searchText: value})} /> 
      
      {
      groupList.map(({name, id})=> {
        // return group.includes(state.searchText) ?
        // <GroupCard grpName={group} /> :
        // undefined;
        return name.includes(state.searchText) && 
          <GroupCard 
          key={id}
          id={id}
          grpName={name} 
          isSelected={state.selectedGroupId === id}
          onCardClick={(id) => setState({...state, selectedGroupId: id})}
          /> 
      })
      }
    </>
  )
}

export default App