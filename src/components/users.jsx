import React, { useState } from 'react';
import api from '../api';

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());

    const handleDeleteUser = (userId) => {
        setUsers(users.filter(user => userId !== user._id));
    };
    const renderPhrase = (num) => {
        const lastOne = Number(num.toString().slice(-1));
        if (num > 4 && num < 15) return 'человек тусанёт';
        if ([2, 3, 4].indexOf(lastOne) >= 0) return 'человека тусанут';
        return 'человек тусанёт'
    };

    return (
        <div className='container w-75 mt-3' style={{outline: 'none'}}>
            <div className='d-flex justify-content-center'>
                <span
                    className={`badge 
                bg-${users.length > 0 ? 'primary' : 'danger'} 
                rounded text-white p-2 w-50 fs-4 fw-normal text-center`}
                >
                {users.length > 0
                    ? `${users.length} ${renderPhrase(users.length)} с тобой сегодня`
                    : 'Никто с тобой сегодня не тусанёт :('}
            </span>
            </div>
            {users.length > 0 &&
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Имя</th>
                        <th scope="col">Качества</th>
                        <th scope="col">Профессия</th>
                        <th scope="col">Встретился (раз)</th>
                        <th scope="col">Оценка</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user =>
                            <tr key={user._id} className='align-middle'>
                                <td>{user.name}</td>
                                <td>{user.qualities.map(q =>
                                    <span
                                        key={q._id}
                                        className={`bg-${q.color} p-1 me-1 rounded text-light`}
                                    >
                                        {q.name}
                                    </span>)}
                                </td>
                                <td>{user.profession.name}</td>
                                <td>{user.completedMeetings}</td>
                                <td>{user.rate}</td>
                                <td>
                                    <button
                                        className='btn btn-danger'
                                        onClick={() => handleDeleteUser(user._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            }
        </div>
    );
};

export default Users;