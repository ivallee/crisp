import React from 'react';

export default function Modal(props) {
  let modalRef = null;
  const onComplete = (event) => {
    modalRef.getDOMNode().modal('hide');
  };
  console.log(props, props.children);
  const children = React.Children.map(props.children, child => {
    return React.cloneElement(child, {
      onComplete
    });
  });

  return (
      <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true" ref={ ref => modalRef = ref }>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              { children }
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
  );
}