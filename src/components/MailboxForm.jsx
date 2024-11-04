import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
  boxHolder: "",
  boxSize: "",
};

const MailboxForm = (props) => {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addBox(formData);
    setFormData(initialState);
    navigate("/mailboxes");
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <main>
      <h1>New Mailbox</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxHolder">Box Holder:</label>
        <input
          type="text"
          id="boxHolder"
          name="boxHolder"
          value={formData.boxHolder}
          onChange={handleChange}
        />
        <label htmlFor="boxSize">Box Size:</label>
        <select
          id="boxSize"
          name="boxSize"
          value={formData.boxSize.option}
          onChange={handleChange}
        >
          <option value="">Choose One</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
          <option value="Extra-Large">Extra Large</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default MailboxForm;
