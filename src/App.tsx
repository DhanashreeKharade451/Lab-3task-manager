import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import TaskList from "./components/TaskList/TaskList.tsx";

import type { Task } from "./types";

function App() {
  //const [count, setCount] = useState(0)

  const textObject: Task[] = [
    {
      id: "1",
      title: "title1",
      description: "",
      status: "pending",
      priority: "low",
      dueDate: "",
    },
    {
      id: "2",
      title: "title2",
      description: "",
      status: "in-progress",
      priority: "medium",
      dueDate: "",
    },
    {
      id: "3",
      title: "title3",
      description: "asdfgh",
      status: "completed",
      priority: "high",
      dueDate: "",
    },
  ];

  // return (
  //   <>
  //     <TaskList tasks={textObject}/>

  //   </>
  // )

  return (
    <div className="space-y-4">
      <div className="flex gap-4 p-4">
        <div>
          <label
            htmlFor="status-filter"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Status
          </label>
          <select
            id="status-filter"
            className="bg-white dark:bg-gray-800 px-2 py-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="all">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="priority-filter"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Priority
          </label>
          <select
            id="priority-filter"
            className="bg-white dark:bg-gray-800 px-2 py-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="all">All Priorities</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
      </div>
      <div className="space-y-4">
        <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-black dark:border-gray-700">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold">Task 1</h3>
              <p className="text-gray-600">Description 1</p>
            </div>
            <div className="flex gap-2">
              <select className="px-2 py-1 rounded bg-white mx-2 bg-yellow-100 text-yellow-800">
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
              <button className="text-red-500 hover:text-red-700">Delete</button>
            </div>
          </div>
          <div className="mt-2 flex gap-4 text-sm">
            <span className="text-green-600">Priority: low</span>
            <span className="text-gray-500">Due: 12/31/2023</span>
          </div>
        </div>
        <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-black dark:border-gray-700">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold">Task 2</h3>
              <p className="text-gray-600">Description 2</p>
            </div>
            <div className="flex gap-2">
              <select className="px-2 py-1 rounded bg-white mx-2 bg-blue-100 text-blue-800">
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
              <button className="text-red-500 hover:text-red-700">Delete</button>
            </div>
          </div>
          <div className="mt-2 flex gap-4 text-sm">
            <span className="text-yellow-600">Priority: medium</span>
            <span className="text-gray-500">Due: 1/1/2024</span>
          </div>
        </div>
        <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-black dark:border-gray-700">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold">Task 3</h3>
              <p className="text-gray-600">Description 3</p>
            </div>
            <div className="flex gap-2">
              <select className="px-2 py-1 rounded bg-white mx-2 bg-green-100 text-green-800">
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
              <button className="text-red-500 hover:text-red-700">Delete</button>
            </div>
          </div>
          <div className="mt-2 flex gap-4 text-sm">
            <span className="text-red-600">Priority: high</span>
            <span className="text-gray-500">Due: 1/2/2024</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
