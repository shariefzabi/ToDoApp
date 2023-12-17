import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const TodoForm = () => {
    const currentUser = useSelector((state) => state.userReduce)?.currentUser;
    const dispatch = useDispatch()
    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState('');
    const [assignee, setAssignee] = useState('');
    const [status, setStatus] = useState('');
    const [notes, setNotes] = useState('');
    const [category, setCategory] = useState('');
    const [errors, setErrors] = useState({
        task: '',
        description: '',
        dueDate: '',
        priority: '',
        assignee: '',
        status: '',
        notes: '',
    });

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
            dispatch({ type: 'addTodo', payload: { todo: { [currentUser]: todo }, currentUser } })
            alert('todo created succesfully')
        }


        // If all validations pass, submit the form

    };

    return (
        <div className="container mt-5">
            <h2>ToDo Form</h2>
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
    );
};

export default TodoForm;
