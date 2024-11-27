const ReturnBook = ({ books, setBooks }) => {
    return (
        <div>
            <button onClick={() => setBooks((prev) => prev.slice(0, -1))}>
                Return Last Book
            </button>
        </div>
    );
};

export default ReturnBook;
