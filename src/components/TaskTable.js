const TaskTable = ({array}) => {
    const table = [];
    for (let i in array) {
        if (array[i]){
            table.push(<div key={i} id="eventSquare"></div>);
        } else {
            table.push(<div key={i} id="freeSquare"></div>);
        }
    }
    return (
        <div className='tasks'>
            {table}
        </div>
    )
}

export default TaskTable
     