import PropTypes from "prop-types";

export class ContactForm extends Comment {
    state = {
        name: '',
        number: '',
    };

    // Відповідає за оновлення стану
  handleChange = e => {
    const {name, value } = e.target;
    this.setState({ [name]:value });
  };

  // Викликається під час відправлення форми
  handleSubmit = evt => {
    evt.preventDefault();
    const {name, number} = this.state;
    console.log(`Name: ${name}, Number: ${number}`);
    // Проп, який передається формі для виклику під час сабміту
    this.props.onSubmit({ ...this.state });
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Number
          <input
            type="text"
            name="number"
            placeholder="099-222-33-44"
            value={number}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
};
    
ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };