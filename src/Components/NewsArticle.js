import React from 'react'
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";

function NewsArticle({ data }) {
    let d = new Date(data.created_at)
    return (
        <MDBContainer style = {{ margin: "20px auto",  }}>
            <MDBListGroup style={{ width: "100%" }}>
                <MDBListGroupItem hover href= { data.url }>
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{ data.title }</h5>
                        <small>{ d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear() }</small>
                    </div>
                    <p className="mb-1">{ data.url}</p>
                    <small> { data.author }</small>
                </MDBListGroupItem>
            </MDBListGroup>
        </MDBContainer>
    )
}

export default NewsArticle
