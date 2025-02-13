import Header from "../Other/Header"
import TaskNumber from "../Other/TaskNumber"
import Tasklist from "../Tasklist/Tasklist"

const EmployeDashBoard = () => {
  return (
    <div className="p-10 bg-stone-700 h-screen">
      <Header/>
      <TaskNumber/>
      <Tasklist/>
    </div>
  )
}

export default EmployeDashBoard