import React from 'react';
import './TestimonialListPage.css';
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';

function TestimonialListPage(props) {
  return (
    <>
      <h1>Caleb's Friends have said...</h1>
      <div className='TestimonialListPage-grid'>
        {props.testimonials.map(testimonial =>
          <TestimonialCard
            key={testimonial._id}
            testimonial={testimonial}
            handleDeleteTestimonial={props.handleDeleteTestimonial}
          />
        )}
      </div>
    </>
  );
}

export default TestimonialListPage;