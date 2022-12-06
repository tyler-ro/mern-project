import React, { useState } from "react";
import UpdateUserModal from "../../components/UpdateUserModal/UpdateUserModal";


export default function Home({user,setUser}) {
  const [modalOpened, setModalOpened] = useState(false);
 
  return (
    <>
      <div>Home Page</div>
      <div>
        <button onClick={() => setModalOpened(true)}>Edit Profile</button>
        <UpdateUserModal
          modalOpened={modalOpened}
          setModalOpened={setModalOpened}
          user={user}
          setUser={setUser}
        />
       
      </div>
    </>
  );
}
