import React from 'react'

export default function UsersList() {
  async function getAllUsers(req, res) {
    try {
      // const users = await User.find({});
      res.status(200);
    } catch (error) {
      res.status(400).json(error);
    }
  }


  //map function user.name
/* <div>
{users.map((user, userIndex) => (
  <div key={userIndex}>
))}
</div> */

  return (
    <>
    <div style={{border: "1px solid black"}}>
      This UsersList gets data from DB of all users
      <ul>
        <li>User #1 </li>
        <li>User #2 </li>
        <li>User #3 </li>
        <li>User #... </li>
      </ul>
    </div>
  </>
  )
}


