import { Modal, useMantineTheme } from "@mantine/core";

export default function UpdateUserModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  function handleChange(e) {}

  function handleSubmit(e) {}

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form onSubmit={handleSubmit}>
        <h3>Your Info</h3>
        <div>
          <input
            value=""
            onChange={handleChange}
            type="text"
            className="infoInput"
            name="firstname"
            placeholder="First Name"
          />

          <input
            value=""
            onChange={handleChange}
            type="text"
            className="infoInput"
            name="lastname"
            placeholder="Last Name"
          />
        </div>

        <button type="submit">Update</button>
      </form>
    </Modal>
  );
}
