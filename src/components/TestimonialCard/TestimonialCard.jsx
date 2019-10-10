import React from 'react';
import {Link} from 'react-router-dom';

function TestimonialCard({testimonial, handleDeleteTestimonial}) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{testimonial.name}</h3>
      </div>
      <div className='panel-body'>
        <dl>
          <dt>Relationship: </dt>
          <dd>{testimonial.relationship}</dd>
          <dt>Years Known: </dt>
          <dd>{testimonial.yearsKnown}</dd>
          <dt>Testimonial: </dt>
          <dd>{testimonial.quote}</dd>
        </dl>
      </div>
      <div className='panel-footer'>
        {/* 
          The following is another approach to provide 
          data to a different route that's different
          from the Star Wars lab's solution code.
          The state object can be accessed in the new
          route via the location.state object
        */}
        <Link
          className='btn btn-xs btn-warning'
          to={{
            pathname: '/edit',
            state: {testimonial}
          }}
        >
          EDIT
        </Link>
        <button
          className='btn btn-xs btn-danger margin-left-10'
          onClick={() => handleDeleteTestimonial(testimonial._id)}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

export default TestimonialCard;