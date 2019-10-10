import React, {Component} from 'react';
import './AddTestimonialPage.css';

class AddTestimonialPage extends Component {
  state = {
    invalidForm: true,
    formData: {
      name: '',
      relationship: 'Acquaintance, Friend, Supervisor, etc',
      tesType: '',
      yearsKnown: '0',
      quote: ''
    }
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddTestimonial(this.state.formData);
  };

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  render() {
    return (
      <>
        <h1 className="addTitle">Add Testimonial</h1>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name (required): </label>
            <input
              className="form-control"
              name="name"
              value={this.state.formData.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <br></br>
          <div className="form-group">
            <label>Relationship to Caleb (required): </label>
            <input
              className="form-control"
              name="relationship"
              value={this.state.formData.breed}
              onChange={this.handleChange}
              required
            />
          </div>
          <br></br>
          <div className="form-group">
            <label>Testimonial Type (Personal/Professional): </label>
            <input
              className="form-control"
              name="tesType"
              value={this.state.formData.breed}
              onChange={this.handleChange}
              required
            />
          </div>
          <br></br>
          <div className="form-group">
            <label>Years Known: </label>
            <input
              className="form-control"
              name="yearsKnown"
              value={this.state.formData.age}
              onChange={this.handleChange}
            />
          </div>
          <br></br>
          <div className="form-group">
            <label>Testimonial: </label>
            <input
              className="form-control"
              name="quote"
              value={this.state.formData.age}
              onChange={this.handleChange}
            />
          </div>
          <br></br>
          <button
            type="submit"
            className="btn"
            disabled={this.state.invalidForm}
          >
            ADD Testimonial
          </button>
        </form>
      </>
    );
  }
}

export default AddTestimonialPage;