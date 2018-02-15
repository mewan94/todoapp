export var nameReducer =(state={logedin : false , name : 'Anonymous'},action) =>{
  switch (action.type){
      case 'CHANGE_NAME':
          return {
              logedin:true,
              name:action.name
          };
      case 'LOG_OUT':
          return{
              logedin:false,
              name:'Anonymous'
          };
      default:
          return state;
  }
};

export var todoReducer =(state={isFetching: false , todos:[], completed:[] }, action) =>{
    switch (action.type){
        case 'ADD_TODO':
            var ntodo={
                id: action.id,
                userid: action.userid,
                name: action.name,
                created_at:action.created_at,
                updated_at:action.updated_at,
                status:action.status
            };
            return{
                isFetching:false,
                todos:[
                    ...state.todos,ntodo
                ]
            };
        case 'DELETE_TODO':
            return {
                isFetching: false,
                todos:state.todos.filter((todo) => todo.id !== action.id)
            };
        case 'START_FETCH_TODOS':
            return {
                isFetching:true,
                todos:state.todos
            };
        case 'END_FETCH_TODOS':
            return{
                isFetching:false,
                todos:action.todosarray
            };
        case 'START_ADD_TODO':
            return{
                isFetching:true,
                todos:state.todos
            };
        case 'END_ADD_TODO':
            return{
                isFetching:false,
                todos:[
                    ...state.todos,
                    action.newtodo
                ]
            };
        case 'MARK_TODO':
            var ctodo=state.todos.filter((todo)=>todo.id===action.id);
            ctodo[0].status=1;
            return{
                isFetching:false,
                todos:[
                    ...state.todos.filter((todo)=>todo.id!==action.id),ctodo[0]
                ]
            };
        case 'UNMARK_TODO':
            var ctodo=state.todos.filter((todo)=>todo.id===action.id);
            ctodo[0].status=0;
            return{
                isFetching:false,
                todos:[
                    ...state.todos.filter((todo)=>todo.id!==action.id),ctodo[0]
                ]
            };
        case 'LOG_OUT':
            return{
                isFetching:false,
                todos:[]
            };
        default:
            return state;
    }
};

