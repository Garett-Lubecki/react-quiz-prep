import UserItems from './UserItems'

const Users = ({users}) => {
    console.log(users)
    return users.map( (user)=> (
        <UserItems user={user}/>
    ))
}

export default Users