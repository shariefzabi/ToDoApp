import React, { useState, useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './viewTodo.css'
import { v4 as uuidv4 } from 'uuid';

const TodoForm = () => {
    const [disableSave, setDisableSave] = useState(true)
    const currentUser = useSelector((state) => state.userReduce)?.currentUser;
    const storeTodos = useSelector((state) => state?.toDoReducer)?.[currentUser]
    const [todos, setTodos] = useState(storeTodos)
    const dispatch = useDispatch()
    const handleModalOpen = (e) => {
        const { id } = e.target
        const modal = document.getElementById(`Modal-${id}`);
        if (modal) {
            modal.style.display = 'block';
        }
        document.body.classList.add('custom-backdrop');
    };
    const deleteHandler = (e) => {
        const index = e.target.id.split('-index-')[1]
        console.log('index', index)
        const newTodo = Object.assign([], todos)
        newTodo.splice(index, 1)
        setDisableSave(false)
        setTodos(newTodo)
    }
    function refreshHandler() {
        setTodos(storeTodos)
    }
    const saveHandler = useCallback(() => {
        dispatch({ type: 'ModifyTodo', payload: { todos, currentUser } })
    }, [todos])
    return (
        < ViewToDo />
    )

    function ViewToDo() {

        if (todos?.length > 0) {

            return (
                <>
                    <h1 style={{ textAlign: 'center' }}>Todos</h1>
                    <div>
                        <div style={{ textAlign: 'end' }}>
                            <button onClick={() => saveHandler()} disabled={disableSave} className='btn btn-success mr-2'>Save</button>
                            <button onClick={() => refreshHandler()} className='btn btn-primary mr-2'>refresh</button>
                        </div>
                        {
                            (todos.map((ele, index) => {
                                const id = `${uuidv4()}-index-${index}`
                                return (
                                    <div className="todo mb-2 mt-1" key={id}>
                                        <h4>taskName:{ele.task}</h4>
                                        <div style={{ textAlign: 'end' }}>
                                            <button id={index} className='btn btn-primary' onClick={handleModalOpen}>View/Edit</button>
                                            <button id={id} onClick={deleteHandler} className='btn btn-danger'>delete</button>
                                        </div>
                                        <Modal index={index} modalTodo={ele} setTodos={setTodos}></Modal>
                                    </div>
                                )
                            }))
                        }

                    </div>
                </>

            );
        }
        else {
            return <h2>No Todos ,add Todos</h2>
        }
    }
    function Modal({ modalTodo, index, setTodos }) {
        console.log('myPropss', modalTodo)
        const [task, setTask] = useState(modalTodo.task);
        const [description, setDescription] = useState(modalTodo.description);
        const [dueDate, setDueDate] = useState(modalTodo.dueDate);
        const [priority, setPriority] = useState(modalTodo.priority);
        const [assignee, setAssignee] = useState(modalTodo.assignee);
        const [status, setStatus] = useState(modalTodo.status);
        const [notes, setNotes] = useState(modalTodo.notes);
        const [category, setCategory] = useState(modalTodo.category);
        const [errors, setErrors] = useState({
            task: '',
            description: '',
            dueDate: '',
            priority: '',
            assignee: '',
            status: '',
            notes: '',
        });
        console.log()
        const handleModalClose = () => {
            const modal = document.getElementById(`Modal-${index}`);
            if (modal) {
                modal.style.display = 'none';
            }
            document.body.classList.remove('custom-backdrop');
        };
        const handleSubmit = (e) => {
            e.preventDefault();
            // Validation logic for each field
            const validationErrors = {};

            if (!task.trim()) {
                validationErrors.task = 'Task is required';
            }

            if (!description.trim()) {
                validationErrors.description = 'Description is required';
            }

            if (!dueDate.trim()) {
                validationErrors.dueDate = 'Due Date is required';
            }

            if (!priority.trim()) {
                validationErrors.priority = 'Priority is required';
            }

            if (!assignee.trim()) {
                validationErrors.assignee = 'Assignee is required';
            }

            if (!status.trim()) {
                validationErrors.status = 'Status is required';
            }

            if (!category.trim()) {
                validationErrors.category = 'Category is required';
            }

            // Set errors if any field is empty
            if (Object.keys(validationErrors).length > 0) {
                setErrors(validationErrors);
                return;
            }
            else {
                console.log('came')
                const todo = {
                    task,
                    description,
                    dueDate,
                    priority,
                    assignee,
                    status,
                    notes,
                    category
                }
                const cloneOFTodos = Object.assign([], todos)
                cloneOFTodos[index] = todo
                setTodos(cloneOFTodos)
                setDisableSave(false)
                handleModalClose()
            }
        };
        return (
            <div className="modal" id={`Modal-${index}`} tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                                onClick={handleModalClose}
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="task" className="form-label">
                                        Task <span style={{ fontSize: '20px' }} className='text-danger'>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="task"
                                        value={task}
                                        onChange={(e) => setTask(e.target.value)}
                                    />
                                    {errors.task && <div className="text-danger">{errors.task}</div>}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">
                                        Description <span style={{ fontSize: '20px' }} className='text-danger'>*</span>
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    ></textarea>
                                    {errors.description && (
                                        <div className="text-danger">{errors.description}</div>
                                    )}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="category" className="form-label">
                                        Category <span style={{ fontSize: '20px' }} className='text-danger'>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="category"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                    />
                                    {errors.category && (
                                        <div className="text-danger">{errors.category}</div>
                                    )}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="dueDate" className="form-label">
                                        Due Date <span style={{ fontSize: '20px' }} className='text-danger'>*</span>
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="dueDate"
                                        value={dueDate}
                                        onChange={(e) => setDueDate(e.target.value)}
                                    />
                                    {errors.dueDate && (
                                        <div className="text-danger">{errors.dueDate}</div>
                                    )}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="priority" className="form-label">
                                        Priority <span style={{ fontSize: '20px' }} className='text-danger'>*</span>
                                    </label>
                                    <select
                                        className="form-control"
                                        id="priority"
                                        value={priority}
                                        onChange={(e) => setPriority(e.target.value)}
                                    >
                                        <option value="">Select Priority</option>
                                        <option value="low">Low</option>
                                        <option value="medium">Medium</option>
                                        <option value="high">High</option>
                                    </select>
                                    {errors.priority && (
                                        <div className="text-danger">{errors.priority}</div>
                                    )}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="assignee" className="form-label">
                                        Assignee <span style={{ fontSize: '20px' }} className='text-danger'>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="assignee"
                                        value={assignee}
                                        onChange={(e) => setAssignee(e.target.value)}
                                    />
                                    {errors.assignee && (
                                        <div className="text-danger">{errors.assignee}</div>
                                    )}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="status" className="form-label">
                                        Status <span style={{ fontSize: '20px' }} className='text-danger'>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="status"
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}
                                    />
                                    {errors.status && (
                                        <div className="text-danger">{errors.status}</div>
                                    )}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="notes" className="form-label">
                                        Notes
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="notes"
                                        value={notes}
                                        onChange={(e) => setNotes(e.target.value)}
                                    ></textarea>
                                    {errors.notes && (
                                        <div className="text-danger">{errors.notes}</div>
                                    )}
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={handleModalClose}
                            >
                                Close
                            </button>
                            {/* Add your other buttons or form elements */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};



export default TodoForm;
