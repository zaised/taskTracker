import TaskTable from './components/TaskTable';
export default App;

const startProps = {
  startTime: 540,
  endTime: 745,
  step: 15,
  activatedNumbers: [
  { start: 540, end: 555 },
  { start: 555, end: 570 },
  { start: 570, end: 585 },
  { start: 585, end: 600 },
  { start: 645, end: 660 },
  { start: 700, end: 745 }
  ]
};
 // Сделать массив нужного размера
 
  let timelineArray = [];
 
 for (let i = 0; i<(startProps.endTime-startProps.startTime)/startProps.step; i++){
   timelineArray.push(false);
 };
  
// Заполнить нужные элементы

 for (let a in startProps.activatedNumbers){
    addNewTask(timelineArray, startProps.activatedNumbers[a])
 };
 
function addNewTask(arr, task){
  // Проверить есть-ли свободное место
  for (let i = task.start/startProps.step; i<(task.start-task.end)/startProps.step; i++) {
    if (arr[i]) return "Place Taken";
  }
  let tempStart = task.start;
  // Если задача дольше одного шага, заполнить несколько шагов
     while(tempStart<task.end){
       arr[(tempStart-startProps.startTime)/startProps.step] = true;
       tempStart += startProps.step;
     }       
}

 
function App() {
  return (
    <div className="App">
      <TaskTable array={timelineArray} />
    </div>
  );
}
