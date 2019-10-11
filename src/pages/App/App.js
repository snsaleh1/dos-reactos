import React, {Component} from 'react';
import './App.css';
import {Route, NavLink} from 'react-router-dom';
import * as testimonialAPI from '../../services/testimonials-api';
import TestimonialListPage from '../../pages/TestimonialListPage/TestimonialListPage';
import AddTestimonialPage from '../../pages/AddTestimonialPage/AddTestimonialPage';
import EditTestimonialPage from '../../pages/EditTestimonialPage/EditTestimonialPage';

class App extends Component {
  state = {
    testimonials: []
  };

  handleAddTestimonial = async newTesData => {
    const newTes = await testimonialAPI.create(newTesData);
    this.setState(state => ({
      testimonials: [...state.testimonials, newTes]
    }), () => this.props.history.push('/'));
  }

  handleUpdateTestimonial = async updatedTesData => {
    const updatedTestimonial = await testimonialAPI.update(updatedTesData);
    const newTestimonialsArray = this.state.testimonials.map(p => 
      p._id === updatedTestimonial._id ? updatedTestimonial : p
    );
    this.setState(
      {testimonials: newTestimonialsArray},
      // Using cb to wait for state to update before rerouting
      () => this.props.history.push('/')
    );
  }

  handleDeleteTestimonial= async id => {
    await testimonialAPI.deleteOne(id);
    this.setState(state => ({
      // Yay, filter returns a NEW array
      testimonials: state.testimonials.filter(p => p._id !== id)
    }), () => this.props.history.push('/'));
  }

  /*--- Lifecycle Methods ---*/

  async componentDidMount() {
    const testimonials = await testimonialAPI.getAll();
    this.setState({testimonials});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          React Testimonials CRUD
          <nav>
            <a href='http://localhost:3000'>Back to Portfolio</a>
            &nbsp;&nbsp;&nbsp;
            <NavLink exact to='/'>Testimonials LIST</NavLink>
            &nbsp;&nbsp;&nbsp;
            <NavLink exact to='/add'>ADD Testimonial</NavLink>
          </nav>
        </header>
        <main>
          <Route exact path='/' render={({history}) => 
            <TestimonialListPage
              testimonials={this.state.testimonials}
              handleDeleteTestimonial={this.handleDeleteTestimonial}
            />
          } />
          <Route exact path='/add' render={() => 
            <AddTestimonialPage
              handleAddTestimonial = {this.handleAddTestimonial}
            />
          } />
          <Route exact path='/edit' render={({history, location}) => 
            <EditTestimonialPage
              handleUpdateTestimonial={this.handleUpdateTestimonial}
              location={location}
            />
          } />
        </main>
      </div>
    );
  }
}

export default App;
