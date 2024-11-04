import { Link } from "react-router-dom";

const MailboxList = (props) => {
  const { mailboxes } = props;

  return (
    <>
      <h1>Mailbox List</h1>
      <ul>
        {mailboxes.map((mailbox) => (
          <li
            key={mailbox._id}
            className="mail-box"
          >
            <Link to={`/mailboxes/${mailbox._id}`}>
              Mailbox ID: {mailbox._id}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MailboxList;
