

const UserItems = ({user}) => {
   const handleClick  = (e) =>  {
        console.log(e.currentTarget.id)
    }

    return (
        <div id={user.id} onClick={handleClick}>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
        </div>
    )
}

export default UserItems