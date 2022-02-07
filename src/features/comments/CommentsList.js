import React, {useEffect} from "react"
import {CircularProgress} from "@mui/material"
import {CommentCard} from "./CommentCard"

export const CommentsList = () =>{


    const renderedComments = movies.map(comment => (
        <CommentCard key={comment.id} book={comment.book} name={book.name} description={book.description} />
      ))

    return(
        <div>
          {(pending) ? <CircularProgress /> : <>{renderedComments}</>}
        </div>
      )
}