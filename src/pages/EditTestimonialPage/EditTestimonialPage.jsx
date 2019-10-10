import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class EditTestimonialPage extends Component {
    state = {
        invalidForm: false,
        formData: this.props.location.state.puppy
    };

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleUpdateTestimonial(this.state.formData);
    };

    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value};
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    };

    render() {
        return(
            <>
        <h1>Edit Testimonial</h1>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name (required)</label>
            <input
              className="form-control"
              name="name"
              value={this.state.formData.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Relationship to Caleb (required)</label>
            <input
              className="form-control"
              name="relationship"
              value={this.state.formData.breed}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Years Known</label>
            <input
              className="form-control"
              name="yearsKnown"
              value={this.state.formData.age}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Testimonial</label>
            <input
              className="form-control"
              name="quote"
              value={this.state.formData.age}
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-xs"
            disabled={this.state.invalidForm}
          >
            SAVE TESTIMONIAL
          </button>&nbsp;&nbsp;
          <Link to='/'>CANCEL</Link>
        </form>
      </>
        );
    }
}

export default EditTestimonialPage