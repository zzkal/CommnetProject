

export const  CommentCard = (props) =>  {

    <Card sx={{marginBottom: 4}}>
    <CardContent>
      <Typography variant="h5" component="div">
        {props.movie.title}
      </Typography>
      <p>{props.movie.category}</p>
      <p>{props.movie.likes}</p>
      <Stack direction="row" spacing={2}>
        <Button startIcon={<PlusOne />} variant={"contained"} onClick={handleClick}>like + 1</Button>
        <Button startIcon={<Delete />} variant={"contained"} onClick={handleDelete}>Delete</Button>
      </Stack>
      </CardContent>
  </Card>
}    

export default CommentCard