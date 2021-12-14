
function TodoItems({item, id, handleClick2Delete}){

  return(
    <li id={id} onClick={ _ => handleClick2Delete(id)}>{item}</li>
  );
}
export default TodoItems
