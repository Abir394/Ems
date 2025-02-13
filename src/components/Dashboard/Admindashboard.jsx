import AllTask from '../Other/AllTask';
import Createtask from '../Other/Createtask';
import Header from '../Other/Header';

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-6 bg-gray-900 text-white">
      <Header />
      <Createtask /> 
      <AllTask /> 
    </div>
  )
}

export default AdminDashboard;
