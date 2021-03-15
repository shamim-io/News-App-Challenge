import React, { useEffect, useState, createContext } from 'react'
import './App.css';
import axios from 'axios'

export const NewsContext = createContext()

export const NewsContextProvider = (props) => {
  const [data, setData] = useState()
  const [filter, setFilter] = useState("")
  const [ query, setQuery ] = useState("")

  console.log(data)

  function category(d) {
    setFilter(d)
  }

  function search(searchTerm) {
    setQuery(searchTerm)
  }

  console.log("mnnjnjnnnnnnnnnnnnnn", filter)
  console.log(query)

  useEffect(() => {
    axios.get(`http://hn.algolia.com/api/v1/search?query=${query}&tags=${filter}`).then(response => setData(response.data))
    .catch(error => console.log(error))
  }, [filter, query])

  return (
    <NewsContext.Provider value = {{data, category, search}}>
        { props.children }
    </NewsContext.Provider>
  );
}

