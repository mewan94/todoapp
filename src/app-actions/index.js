import axios from 'axios';

var instance = axios.create({
    baseURL: 'http://localhost:8000/api/',
    headers: {'Accept': 'application/json','Authorization':'Bearer '+localStorage.getItem('token')}
});
export var initlogin =() =>{
   return(dispatch) =>{
       instance.get('user',{
           headers:{'Accept': 'application/json','Authorization':'Bearer '+localStorage.getItem('token')}
       }).then((res)=>{
           dispatch(changeName(res.data.name));
           //dispatch(getTodos());
       });
   }
};

export var checklogedin = () =>{
    return function (dispatch) {
        if(localStorage.getItem('token')!==null){
            dispatch(initlogin());
            return(dispatch) => {
                dispatch(initlogin());
            }
        }
    }

};

export var login = (username,password) =>{
    return (dispatch) =>{
        instance.post('login',{
            email: username,
            password: password
        }).then((res) =>{
            localStorage.setItem('token',res.data.success.token);
            dispatch(initlogin());
            dispatch(getTodos());
        });
    };
};

export var logout = () => {
    localStorage.removeItem('token');
    return{
        type:'LOG_OUT'
    }
};

export var changeName =(name)=>{
  return{
      type:'CHANGE_NAME',
      name
  }
};

export var startGettingTodos= () =>{
    return{
        type:'START_FETCH_TODOS'
    }
};

export var endGettingTodos= (todosarray) =>{
    return{
        type:'END_FETCH_TODOS',
        todosarray
    }
};

export var getTodos =()=>{
    return (dispatch) =>{
        dispatch(startGettingTodos());
        instance.get('todos',{
            headers:{'Accept': 'application/json','Authorization':'Bearer '+localStorage.getItem('token')}
        })
            .then(function (response) {
                var todos=response.data;
                dispatch(endGettingTodos(todos));
            })
            .catch(function (error) {
                return null;
            });
    };
};

export var startAddTodo=() =>{
    return{
        type:'START_ADD_TODO'
    }
};

export var endAddTodo=(id,userid,name,created_at,updated_at,status)=>{
    return{
        type:'ADD_TODO',
        id,
        userid,
        name,
        created_at,
        updated_at,
        status:0
    }
};

export var addTodo =(todo)=>{
     return(dispatch) =>{
         dispatch(startAddTodo());
         instance.post('todos/save',{
             todoname:todo,
             status:false,
         },{headers: {'Accept': 'application/json','Authorization':'Bearer '+localStorage.getItem('token')}}).then((res)=>{
             dispatch(endAddTodo(res.data.id,res.data.userid,res.data.name,res.data.created_at,res.data.updated_at,res.data.status));
         })
     };
 };

export var startDeleteTodo= (id)=>{
    return(dispatch)=>{
        instance.post('todos/delete',{
            id:id
        },{headers: {'Accept': 'application/json','Authorization':'Bearer '+localStorage.getItem('token')}}).then((res)=>{
            dispatch(deleteTodo(id));
        })
    }
};

export var deleteTodo = (id) =>{
     return{
         type:'DELETE_TODO',
         id
     }
 };

export var startmarktodo =(id)=>{
    return (dispatch) =>{
        instance.post('todos/check',{
            id:id
        },{headers: {'Accept': 'application/json','Authorization':'Bearer '+localStorage.getItem('token')}}).then((res)=>{
            dispatch(marktodo(id));
        });
    };
};

export var marktodo =(id)=>{
    return{
        type:'MARK_TODO',
        id
    }
};

export var startunmarktodo=(id)=>{
    return (dispatch)=>{
        instance.post('todos/uncheck',{
            id:id
        },{headers: {'Accept': 'application/json','Authorization':'Bearer '+localStorage.getItem('token')}}).then((res)=>{
            dispatch(unmarktodo(id))
        });
    }
};

export var unmarktodo = (id) =>{
    return{
        type:'UNMARK_TODO',
        id
    }
};

export var register = (name,email,password,c_password) => {
    return(dispatch)=>{
        console.log('sd');
        instance.post('register',{
            name:name,
            email:email,
            password:password,
            c_password:c_password
        }).then((res)=>{
            console.log('sd');
            localStorage.setItem('token',res.data.success.token);
            dispatch(initlogin());
            dispatch(getTodos());
        })
    }
};