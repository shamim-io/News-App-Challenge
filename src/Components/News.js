import React, { useContext } from 'react'
import { NewsContext } from '../NewsContext'
import NewsArticle from './NewsArticle'
import Nav from './Nav'
import Dropdown from './Dropdown'

const News = () => {
    const { data }  = useContext(NewsContext)
    return (
        <div>
             <div>
                <Nav />
             </div> 
             <div className="selectType" style = {{ marginTop: "100px", marginLeft: "100px", marginRight: "100px" }}>
                 <Dropdown />
                 {/* {console.log(selectItem)} */}
             </div>
             <div>
                 { data
                    ? data.hits.map((news) => (
                        news.title ?
                            <NewsArticle data = {news} key = {news.objectID} /> :
                            ""
                    ))
                    : "Loading................"
                 }
             </div>  
        </div>
    )
}

export default News;