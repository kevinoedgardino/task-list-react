function Item({ event, isEditing }) {
    /* if (isEditing) {
      return <button className='bg-cyan-300 text-white p-2'>Edit Task</button>
    }
    return <button className='bg-cyan-300 text-white p-2'>Add Task</button> */

    return isEditing 
    ? <button className='bg-cyan-300 text-white p-2' onClick={event}>Edit Task</button>
    : <button className='bg-cyan-300 text-white p-2' onClick={event}>Add Task</button> 
}

export default Item