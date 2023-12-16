const reduxState = { count: 1 };
const userData = { users: { 'zabiullahshariefmohammed@gmail.com': 'Zabi123' }, currentUser: 'zabi' }
const students = [
  {
    name: "zabiullah",
    marks: 75
  },
  {
    name: "abhishek",
    marks: 80
  },
  {
    name: "abhipsa",
    marks: 80
  }
];
const todos = {}
export function reducer1(state = reduxState, action) {

  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      if (state.count > 0) {
        return { ...state, count: state.count - 1 };
      }
    default:
      return state;
  }
}
export function studentReducer(state = students, action) {
  switch (action.type) {
    case 'addStudent':
      return [...state, action.payload]
    case 'removestudent':
      const studentArray = state.slice(0, state.length - 1)
      return studentArray;
    default:
      return state;
  }
}
export function userReduce(state = userData, action) {
  const payload = action?.payload
  switch (action.type) {
    case 'addUSer':
      const user = { ...state.users, ...{ [payload.email]: payload.password } }
      return { ...state, users: user };

    case 'setUser':

      return { ...state, currentUser: payload }

    default:
      return state;
  }
}

export function toDoReducer(state = todos, action) {

  const currentUser = action?.payload?.currentUser;
  const todo = action?.payload?.todo?.[currentUser];
  console.log(todo)
  console.log(state)
  switch (action.type) {

    case 'addTodo':

      const existingUser = Object.keys(state).includes(currentUser)
      if (existingUser) {
        const existingTodo = Object.assign([], state[currentUser])
        existingTodo.push(todo)
        return { ...state, [currentUser]: existingTodo }
      }
      else {

        return { ...state, [currentUser]: [todo] }
      }

    default:
      return state;
  }
}



