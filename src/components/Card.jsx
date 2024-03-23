import React, { useState } from 'react'
import styles from './Card.module.css';
export default function Card() {
  const [wish,setWish]=useState();
  const [arrwish,setArrwish]=useState([]);
  function handleDelete(index){
    // delete list[props.i]

    
    // let temp=[...list]
    // temp.splice(index,1)
    // list=[...temp]
    let temp=[...arrwish]
    temp.splice(index,1)
    setArrwish(temp)
  }
  function handleDeleteAll(){
    list.splice(0);
  }
  function handleSubmit(e){
    e.preventDefault();
    setArrwish([...arrwish,wish])
  }
  function handleChange(e){
    e.preventDefault();
    setWish(e.target.value)
  }
  
  let list=arrwish.map((value,index)=><li className={styles.li} key={index}>{value}
  <button onClick={()=>handleDelete(index)} className={styles.delete}>
    delete
  </button>
    </li>)
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.form}>
            <form action="" >
                <label htmlFor="wish" className={styles.view}>Wish :</label>
                <input type="text" name='wish' id='wish' className={styles.input} onChange={handleChange}/>
                <button className={styles.btn} onClick={handleSubmit}>submit</button>
                <button className={styles.btn} onClick={handleDeleteAll}>clear All</button>
            </form>
        </div>
        <div className={styles.display}>
          <h1 className={styles.h}>WishList</h1>
          {list}
        </div>
      </div>
    </div>
  )
}
