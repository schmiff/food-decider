import {collection, onSnapshot, query} from 'firebase/firestore'
import React, { useState, useEffect } from 'react'
import { db } from '../firebase'

const RestoList = () => {
  const [restos, setRestos] = useState([])

  useEffect(() => {
    const collectionRef = collection(db, "test_id")

    const q = query(collectionRef)
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setRestos(querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id, name: doc.data().name})))
    })
    return unsubscribe
  }, [])
  return(
    <div className={className.container}>
      <div>
        {restos.map(resto => <div className={className.list_item} key={resto.id}>{ resto.name }</div>)}
      </div>
    </div>
  )
  }
  const className = {
    container: "bg-blue-300 ",
    list_item: "text-4xl",
  }
  export default RestoList
