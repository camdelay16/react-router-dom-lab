import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {
  const { mailboxes } = props;

  const { mailboxId } = useParams();
  const mailbox = mailboxes.find((box) => box._id === Number(mailboxId));
  console.log("mailbox object", mailbox);

  if (!mailbox) {
    return <h1>Mailbox does not exist</h1>;
  }

  return (
    <>
      <h1>Mailbox {mailbox._id}</h1>
      <h3>Details</h3>
      <dl>
        <dt>Box Holder: {mailbox.boxHolder}</dt>
        <dt>Box Size: {mailbox.boxSize}</dt>
        <dt>ID: {mailbox._id}</dt>
      </dl>
    </>
  );
};

export default MailboxDetails;
