import { User } from "lucide-react"

type UserListProps = {
    id:number,
    name:string
}

async function fetchUsers():Promise<UserListProps[]>{
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve([
                {id:1,name:'Alice'},
                {id:2,name:'Carlos'}
            ])
        },2000)
    })
}


async function  UserList(){
    const UserList = await fetchUsers();
    return (
        <div>
            {UserList.map((user) =>(
                <p key={user.id} >{user.name}</p>
            ))}
        </div>
    )
}

export default function UserListPage(){
    return(
        <>
         <h2>User List</h2>
         <UserList/>
        </>
    )
}