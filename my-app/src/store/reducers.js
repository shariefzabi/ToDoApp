const reduxState = { count: 1 };
const userData ={'zabiullahshariefmohammed@gmail.com':'Zabi123'}
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
export function ToDoReducer(state = userData, action) {
  switch (action.type) {
    case 'addUSer':
      const {payload} =action
      return {...state,...payload }
   
    default:
      return state;
  }
}
