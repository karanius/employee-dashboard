import React,{useState,useEffect} from 'react';
import './employee-list.styles.scss';

import Row from '../row/row.component';

const EmployeeList = ({inputValue}) => {
  
  const [order , setOrder] = useState(null);
  const [list , setList] = useState(null);

  useEffect(()=>{

    document.querySelector('.x').addEventListener('click', ()=>{
      if (document.querySelector('.x').classList.contains("name-carrot-up")){
        document.querySelector('.x').classList.add("name-carrot-down");
        document.querySelector('.x').classList.remove("name-carrot-up");
        setList(inputValue)
        setOrder('up')
      } else {
        document.querySelector('.x').classList.remove("name-carrot-down");
        document.querySelector('.x').classList.add("name-carrot-up");
        setList(inputValue)
        setOrder('down')
      }
    })  
    document.querySelectorAll('.y').forEach(elem=>{
      elem.addEventListener('click',()=>{
        document.querySelector('.x').classList.remove("name-carrot-down");
        document.querySelector('.x').classList.remove("name-carrot-up");
        setOrder(null)
      })
    })
  },[])

  useEffect(()=>{
    if(inputValue){
      setList(inputValue)
    }
  },[inputValue])
  

  useEffect(()=>{
    let a;
    if (inputValue){
      if(order === 'down') {
        a = inputValue.sort((a,b)=>{
          if(a.name < b.name) { return -1; }
          if(a.name > b.name) { return 1; }
          return 0;
        })
      } else if (order === 'up'){
        a = inputValue.sort((a,b)=>{
          if(a.name > b.name) { return -1; }
          if(a.name < b.name) { return 1; }
          return 0;
        })
      } else if (order === null) {
        a = inputValue
      }
      console.log(inputValue,a)
      setList(a)
    }
  },[order])


  return(
    <div className="EmployeeList">
      <div className="carrot-wrapper">
        <div className="x carrot">Name</div>
        <div className="y carrot">email</div>
        <div className="y carrot">phone</div>
      </div>

      {
        list ?
          list.map(user=>{
            return <Row key={user.id} {...user} /> 
          })
          : null
      }

    </div>
  )
}

export default EmployeeList;