import React,{useState , useEffect} from 'react';
import './middle.styles.scss';

import SerchInput from '../search-input/search-input.component.jsx';
import EmployeeList from '../employee-list/employee-list.component';

const Middle = () => {
  
  const [userList , setUserList] = useState();
  const [searchField , setSearchField] = useState();
  const [filteredList,setFilteredList] = useState()
  // const [inputValue , setInputValue] = useState();

  const adjustScreen = () => {
    const footerHeight = document.querySelector('.Footer').offsetHeight;
    const headerHeight = document.querySelector('.Header').offsetHeight;
    const totalWindowHeight = window.innerHeight
    document.querySelector('.Middle').style.height = (totalWindowHeight - footerHeight - headerHeight ) + 'px';

    const MiddleHeight = document.querySelector('.Middle').offsetHeight;
    const inputHeight = document.querySelector('.input-wrapper').offsetHeight;
    document.querySelector('.EmployeeList').style.height = (MiddleHeight - inputHeight)  + 'px'
  }

  useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(res=>setUserList(res))

    adjustScreen()
    window.addEventListener('resize',adjustScreen)
    return ()=>{
      window.removeEventListener('resize',adjustScreen)
    }
  },[])

  const inputOnChangeHanlde = (e) => {
    setSearchField(e.target.value)
  }

  useEffect(()=>{
    if(userList){
      setFilteredList(userList)
    }
  },[userList])


  useEffect(()=>{
    let filteredUserList
    if(userList){
      filteredUserList = userList.filter(user =>{
        return user.name.toLowerCase().includes(searchField.toLowerCase())
      })
      setFilteredList(filteredUserList)
    }
  },[searchField])

  return (
    
    <div className="Middle">
      <SerchInput inputOnChangeHanlde={inputOnChangeHanlde} />
      <EmployeeList inputValue={filteredList} />
    </div>
  )
}


export default Middle