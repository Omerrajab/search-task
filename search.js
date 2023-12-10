import React, { useState } from "react";

const SearchComponent = () => {
    const persons = [
        { name: 'admin', age: 35 },
        { name: 'manager', age: 33 },
        { name: 'user', age: 38 },
        { name: 'developer', age: 31 },
    ]

    const [searchedUsers, setSearchedUsers] = useState([]);

    const searchPerson = (text) => {
        let users = []
        setTimeout(() => {
            persons.forEach(person => {
                if (person.name.includes(text) || person.age == text) {
                    users.push(person)
                }
            })
            setSearchedUsers([...users]);
        }, 1000)

    }

    return (
        <div>
            <input type="text" onChange={(e) => searchPerson(e.target.value)} />
            <h5>searchedUsers</h5>
            <table>

                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
                {searchedUsers.map(user => {
                    return <tr key={Math.random()}>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                    </tr>
                })}

            </table>
        </div>
    )
}

export default SearchComponent;