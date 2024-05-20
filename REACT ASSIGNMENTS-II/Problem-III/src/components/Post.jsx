function Post({ title, body, avatar, first_name,id }) {
  return (
    <div>
    <p>{id}</p>
      <img src={avatar} alt={first_name} />
      <p>Title : {title}</p>
      <p>Body : {body}</p>
    </div>
  );
}

export default Post;
