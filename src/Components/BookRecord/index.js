const BookRecord = (props) => {
  const { data, actions } = props;
  const { book } = data;
  return (
    <tr>
      <th scope="row">{book.id}</th>
      <td>{book.name}</td>
      <td>{book.quantity}</td>
      <td>
        <button
          type="button"
          className="btn btn-success"
          id={book.id}
          onClick={() => actions.handleBookAction(book.id, true)}
        >
          Book Now
        </button>
      </td>
    </tr>
  );
};

export default BookRecord;
